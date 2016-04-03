/* -*- javascript -*- */
"use strict";

/**
 * Icon - http://semantic-ui.com/elements/icon.html#/definition
 */

import {constants} from '../constants';
import {UIAttribute, bindableToggle, bindableEnum} from '../ui-attribute';
import {customAttribute, bindable} from 'aurelia-framework';


@customAttribute( `${constants.attributePrefix}icon` )
export class UIIconAttribute extends UIAttribute {

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


@customAttribute( `${constants.attributePrefix}icons` )
export class UIIconsAttribute extends UIAttribute {

	@bindableEnum( ...constants.VALID_SIZES ) size;

}

