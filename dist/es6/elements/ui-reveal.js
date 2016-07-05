/* -*- javascript -*- */
"use strict";

/**
 * Content Reveal - http://semantic-ui.com/elements/reveal.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableToggle} from '../ui-base';
import {customAttribute, customElement, bindable} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}reveal` )
export class SemanticUIRevealElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}reveal` )
export class SemanticUIRevealAttribute extends SemanticUIAttribute {

	@bindableToggle active;

}


@customAttribute( `${constants.attributePrefix}reveal-visible` )
export class SemanticUIRevealVisibleAttribute extends SemanticUIAttribute {

	bind() {
		// No super
		this.element.classList.add( 'visible', 'content' );
	}

}

@customAttribute( `${constants.attributePrefix}reveal-hidden` )
export class SemanticUIRevealHiddenAttribute extends SemanticUIAttribute {

	bind() {
		// No super
		this.element.classList.add( 'hidden', 'content' );
	}

}


