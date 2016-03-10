/* -*- javascript -*- */
"use strict";

/**
 * Content Header - http://semantic-ui.com/elements/header.html#content-headers
 */

import {constants} from '../constants';
import {UIAttribute, bindableEnum} from '../ui-attribute';
import {customAttribute} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}header` )
export class UIHeaderAttribute extends UIAttribute {

	@bindableEnum( ...constants.VALID_SIZES ) size;
	@bindableEnum( ...constants.VALID_COLORS ) color;

}

