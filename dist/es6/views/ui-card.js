/* -*- javascript -*- */
"use strict";

/**
 * Card - http://semantic-ui.com/views/card.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {customAttribute, customElement} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}card` )
export class SemanticUICardElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}card` )
export class SemanticUICardAttribute extends SemanticUIAttribute {
}


