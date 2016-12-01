/* -*- javascript -*- */
"use strict";

/**
 * Divider - http://semantic-ui.com/elements/divider.html
 */

import * as constants from '../constants';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';

@uiElement( 'divider' )
export class SemanticUIDividerElement extends SemanticUIElement {

	@bindableToggle horizontal = false;
	@bindableToggle vertical = false;
	@bindableToggle clearing = false;
	@bindableToggle fitted = false;
	@bindableToggle hidden = false;
	@bindableToggle inverted = false;
	@bindableToggle section = false;

}

@uiAttribute( 'divider' )
export class SemanticUIDividerAttribute extends SemanticUIAttribute {

	@bindableToggle horizontal = false;
	@bindableToggle vertical = false;
	@bindableToggle clearing = false;
	@bindableToggle fitted = false;
	@bindableToggle hidden = false;
	@bindableToggle inverted = false;
	@bindableToggle section = false;

}

