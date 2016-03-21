/* -*- javascript -*- */
"use strict";

/**
 * Step - http://semantic-ui.com/elements/step.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableToggle, bindableEnum} from '../ui-attribute';
import {customAttribute, computedFrom, bindable, inject, LogManager} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}step` )
export class UIStepAttribute extends UIAttribute {

	@bindableToggle active = false;
	@bindableToggle disabled = false;
	@bindableToggle completed = false;
	@bindableEnum( ...constants.VALID_COLORS ) color;


	bind( ...args ) {
		// No super
		this.element.classList.add( 'step' );
	}

}


@customAttribute( `${constants.attributePrefix}steps` )
export class UIStepsAttribute extends UIAttribute {
}


