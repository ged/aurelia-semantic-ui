/* -*- javascript -*- */
"use strict";

/**
 * Container - http://semantic-ui.com/elements/container.html
 */

import {constants} from '../constants';
import {uiElement, uiAttribute} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';

@uiElement( 'container' )
export class SemanticUIContainerElement extends SemanticUIElement {}

@uiAttribute( 'container' )
export class SemanticUIContainerAttribute extends SemanticUIAttribute {
}

