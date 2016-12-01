/* -*- javascript -*- */
"use strict";

/**
 * Label - http://semantic-ui.com/elements/label.html
 */

import * as constants from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableEnum} from '../decorators';

@uiElement( 'label' )
export class SemanticUILabelElement extends SemanticUIElement {}

@uiAttribute( 'label' )
export class SemanticUILabelAttribute extends SemanticUIAttribute {

	@bindableEnum( constants.VALID_COLORS, {includeName: false} ) color;
	@bindableEnum( constants.VALID_SIZES ) size;

}


@uiElement( 'labels' )
export class SemanticUILabelsElement extends SemanticUIElement {}

@uiAttribute( 'labels' )
export class SemanticUILabelsAttribute extends SemanticUIAttribute {

	@bindableEnum( constants.VALID_COLORS, {includeName: false} ) color;
	@bindableEnum( constants.VALID_SIZES ) size;

}
