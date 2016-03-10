/* -*- javascript -*- */
"use strict";

/**
 * Divider - http://semantic-ui.com/elements/divider.html
 */

import {constants} from '../constants';
import {UIAttribute} from '../ui-attribute';
import {customAttribute} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}divider` )
export class UIDividerAttribute extends UIAttribute {
}

