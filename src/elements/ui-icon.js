/* -*- javascript -*- */
"use strict";

/**
 * Icon - http://semantic-ui.com/elements/icon.html#/definition
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableToggle, bindableEnum} from '../ui-base';
import {customElement, customAttribute, bindable} from 'aurelia-framework';


@customElement( `${constants.elementPrefix}icon` )
export class SemanticUIIconElement extends SemanticUIElement {

	@bindable name = "help circle";
	@bindableEnum( ...constants.VALID_SIZES ) size;
	@bindableEnum( ...constants.VALID_COLORS ) color;
	@bindableToggle disabled;
	@bindableToggle loading;

}


@customAttribute( `${constants.attributePrefix}icon` )
export class SemanticUIIconAttribute extends SemanticUIAttribute {

	@bindable name = "help circle";
	@bindableEnum( ...constants.VALID_SIZES ) size;
	@bindableEnum( ...constants.VALID_COLORS ) color;
	@bindableToggle disabled;
	@bindableToggle loading;


	bind() {
		// No super, as the classList doesn't get the 'ui' class.
		this.element.classList.add( ...this.name.split(' ') );
		this.element.classList.add( 'icon' );
	}


	nameChanged( newValue, oldValue ) {
		this.logger.debug( `Name changed from ${oldValue} to ${newValue}` );
		this.element.classList.remove( ...oldValue.split(' ') );
		this.element.classList.add( ...newValue.split(' ') );
	}

}


@customElement( `${constants.elementPrefix}icons` )
export class SemanticUIIconsElement extends SemanticUIElement {
	@bindableEnum( ...constants.VALID_SIZES ) size;
}



@customAttribute( `${constants.attributePrefix}icons` )
export class SemanticUIIconsAttribute extends SemanticUIAttribute {
	@bindableEnum( ...constants.VALID_SIZES ) size;
}

