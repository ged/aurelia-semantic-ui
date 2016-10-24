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
export class SemanticUISegmentElement extends SemanticUIElement {

	@bindableToggle loading = false;
	@bindableToggle disabled = false;

	@bindableToggle inverted = false;
	@bindableToggle padded = false;
	@bindableToggle compact = false;
	@bindableToggle secondary = false;
	@bindableToggle tertiary = false;
	@bindableToggle circular = false;
	@bindableToggle clearing = false;

	@bindableEnum( constants.VALID_FLOATS ) floated;
	@bindableEnum( constants.VALID_ALIGNMENTS ) aligned;
	@bindableEnum( constants.VALID_COLORS, {includeName: false} ) color;

}

@uiAttribute( 'segment' )
export class SemanticUISegmentAttribute extends SemanticUIAttribute {

	@bindableToggle loading = false;
	@bindableToggle disabled = false;

	@bindableToggle inverted = false;
	@bindableToggle padded = false;
	@bindableToggle compact = false;
	@bindableToggle secondary = false;
	@bindableToggle tertiary = false;
	@bindableToggle circular = false;
	@bindableToggle clearing = false;

	@bindableEnum( constants.VALID_FLOATS ) floated;
	@bindableEnum( constants.VALID_ALIGNMENTS ) aligned;
	@bindableEnum( constants.VALID_COLORS, {includeName: false} ) color;

}


@uiElement( 'segments' )
export class SemanticUISegmentsElement extends SemanticUIElement {}

@uiAttribute( 'segments' )
export class SemanticUISegmentsAttribute extends SemanticUIAttribute {
}


