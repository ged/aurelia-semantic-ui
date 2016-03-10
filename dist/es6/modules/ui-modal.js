/* -*- javascript -*- */
"use strict";

/**
 * Modal - http://semantic-ui.com/modules/modal.html
 */

import {inject, customAttribute, bindable} from 'aurelia-framework';

@customAttribute( 'ui-modal' )
@inject( Element )
export class UIModalElement {

	@bindable active = false;


	constructor( element ) {
		this.element = element;
	}


	bind() {
		this.element.classList.add( 'ui', 'modal' );
	}


	activeChanged( newValue ) {
		if ( newValue ) {
			$( this.modal ).modal( 'show' );
		} else {
			$( this.modal ).modal( 'hide' );
		}
	}

}

