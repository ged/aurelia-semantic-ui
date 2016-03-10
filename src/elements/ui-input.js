/* -*- javascript -*- */
"use strict";

/**
 * Input - http://semantic-ui.com/elements/input.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableEnum, bindableToggle} from '../ui-attribute';
import {customAttribute} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}input` )
export class UIInputAttribute extends UIAttribute {

	@bindableToggle focus = false;
	@bindableToggle loading = false;
	@bindableToggle disabled = false;
	@bindableToggle error = null;

	@bindableEnum( ...constants.VALID_SIZES ) size;

}

