/* -*- javascript -*- */
"use strict";

/**
 * Dimmer - http://semantic-ui.com/modules/dimmer.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableToggle, bindableEnum} from '../ui-attribute';
import {customAttribute, bindable, bindingMode} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}dimmer` )
export class UIDimmerAttribute extends UIAttribute {

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

