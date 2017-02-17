/* -*- javascript -*- */
"use strict";

/**
 * Statistic - http://semantic-ui.com/views/statistic.html
 */

import * as constants from '../constants';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {customAttribute, customElement, useView} from 'aurelia-framework';


@uiElement( 'statistic' )
export class SemanticUIStatisticElement extends SemanticUIElement {
	@bindableEnum( constants.VALID_SIZES ) size;
	@bindableEnum( constants.VALID_COLORS, {includeName: false} ) color;

	@bindableToggle horizontal = false;
}


@uiAttribute( 'statistic' )
export class SemanticUIStatisticAttribute extends SemanticUIAttribute {
	@bindableEnum( constants.VALID_SIZES ) size;
	@bindableEnum( constants.VALID_COLORS, {includeName: false} ) color;

	@bindableToggle horizontal = false;
}


@useView( './ui-statistics.html' )
@uiElement( 'statistics' )
export class SemanticUIStatisticsElement extends SemanticUIElement {
	@bindableEnum( constants.VALID_SIZES ) size;
	@bindableEnum( constants.VALID_COLORS, {includeName: false} ) color;

	@bindableToggle horizontal = false;
}


@uiAttribute( 'statistics' )
export class SemanticUIStatisticsAttribute extends SemanticUIAttribute {
	@bindableEnum( constants.VALID_SIZES ) size;
	@bindableEnum( constants.VALID_COLORS, {includeName: false} ) color;

	@bindableToggle horizontal = false;
}


