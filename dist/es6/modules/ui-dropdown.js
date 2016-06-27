/* -*- javascript -*- */
"use strict";

/**
 * Dropdown - http://semantic-ui.com/modules/dropdown.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableToggle, bindableEnum} from '../ui-attribute';
import {inject, customAttribute, bindable, bindingMode} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}dropdown` )
export class UIDropdownAttribute extends UIAttribute {

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

			if ( this.element.tagName !== 'select' ) {
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

					let binding = document.createAttribute( "value.bind" );
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
		this.logger.debug( "Activating dropdown for ", this.element );
        $( this.element ).dropdown( this.options );
    }

}

