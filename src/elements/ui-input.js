/* -*- javascript -*- */

/**
 * Input - http://semantic-ui.com/elements/input.html
 */

import * as constants from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableToggle, bindableEnum} from '../decorators';

@uiElement( 'input' )
export class SemanticUIInputElement extends SemanticUIElement {}

@uiAttribute( 'input' )
export class SemanticUIInputAttribute extends SemanticUIAttribute {

	@bindableToggle focus = false;
	@bindableToggle loading = false;
	@bindableToggle disabled = false;
	@bindableToggle error = null;

	@bindableEnum( constants.VALID_SIZES ) size;

}

