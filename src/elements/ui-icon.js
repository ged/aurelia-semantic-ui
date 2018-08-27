/* -*- javascript -*- */

/**
 * Icon - http://semantic-ui.com/elements/icon.html#/definition
 */

import * as constants from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';
import {bindable, containerless} from 'aurelia-framework';


@containerless
@uiElement( 'icon' )
export class SemanticUIIconElement extends SemanticUIElement {

	@bindable name = "help circle";
	@bindableEnum( constants.VALID_SIZES ) size;
	@bindableEnum( constants.VALID_COLORS, {includeName: false} ) color;
	@bindableToggle disabled;
	@bindableToggle loading;
	@bindableToggle inverted;

}


@uiAttribute( 'icon' )
export class SemanticUIIconAttribute extends SemanticUIAttribute {

	@bindable name = "help circle";
	@bindableEnum( constants.VALID_SIZES ) size;
	@bindableEnum( constants.VALID_COLORS, {includeName: false} ) color;
	@bindableToggle disabled;
	@bindableToggle loading;
	@bindableToggle inverted;


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


@uiElement( 'icons' )
export class SemanticUIIconsElement extends SemanticUIElement {
	@bindableEnum( constants.VALID_SIZES ) size;
	@bindableToggle inverted;
}



@uiAttribute( 'icons' )
export class SemanticUIIconsAttribute extends SemanticUIAttribute {
	@bindableEnum( constants.VALID_SIZES ) size;
	@bindableToggle inverted;
}

