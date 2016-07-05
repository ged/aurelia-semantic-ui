/* -*- javascript -*- */
"use strict";

/**
 * Image - http://semantic-ui.com/elements/image.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableEnum, bindableToggle} from '../ui-base';
import {customAttribute, customElement} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}image` )
export class SemanticUIImageElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}image` )
export class SemanticUIImageAttribute extends SemanticUIAttribute {

	@bindableEnum( ...constants.VALID_SIZES ) size;
	@bindableToggle hidden = false;
	@bindableToggle disabled = false;

}


@customElement( `${constants.elementPrefix}images` )
export class SemanticUIImagesElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}images` )
export class SemanticUIImagesAttribute extends SemanticUIAttribute {

	@bindableEnum( ...constants.VALID_SIZES ) size;

}