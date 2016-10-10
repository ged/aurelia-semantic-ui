/* -*- javascript -*- */
"use strict";

/**
 * Divider - http://semantic-ui.com/elements/divider.html
 */

import {constants} from '../constants';
import {uiElement, uiAttribute} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';

@uiElement( 'divider' )
export class SemanticUIDividerElement extends SemanticUIElement {}

@uiAttribute( 'divider' )
export class SemanticUIDividerAttribute extends SemanticUIAttribute {
}

