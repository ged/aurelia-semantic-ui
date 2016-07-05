/* -*- javascript -*- */
"use strict";

/**
 * Dimmer - http://semantic-ui.com/modules/dimmer.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableToggle, bindableEnum} from '../ui-base';
import {customAttribute, customElement, bindable} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}dimmer` )
export class SemanticUIDimmerElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}dimmer` )
export class SemanticUIDimmerAttribute extends SemanticUIAttribute {

	@bindable active = false;
	@bindable options = {};


	bind( ...args ) {
		super.bind( ...args );

		if ( this.active ) {
			this.logger.debug( "Dimmer is starting out active." );
			this.element.classList.add( 'active' );
		};
	}


    attached() {
		this.logger.debug( "Setting up dimmer for ", this.element, " with options: ", this.options );
        $( this.element ).dimmer( this.options );
    }


	show() {
		$( this.element ).dimmer( 'show' );
	}


	hide() {
		$( this.element ).dimmer( 'hide' );
	}

}

