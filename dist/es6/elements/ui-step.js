/* -*- javascript -*- */
"use strict";

/**
 * Step - http://semantic-ui.com/elements/step.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableToggle, bindableEnum} from '../ui-base';
import {customAttribute, customElement} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}step` )
export class SemanticUIStepElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}step` )
export class SemanticUIStepAttribute extends SemanticUIAttribute {

	@bindableToggle active = false;
	@bindableToggle disabled = false;
	@bindableToggle completed = false;
	@bindableEnum( ...constants.VALID_COLORS ) color;


	bind( ...args ) {
		// No super
		this.element.classList.add( 'step' );
	}

}


@customElement( `${constants.elementPrefix}steps` )
export class SemanticUIStepsElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}steps` )
export class SemanticUIStepsAttribute extends SemanticUIAttribute {
}


