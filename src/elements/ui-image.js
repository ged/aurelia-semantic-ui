/* -*- javascript -*- */
"use strict";

/**
 * Image - http://semantic-ui.com/elements/image.html
 */

import * as constants from '../constants';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';

@uiElement( 'image' )
export class SemanticUIImageElement extends SemanticUIElement {
	@bindableEnum( constants.VALID_SIZES ) size;
	@bindableToggle hidden = false;
	@bindableToggle disabled = false;
	@bindableToggle centered = false;
}

@uiAttribute( 'image' )
export class SemanticUIImageAttribute extends SemanticUIAttribute {
	@bindableEnum( constants.VALID_SIZES ) size;
	@bindableToggle hidden = false;
	@bindableToggle disabled = false;
	@bindableToggle centered = false;
}


@uiElement( 'images' )
export class SemanticUIImagesElement extends SemanticUIElement {
	@bindableEnum( constants.VALID_SIZES ) size;
}

@uiAttribute( 'images' )
export class SemanticUIImagesAttribute extends SemanticUIAttribute {
	@bindableEnum( constants.VALID_SIZES ) size;
}

