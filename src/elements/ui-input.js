/* -*- javascript -*- */
"use strict";

/**
 * Input - http://semantic-ui.com/elements/input.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableEnum, bindableToggle} from '../ui-base';
import {customAttribute, customElement} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}input` )
export class SemanticUIInputElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}input` )
export class SemanticUIInputAttribute extends SemanticUIAttribute {

	@bindableToggle focus = false;
	@bindableToggle loading = false;
	@bindableToggle disabled = false;
	@bindableToggle error = null;

	@bindableEnum( ...constants.VALID_SIZES ) size;

}

