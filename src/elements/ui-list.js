/* -*- javascript -*- */
"use strict";

/**
 * List - http://semantic-ui.com/elements/list.html
 */

import {constants} from '../constants';
import {customAttribute, bindable} from 'aurelia-framework';
import {UIAttribute, bindableEnum} from '../ui-attribute';

@customAttribute( `${constants.attributePrefix}list` )
export class UIListAttribute extends UIAttribute {

	@bindableEnum( ...constants.VALID_SIZES ) size;

}

