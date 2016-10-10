/* -*- javascript -*- */
"use strict";

/**
 * Table - http://semantic-ui.com/collections/table.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';

@uiElement( 'table' )
export class SemanticUITableElement extends SemanticUIElement {}

@uiAttribute( 'table' )
export class SemanticUITableAttribute extends SemanticUIAttribute {
}

