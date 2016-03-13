/* -*- javascript -*- */
"use strict";

/**
 * Modal - http://semantic-ui.com/modules/modal.html
 */

import {constants} from '../constants';
import {customAttribute} from 'aurelia-framework';
import {UIAttribute, bindableToggle} from '../ui-attribute';

@customAttribute( 'ui-modal' )
export class UIModalAttribute extends UIAttribute {

	@bindableToggle active = false;



	attached() {
		$( this.element ).modal();
	}


	activeChanged( newValue ) {
		if ( newValue ) {
			$( this.element ).modal( 'show' );
		} else {
			$( this.element ).modal( 'hide' );
		}
	}

}

