/* -*- javascript -*- */
"use strict";

/**
 * Dimmer - http://semantic-ui.com/modules/dimmer.html
 */

import * as constants from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute} from '../decorators';
import {bindable} from 'aurelia-framework';


@uiElement( 'dimmer' )
export class SemanticUIDimmerElement extends SemanticUIElement {}

@uiAttribute( 'dimmer' )
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

