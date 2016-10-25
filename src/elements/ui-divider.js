/* -*- javascript -*- */
"use strict";

/**
 * Divider - http://semantic-ui.com/elements/divider.html
 */

import {constants} from '../constants';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';

@uiElement( 'divider' )
export class SemanticUIDividerElement extends SemanticUIElement {

	@bindableToggle vertical = false;
	@bindableToggle clearing = false;
	@bindableToggle fitted = false;
	@bindableToggle hidden = false;
	@bindableToggle inverted = false;
	@bindableToggle section = false;

}

@uiAttribute( 'divider' )
export class SemanticUIDividerAttribute extends SemanticUIAttribute {

	@bindableToggle vertical = false;
	@bindableToggle clearing = false;
	@bindableToggle fitted = false;
	@bindableToggle hidden = false;
	@bindableToggle inverted = false;
	@bindableToggle section = false;

}

