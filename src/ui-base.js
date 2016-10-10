/* -*- javascript -*- */
"use strict";

import {constants} from './constants';
import {inject, LogManager} from 'aurelia-framework';


/**
 * SemanticUIElement -- base class for Semantic UI custom elements
 */
@inject( Element )
export class SemanticUIElement {

	element;
	innerElement;


	get component() {
		let metadata = this.constructor[ constants.metadataProperty ];
		return metadata.component;
	}


	constructor( el ) {
		this.logger = LogManager.getLogger( this.constructor.name );
		this.element = el;
	}


	created( owningView, myView ) {
		this.innerElement = this.getSemanticElement( this.element );
	}


	addCssClasses( ...cssClasses ) {
		this.logger.debug( `Adding CSS classes: ${cssClasses} to inner element: ${this.innerElement}` );
		this.innerElement.classList.add( ...cssClasses );
	}


	removeCssClasses( ...cssClasses ) {
		this.logger.debug( `Removing CSS classes: ${cssClasses} from inner element: ${this.innerElement}` );
		this.innerElement.classList.remove( ...cssClasses );
	}


	getSemanticElement( parentEl ) {
		// Containerless elements get passed a comment anchor element
		if ( parentEl.nodeType === 8 ) {
			return parentEl.previousElementSibling;
		}

		else if ( parentEl.nodeType === 1 ) {
			return parentEl.firstElementChild;
		}

		else {
			console.error( "Can't find the semantic element of: ", parentEl );
			throw new Error( `Can't find the semantic element of: ${parentEl}` );
		}
	}

}


/**
 * SemanticUIAttribute -- base class for Semantic UI custom attributes
 */
@inject( Element )
export class SemanticUIAttribute {

	element;


	get component() {
		let metadata = this.constructor[ constants.metadataProperty ];
		return metadata.component;
	}


	constructor( element ) {
		this.logger = LogManager.getLogger( this.constructor.name );
		this.element = element;
	}


	bind() {
		let componentName = this.component;
		let cssClasses = componentName.split( /-/ ).filter( cssClass => cssClass !== 'ui' );
		this.addCssClasses( 'ui', ...cssClasses );
	}


	addCssClasses( ...cssClasses ) {
		this.element.classList.add( ...cssClasses );
	}


	removeCssClasses( ...cssClasses ) {
		this.element.classList.remove( ...cssClasses );
	}

}


