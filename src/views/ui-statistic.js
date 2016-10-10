/* -*- javascript -*- */
"use strict";

/**
 * Statistic - http://semantic-ui.com/views/statistic.html
 */

import {constants} from '../constants';
import {uiElement, uiAttribute, bindableEnum} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {customAttribute, customElement} from 'aurelia-framework';


@uiElement( 'statistic' )
export class SemanticUIStatisticElement extends SemanticUIElement {}


@uiAttribute( 'statistic' )
export class SemanticUIStatisticAttribute extends SemanticUIAttribute {
	@bindableEnum( ...constants.VALID_SIZES ) size;
	@bindableEnum( ...constants.VALID_COLORS ) color;
}


@uiElement( 'statistics' )
export class SemanticUIStatisticsElement extends SemanticUIElement {}


@uiAttribute( 'statistics' )
export class SemanticUIStatisticsAttribute extends SemanticUIAttribute {
	@bindableEnum( ...constants.VALID_SIZES ) size;
	@bindableEnum( ...constants.VALID_COLORS ) color;
}


