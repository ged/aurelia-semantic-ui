/* -*- javascript -*- */
"use strict";

/**
 * List - http://semantic-ui.com/elements/list.html
 */

import {constants} from '../constants';
import {uiElement, uiAttribute, bindableEnum} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';

@uiElement( 'list' )
export class SemanticUIListElement extends SemanticUIElement {}

@uiAttribute( 'list' )
export class SemanticUIListAttribute extends SemanticUIAttribute {

	@bindableEnum( constants.VALID_SIZES ) size;

}

