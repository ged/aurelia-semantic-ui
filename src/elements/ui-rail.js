/* -*- javascript -*- */
"use strict";

/**
 * Content Rail - http://semantic-ui.com/elements/rail.html
 */

import {constants} from '../constants';
import {uiElement, uiAttribute, bindableEnum} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {bindable} from 'aurelia-framework';

@uiElement( 'rail' )
export class SemanticUIRailElement extends SemanticUIElement {}

@uiAttribute( 'rail' )
export class SemanticUIRailAttribute extends SemanticUIAttribute {

	@bindableEnum( 'left', 'right' ) side = 'left';

}

