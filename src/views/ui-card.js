/* -*- javascript -*- */
"use strict";

/**
 * Card - http://semantic-ui.com/views/card.html
 */

import {constants} from '../constants';
import {UIAttribute} from '../ui-attribute';
import {customAttribute} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}card` )
export class UICardAttribute extends UIAttribute {
}


