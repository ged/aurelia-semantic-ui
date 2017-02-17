/* -*- javascript -*- */
"use strict";

/**
 * Message - http://semantic-ui.com/collections/message.html
 */

import * as constants from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';
import {child, bindable} from 'aurelia-framework';

@uiElement( 'message' )
export class SemanticUIMessageElement extends SemanticUIElement {

	@bindable icon;

	@bindableToggle success;
	@bindableToggle positive;
	@bindableToggle error;
	@bindableToggle negative;
	@bindableToggle warning;
	@bindableToggle info;

	@bindableEnum( constants.VALID_SIZES ) size;
	@bindableEnum( constants.VALID_COLORS ) color;

}

@uiAttribute( 'message' )
export class SemanticUIMessageAttribute extends SemanticUIAttribute {

	@bindable icon;
	@child( 'i.ui.icon' ) iconElement;

	@bindableToggle success;
	@bindableToggle positive;
	@bindableToggle error;
	@bindableToggle negative;
	@bindableToggle warning;
	@bindableToggle info;

	@bindableEnum( constants.VALID_SIZES ) size;
	@bindableEnum( constants.VALID_COLORS ) color;


	bind( ...args ) {
		super.bind( ...args );
		if ( this.icon ) {
			this.logger.debug( `Adding 'icon' to the list of classes.` );
			this.element.classList.add('icon');
		}
	}


	attached() {
		this.logger.debug( "Attaching a ui-message. Icon element is: ", this.iconElement );

		// Inject the icon if it's set but not already there
		if ( this.icon && !this.iconElement ) {
			this.logger.debug( `Creating a ${this.icon} icon for `, this.element );
			let iconNode = document.createElement( 'i' );
			iconNode.classList.add( 'ui', 'icon' );
			iconNode.classList.add( ...this.icon.split(' ') );
			this.element.insertBefore( iconNode, this.element.firstChild );
			this.iconElement = iconNode;
		}
	}


	iconChanged( newValue, oldValue ) {
		if ( this.iconElement ) {
			this.logger.debug( `Swapping icon of ${this.iconElement} to ${newValue} from ${oldValue}` );
			if ( oldValue ) { this.iconElement.classList.remove(...oldValue.split(' ')); }
			if ( newValue ) { this.iconElement.classList.add(...newValue.split(' ')); }
		}
	}

}

