/* -*- javascript -*- */
"use strict";

/**
 * Container - http://semantic-ui.com/elements/container.html
 */

import {constants} from '../constants';
import {UIAttribute} from '../ui-attribute';
import {customAttribute} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}container` )
export class UIContainerAttribute extends UIAttribute {
}

