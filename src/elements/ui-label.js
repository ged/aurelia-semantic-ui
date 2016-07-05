/* -*- javascript -*- */
"use strict";

/**
 * Label - http://semantic-ui.com/elements/label.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableEnum, bindableToggle} from '../ui-base';
import {customAttribute, customElement} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}label` )
export class SemanticUILabelElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}label` )
export class SemanticUILabelAttribute extends SemanticUIAttribute {

	@bindableEnum( ...constants.VALID_COLORS ) color;
	@bindableEnum( ...constants.VALID_SIZES ) size;

}


@customElement( `${constants.elementPrefix}labels` )
export class SemanticUILabelsElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}labels` )
export class SemanticUILabelsAttribute extends SemanticUIAttribute {

	@bindableEnum( ...constants.VALID_COLORS ) color;
	@bindableEnum( ...constants.VALID_SIZES ) size;

}
