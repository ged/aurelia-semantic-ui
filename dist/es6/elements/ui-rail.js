/* -*- javascript -*- */
"use strict";

/**
 * Content Rail - http://semantic-ui.com/elements/rail.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableEnum} from '../ui-base';
import {customAttribute, customElement, bindable} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}rail` )
export class SemanticUIRailElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}rail` )
export class SemanticUIRailAttribute extends SemanticUIAttribute {

	@bindableEnum( 'left', 'right' ) side = 'left';

}

