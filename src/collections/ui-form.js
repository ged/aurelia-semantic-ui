/* -*- javascript -*- */
"use strict";

/**
 * Form - http://semantic-ui.com/collections/form.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableToggle, bindableEnum} from '../ui-attribute';
import {inject, customAttribute, children, bindable} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}form` )
export class UIFormAttribute extends UIAttribute {

	@bindableToggle loading = false;
	@bindableToggle error;
	@bindableToggle success;
	@bindableToggle warning;

	@children( '.field' ) fields;

}


@customAttribute( `${constants.attributePrefix}checkbox` )
export class UICheckboxAttribute extends UIAttribute {

	attached() {
		this.logger.debug( "Activating a ui-checkbox" );
		$( this.element ).checkbox();
	}

}


