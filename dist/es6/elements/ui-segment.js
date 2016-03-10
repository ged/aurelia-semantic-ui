/* -*- javascript -*- */
"use strict";

/**
 * Segment - http://semantic-ui.com/elements/segment.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableToggle, bindableEnum} from '../ui-attribute';
import {customAttribute, computedFrom, bindable, inject, LogManager} from 'aurelia-framework';

@customAttribute( 'ui-segment' )
export class UISegmentAttribute extends UIAttribute {

	@bindableToggle loading = false;
	@bindableToggle disabled = false;
	@bindableEnum( ...constants.VALID_COLORS ) color;

}


@customAttribute( 'ui-segments' )
export class UISegmentsAttribute extends UIAttribute {
}


