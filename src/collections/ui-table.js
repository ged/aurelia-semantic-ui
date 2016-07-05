/* -*- javascript -*- */
"use strict";

/**
 * Table - http://semantic-ui.com/collections/table.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableToggle, bindableEnum} from '../ui-base';
import {inject, child, customAttribute, customElement, children, bindable} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}table` )
export class SemanticUITableElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}table` )
export class SemanticUITableAttribute extends SemanticUIAttribute {
}

