/* -*- javascript -*- */
"use strict";

/**
 * Table - http://semantic-ui.com/collections/table.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableToggle, bindableEnum} from '../ui-attribute';
import {inject, child, customAttribute, children, bindable} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}table` )
export class UITableAttribute extends UIAttribute {
}

