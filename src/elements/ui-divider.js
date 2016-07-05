/* -*- javascript -*- */
"use strict";

/**
 * Divider - http://semantic-ui.com/elements/divider.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {customAttribute, customElement} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}divider` )
export class SemanticUIDividerElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}divider` )
export class SemanticUIDividerAttribute extends SemanticUIAttribute {
}

