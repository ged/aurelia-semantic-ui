/* -*- javascript -*- */
"use strict";

/**
 * Loader - http://semantic-ui.com/elements/loader.html
 */

import * as constants from '../constants';
import {uiElement, uiAttribute} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {bindable} from 'aurelia-framework';

@uiElement( 'loader' )
export class SemanticUILoaderElement extends SemanticUIElement {}

@uiAttribute( 'loader' )
export class SemanticUILoaderAttribute extends SemanticUIAttribute {

	@bindable active = false;


	bind( ...args ) {
		super.bind( ...args );

		if ( this.active ) {
			this.logger.debug( "Loader is starting out active." );
			this.element.classList.add('active')
		};
	}


	activeChanged( newValue ) {
		if ( newValue ) {
			this.logger.debug( "Activating loader." );
			this.element.classList.remove( 'disabled' );
			this.element.classList.add( 'active' );
		} else {
			this.logger.debug( "Deactivating loader." );
			this.element.classList.remove( 'active' );
			this.element.classList.add( 'disabled' );
		}
	}

}


