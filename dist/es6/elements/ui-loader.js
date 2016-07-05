/* -*- javascript -*- */
"use strict";

/**
 * Loader - http://semantic-ui.com/elements/loader.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {customAttribute, customElement, bindable} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}loader` )
export class SemanticUILoaderElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}loader` )
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


