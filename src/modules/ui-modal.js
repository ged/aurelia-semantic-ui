/* -*- javascript -*- */
"use strict";

/**
 * Modal - http://semantic-ui.com/modules/modal.html
 */

import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';

@customElement( 'ui-modal' )
@inject( Element )
export class UIModalElement {

	@bindable active = false;

	constructor( element ) {
		this.element = element;
	}

	attached() {}

	activeChanged( newValue ) {
		if ( newValue ) {
			$( this.modal ).modal( 'show' );
		} else {
			$( this.modal ).modal( 'hide' );
		}
	}
}

