/* -*- javascript -*- */
"use strict";

/**
 * List - http://semantic-ui.com/elements/list.html
 */

import * as constants from '../constants';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';

@uiElement( 'list' )
export class SemanticUIListElement extends SemanticUIElement {

	@bindableEnum( constants.VALID_SIZES ) size;

	@bindableToggle bulleted = false;
	@bindableToggle ordered = false;
	@bindableToggle link = false;

	@bindableToggle horizontal = false;
	@bindableToggle inverted = false;
	@bindableToggle selection = false;
	@bindableToggle animated = false;
	@bindableToggle relaxed = false;
	@bindableToggle divided = false;
	@bindableToggle celled = false;

}

@uiAttribute( 'list' )
export class SemanticUIListAttribute extends SemanticUIAttribute {

	@bindableEnum( constants.VALID_SIZES ) size;

	@bindableToggle bulleted = false;
	@bindableToggle ordered = false;
	@bindableToggle link = false;

	@bindableToggle horizontal = false;
	@bindableToggle inverted = false;
	@bindableToggle selection = false;
	@bindableToggle animated = false;
	@bindableToggle relaxed = false;
	@bindableToggle divided = false;
	@bindableToggle celled = false;

}

