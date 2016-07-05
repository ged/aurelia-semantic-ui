/* -*- javascript -*- */
"use strict";

/**
 * Segment - http://semantic-ui.com/elements/segment.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableToggle, bindableEnum} from '../ui-base';
import {customAttribute, customElement} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}segment` )
export class SemanticUISegmentElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}segment` )
export class SemanticUISegmentAttribute extends SemanticUIAttribute {

	@bindableToggle loading = false;
	@bindableToggle disabled = false;
	@bindableEnum( ...constants.VALID_COLORS ) color;

}


@customElement( `${constants.elementPrefix}segments` )
export class SemanticUISegmentsElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}segments` )
export class SemanticUISegmentsAttribute extends SemanticUIAttribute {
}


