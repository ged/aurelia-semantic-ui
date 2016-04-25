/* -*- javascript -*- */
"use strict";

/**
 * Statistic - http://semantic-ui.com/views/statistic.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableEnum} from '../ui-attribute';
import {customAttribute} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}statistic` )
export class UIStatisticAttribute extends UIAttribute {
	@bindableEnum( ...constants.VALID_SIZES ) size;
	@bindableEnum( ...constants.VALID_COLORS ) color;
}


@customAttribute( `${constants.attributePrefix}statistics` )
export class UIStatisticsAttribute extends UIAttribute {
	@bindableEnum( ...constants.VALID_SIZES ) size;
	@bindableEnum( ...constants.VALID_COLORS ) color;
}


