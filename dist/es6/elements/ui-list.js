/* -*- javascript -*- */
"use strict";

/**
 * List - http://semantic-ui.com/elements/list.html
 */

import {constants} from '../constants';
import {customAttribute, customElement, bindable} from 'aurelia-framework';
import {SemanticUIElement, SemanticUIAttribute, bindableEnum} from '../ui-base';

@customElement( `${constants.elementPrefix}list` )
export class SemanticUIListElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}list` )
export class SemanticUIListAttribute extends SemanticUIAttribute {

	@bindableEnum( ...constants.VALID_SIZES ) size;

}

