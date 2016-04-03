/* -*- javascript -*- */
"use strict";

/**
 * Image - http://semantic-ui.com/elements/image.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableEnum, bindableToggle} from '../ui-attribute';
import {customAttribute} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}image` )
export class UIImageAttribute extends UIAttribute {

	@bindableEnum( ...constants.VALID_SIZES ) size;
	@bindableToggle hidden = false;
	@bindableToggle disabled = false;

}


@customAttribute( `${constants.attributePrefix}images` )
export class UIImagesAttribute extends UIAttribute {

	@bindableEnum( ...constants.VALID_SIZES ) size;

}