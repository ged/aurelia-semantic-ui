/* -*- javascript -*- */
"use strict";

/**
 * Content Reveal - http://semantic-ui.com/elements/reveal.html
 */

import * as constants from '../constants';
import {uiElement, uiAttribute, bindableToggle} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {bindable} from 'aurelia-framework';


@uiElement( 'reveal' )
export class SemanticUIRevealElement extends SemanticUIElement {}


@uiAttribute( 'reveal' )
export class SemanticUIRevealAttribute extends SemanticUIAttribute {

	@bindableToggle active;

}


@uiAttribute( 'reveal-visible' )
export class SemanticUIRevealVisibleAttribute extends SemanticUIAttribute {

	bind() {
		// No super
		this.element.classList.add( 'visible', 'content' );
	}

}


@uiAttribute( 'reveal-hidden' )
export class SemanticUIRevealHiddenAttribute extends SemanticUIAttribute {

	bind() {
		// No super
		this.element.classList.add( 'hidden', 'content' );
	}

}


