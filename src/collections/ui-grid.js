/* -*- javascript -*- */
"use strict";

/**
 * Grid - http://semantic-ui.com/collections/grid.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableToggle, bindableEnum} from '../ui-attribute';
import {inject, customAttribute, children, bindable} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}grid` )
export class UIGridAttribute extends UIAttribute {

	@children( '.column' ) columns;

}


