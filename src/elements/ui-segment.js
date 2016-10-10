/* -*- javascript -*- */
"use strict";

/**
 * Segment - http://semantic-ui.com/elements/segment.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';
import {customAttribute, customElement} from 'aurelia-framework';

@uiElement( 'segment' )
export class SemanticUISegmentElement extends SemanticUIElement {}

@uiAttribute( 'segment' )
export class SemanticUISegmentAttribute extends SemanticUIAttribute {

	@bindableToggle loading = false;
	@bindableToggle disabled = false;
	@bindableEnum( ...constants.VALID_COLORS ) color;

}


@uiElement( 'segments' )
export class SemanticUISegmentsElement extends SemanticUIElement {}

@uiAttribute( 'segments' )
export class SemanticUISegmentsAttribute extends SemanticUIAttribute {
}


