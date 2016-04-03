/* -*- javascript -*- */
"use strict";

/**
 * Segment - http://semantic-ui.com/elements/segment.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableToggle, bindableEnum} from '../ui-attribute';
import {customAttribute, computedFrom, bindable, inject, LogManager} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}segment` )
export class UISegmentAttribute extends UIAttribute {

	@bindableToggle loading = false;
	@bindableToggle disabled = false;
	@bindableEnum( ...constants.VALID_COLORS ) color;

}


@customAttribute( `${constants.attributePrefix}segments` )
export class UISegmentsAttribute extends UIAttribute {
}


