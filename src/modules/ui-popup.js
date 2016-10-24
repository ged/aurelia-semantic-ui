/* -*- javascript -*- */
"use strict";

/**
 * Popup - http://semantic-ui.com/modules/popup.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';
import {inject, bindable, bindingMode} from 'aurelia-framework';


@uiElement( 'popup' )
export class SemanticUIPopupElement extends SemanticUIElement {}


@uiAttribute( 'popup' )
export class SemanticUIPopupAttribute extends SemanticUIAttribute {

	@bindable title = null;
	@bindable content = null;
	@bindable html = null;
	@bindable variation = null;
	@bindable selector = null;
	@bindable position = null;
	@bindable transition = null;

	@bindableEnum( constants.VALID_SIZES ) size;
	@bindableToggle inline = false;


	bind( ...args ) {
		// Don't add 'ui popup' to the class of the element; add an element for the popup content
		// super.bind( ...args );
	}

	titleChanged( newValue, oldValue ) {
		this.logger.debug( `Title changed to: ${this.title}` );
		this.configure();
	}

	contentChanged( newValue, oldValue ) {
		this.logger.debug( `Content changed to: ${this.content}` );
		this.configure();
	}

	htmlChanged( newValue, oldValue ) {
		this.logger.debug( `HTML changed to: ${this.html}` );
		this.configure();
	}

	sizeChanged( newValue, oldValue ) {
		this.logger.debug( `Size changed to: ${this.size}` );
		this.configure();
	}

	positionChanged( newValue, oldValue ) {
		this.logger.debug( `Position changed to: ${this.position}` );
		this.configure();
	}

	transitionChanged( newValue, oldValue ) {
		this.logger.debug( `Transition changed to: ${this.transition}` );
		this.configure();
	}

    attached() {
		this.logger.debug( "Activating popup for ", this.element );
		let popupEl = null;

		// Add the popup element if it's not specified or marked as inline
		if ( this.selector ) {
			this.logger.debug( "Selector mode." );
			popupEl = $( this.selector ).get( 0 );
			popupEl.classList.add( 'ui', 'popup' )
			$( this.element ).popup({ popup: popupEl, target: this.element });
		} else if ( this.inline ) {
			this.logger.debug( "Inline mode." );
			$( this.element ).popup({ inline: true });
		} else {
			this.logger.debug( "Appending an element for the popup." );
			popupEl = document.createElement( 'div' );
			popupEl.classList.add( 'ui', 'popup' );
			this.element.parentNode.insertBefore( popupEl, this.element.nextSibling );
	        this.configure();
		}

    }


	makeVariation() {
		let value = '';

		if ( this.size ) { value = this.size.concat(' ')  }
		if ( this.variation ) { value = value + this.variation.concat(' ') }

		return value.trim();
	}


	configure() {
		let options = {};

		if ( this.title ) { options.title = this.title }
		if ( this.content ) { options.content = this.content }
		if ( this.html ) { options.html = this.html }
		if ( this.position ) { options.position = this.position }
		if ( this.transition ) { options.transition = this.transition }

		options.variation = this.makeVariation();

		this.logger.debug( "Configuring popup with options: ", options );
		$( this.element ).popup( options );
	}

}

