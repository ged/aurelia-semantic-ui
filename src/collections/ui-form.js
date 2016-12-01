/* -*- javascript -*- */
"use strict";

/**
 * Form - http://semantic-ui.com/collections/form.html
 */

import * as constants from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';
import {children, useView, bindable} from 'aurelia-framework';

@uiElement( 'form' )
export class SemanticUIFormElement extends SemanticUIElement {

	@bindableToggle loading = false;
	@bindableToggle error = null;
	@bindableToggle success = null;
	@bindableToggle warning = null;
	@bindableToggle inverted = false;

	@bindableEnum(constants.VALID_SIZES) size;

	@children( '.field' ) fields;

}

@uiAttribute( 'form' )
export class SemanticUIFormAttribute extends SemanticUIAttribute {

	@bindableToggle loading = false;
	@bindableToggle error = null;
	@bindableToggle success = null;
	@bindableToggle warning = null;
	@bindableToggle inverted = false;

	@bindableEnum(constants.VALID_SIZES) size;

	@children( '.field' ) fields;

}

