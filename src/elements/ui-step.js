/* -*- javascript -*- */
"use strict";

/**
 * Step - http://semantic-ui.com/elements/step.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';
import {customAttribute, customElement} from 'aurelia-framework';

@uiElement( 'step' )
export class SemanticUIStepElement extends SemanticUIElement {}

@uiAttribute( 'step' )
export class SemanticUIStepAttribute extends SemanticUIAttribute {

	@bindableToggle active = false;
	@bindableToggle disabled = false;
	@bindableToggle completed = false;
	@bindableEnum( constants.VALID_COLORS, {includeName: false} ) color;


	bind( ...args ) {
		// No super
		this.element.classList.add( 'step' );
	}

}


@uiElement( 'steps' )
export class SemanticUIStepsElement extends SemanticUIElement {}

@uiAttribute( 'steps' )
export class SemanticUIStepsAttribute extends SemanticUIAttribute {
}


