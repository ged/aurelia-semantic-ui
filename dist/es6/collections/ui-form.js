/* -*- javascript -*- */
"use strict";

/**
 * Form - http://semantic-ui.com/collections/form.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableToggle, bindableEnum} from '../ui-base';
import {customAttribute, customElement, children} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}form` )
export class SemanticUIFormElement extends SemanticUIElement {

	@bindableToggle loading = false;
	@bindableToggle error;
	@bindableToggle success;
	@bindableToggle warning;

	@children( '.field' ) fields;

}

@customAttribute( `${constants.attributePrefix}form` )
export class SemanticUIFormAttribute extends SemanticUIAttribute {

	@bindableToggle loading = false;
	@bindableToggle error;
	@bindableToggle success;
	@bindableToggle warning;

	@children( '.field' ) fields;

}


@customElement( `${constants.elementPrefix}checkbox` )
export class SemanticUICheckboxElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}checkbox` )
export class SemanticUICheckboxAttribute extends SemanticUIAttribute {

	attached() {
		this.logger.debug( "Activating a ui-checkbox" );
		$( this.element ).checkbox();
	}

}


