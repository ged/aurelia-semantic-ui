/* -*- javascript -*- */
"use strict";

/**
 * Content Reveal - http://semantic-ui.com/elements/reveal.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableToggle} from '../ui-attribute';
import {customAttribute, bindable} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}reveal` )
export class UIRevealAttribute extends UIAttribute {

	@bindableToggle active;

}


@customAttribute( `${constants.attributePrefix}reveal-visible` )
export class UIRevealVisibleAttribute extends UIAttribute {

	bind() {
		// No super
		this.element.classList.add( 'visible', 'content' );
	}

}

@customAttribute( `${constants.attributePrefix}reveal-hidden` )
export class UIRevealHiddenAttribute extends UIAttribute {

	bind() {
		// No super
		this.element.classList.add( 'hidden', 'content' );
	}

}


