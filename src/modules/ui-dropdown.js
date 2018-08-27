/* -*- javascript -*- */

/**
 * Dropdown - http://semantic-ui.com/modules/dropdown.html
 */

import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableToggle} from '../decorators';
import {bindable, bindingMode} from 'aurelia-framework';

@uiElement( 'dropdown' )
export class SemanticUIDropdownElement extends SemanticUIElement {
	@bindableToggle selection;
}

@uiAttribute( 'dropdown' )
export class SemanticUIDropdownAttribute extends SemanticUIAttribute {

	@bindable({ defaultBindingMode: bindingMode.twoWay }) selection;
	@bindableToggle loading = false;
	@bindableToggle error = false;
	@bindableToggle disabled = false;

	@bindable options = {};


	bind( ...args ) {
		super.bind( ...args );

		if ( this.selection ) {
			let name = this.selection;
			this.logger.debug( "Selection set to: ", name );
			this.element.classList.add( 'selection' );

			this.logger.debug( "Tag name set to: ", this.element.tagName );

			if ( this.element.tagName !== 'SELECT' ) {
				this.logger.debug( "Non-select dropdown." );

				// TODO: This doesn't work yet; it injects the hidden field, but the binding
				// doesn't work. It likely needs to be hooked up manually, but I have no
				// clue how to do that currently.
				let input = this.element.querySelector( 'input[type=hidden]' );
				if ( !input ) {
					this.logger.debug( `No hidden input for ${name}; creating one.` );
					input = document.createElement( 'input' );
					input.type = 'hidden';
					input.name = name;

					let binding = document.createAttribute( "model.bind" );
					binding.value = name;
					input.setAttributeNode( binding );

					this.element.insertBefore( input, this.element.firstChild );
				} else {
					this.logger.debug( "Already has a hidden element: ", input );
				}
			}
		}
	}


	attached() {
		this.logger.debug( "Activating dropdown for ", this.element, " with options: ", this.options );
		$( this.element ).dropdown( this.options );
	}

}

