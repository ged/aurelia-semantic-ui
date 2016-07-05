/* -*- javascript -*- */
"use strict";

/**
 * Container - http://semantic-ui.com/elements/container.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {customAttribute, customElement} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}container` )
export class SemanticUIContainerElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}container` )
export class SemanticUIContainerAttribute extends SemanticUIAttribute {
}

