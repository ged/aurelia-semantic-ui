/* -*- javascript -*- */
"use strict";

/**
 * Content Header - http://semantic-ui.com/elements/header.html#content-headers
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableEnum} from '../ui-base';
import {customAttribute, customElement} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}header` )
export class SemanticUIHeaderElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}header` )
export class SemanticUIHeaderAttribute extends SemanticUIAttribute {

	@bindableEnum( ...constants.VALID_SIZES ) size;
	@bindableEnum( ...constants.VALID_COLORS ) color;

}

