/* -*- javascript -*- */
"use strict";

/**
 * Statistic - http://semantic-ui.com/views/statistic.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableEnum} from '../ui-base';
import {customAttribute, customElement} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}statistic` )
export class SemanticUIStatisticElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}statistic` )
export class SemanticUIStatisticAttribute extends SemanticUIAttribute {
	@bindableEnum( ...constants.VALID_SIZES ) size;
	@bindableEnum( ...constants.VALID_COLORS ) color;
}


@customElement( `${constants.elementPrefix}statistics` )
export class SemanticUIStatisticsElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}statistics` )
export class SemanticUIStatisticsAttribute extends SemanticUIAttribute {
	@bindableEnum( ...constants.VALID_SIZES ) size;
	@bindableEnum( ...constants.VALID_COLORS ) color;
}


