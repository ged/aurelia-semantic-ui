/* -*- javascript -*- */
"use strict";

/**
 * Feed - http://semantic-ui.com/views/feed.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableEnum} from '../ui-attribute';
import {customAttribute} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}feed` )
export class UIFeedAttribute extends UIAttribute {

	@bindableEnum( ...constants.VALID_SIZES ) size;

}


