/* -*- javascript -*- */
"use strict";

/**
 * Form - http://semantic-ui.com/collections/form.html
 */

import {UIAttribute, bindableToggle, bindableEnum} from '../ui-attribute';
import {inject, customAttribute, children, bindable} from 'aurelia-framework';

@customAttribute( 'ui-form' )
export class UIFormAttribute extends UIAttribute {

	@bindableToggle loading = false;
	@bindableEnum('error', 'success', 'warning') state;
	@children( '.field' ) fields;

}


@customAttribute( 'ui-checkbox' )
export class UICheckboxAttribute extends UIAttribute {

	attached() {
		this.logger.debug( "Activating a ui-checkbox" );
		$( this.element ).checkbox();
	}

}


