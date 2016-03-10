/* -*- javascript -*- */
"use strict";

/**
 * Content Rail - http://semantic-ui.com/elements/rail.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableEnum} from '../ui-attribute';
import {customAttribute, bindable} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}rail` )
export class UIRailAttribute extends UIAttribute {

	@bindableEnum( 'left', 'right' ) side = 'left';

}

