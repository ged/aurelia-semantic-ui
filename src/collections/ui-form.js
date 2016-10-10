/* -*- javascript -*- */
"use strict";

/**
 * Form - http://semantic-ui.com/collections/form.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';
import {children} from 'aurelia-framework';

@uiElement( 'form' )
export class SemanticUIFormElement extends SemanticUIElement {

	@bindableToggle loading = false;
	@bindableToggle error;
	@bindableToggle success;
	@bindableToggle warning;

	@children( '.field' ) fields;

}

@uiAttribute( 'form' )
export class SemanticUIFormAttribute extends SemanticUIAttribute {

	@bindableToggle loading = false;
	@bindableToggle error;
	@bindableToggle success;
	@bindableToggle warning;

	@children( '.field' ) fields;

}


@uiElement( 'checkbox' )
export class SemanticUICheckboxElement extends SemanticUIElement {

	attached() {
		$( this.element ).checkbox();
	}

}

@uiAttribute( 'checkbox' )
export class SemanticUICheckboxAttribute extends SemanticUIAttribute {

	attached() {
		$( this.element ).checkbox();
	}

}


