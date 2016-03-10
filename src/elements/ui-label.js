/* -*- javascript -*- */
"use strict";

/**
 * Label - http://semantic-ui.com/elements/label.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableEnum, bindableToggle} from '../ui-attribute';
import {customAttribute} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}label` )
export class UILabelAttribute extends UIAttribute {

	@bindableEnum( ...constants.VALID_COLORS ) color;
	@bindableEnum( ...constants.VALID_SIZES ) size;

}


@customAttribute( `${constants.attributePrefix}labels` )
export class UILabelsAttribute extends UIAttribute {

	@bindableEnum( ...constants.VALID_COLORS ) color;
	@bindableEnum( ...constants.VALID_SIZES ) size;

}
