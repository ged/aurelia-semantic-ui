/* -*- javascript -*- */
"use strict";

/**
 * Checkbox - http://semantic-ui.com/modules/checkbox.html
 */

import * as constants from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';
import {bindable, bindingMode, child} from 'aurelia-framework';


@uiElement( 'checkbox' )
export class SemanticUICheckboxElement extends SemanticUIElement {

	@bindable({ defaultBindingMode: bindingMode.twoWay }) checked = false;

	@child( 'input.hidden' ) hiddenInput;


	attached() {
		this.logger.debug( "Checkboxing ", this.semanticElement );
		$( this.semanticElement ).checkbox({
			fireOnInit: true,
			onChecked: (ev) => this.checked = true,
			onUnchecked: (ev) => this.checked = false
		});
	}

}


@uiAttribute( 'checkbox' )
export class SemanticUICheckboxAttribute extends SemanticUIAttribute {

	@bindable({ defaultBindingMode: bindingMode.twoWay }) checked = false;

	@child( 'input.hidden' ) hiddenInput;

	attached() {
		this.logger.debug( "Checkboxing ", this.element );

		if ( !this.hiddenInput ) {
			this.hiddenInput = this.addHiddenInput();
		}

		$( this.semanticElement ).checkbox({
			fireOnInit: true,
			onChecked: (ev) => this.checked = true,
			onUnchecked: (ev) => this.checked = false
		});
	}


	addHiddenInput() {
		this.logger.debug( `Creating a hidden input for `, this.element );

		let inputNode = document.createElement( 'input' );
		inputNode.type = 'checkbox';
		inputNode.tabindex = '0';
		inputNode.classList.add( 'hidden' );

		this.element.insertBefore( inputNode, this.element.firstChild );

		return inputNode;
	}

}


