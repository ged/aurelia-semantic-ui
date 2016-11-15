/* -*- javascript -*- */
"use strict";

import {constants} from './constants';
import {inject, LogManager} from 'aurelia-framework';


function dashify( string ) {
	return string.toString().
		replace( /([a-z])([A-Z])/, (_,a,b) => `${a}-${b.toLowerCase()}` );
}

function splitIntoClasses( name ) {
	let dashified = dashify( name );
	return dashified.split( /[ \-]/ );
}


/**
 * Expand all of the values in {cssClasses} so that `'equalWidth'`, `'equal width'`, and 
 * `'equal-width'` all result in `['equal', 'width']`. 
 * @return {Array[String]} the flattened list of CSS classes.
 */
export function expandCssClasses( ...cssClasses ) {
	let normalized = cssClasses.map( (cl) => {
		if ( Array.isArray(cl) ) {
			return expandCssClasses( ...cl );
		} else {
			return splitIntoClasses( cl );
		}
	});
	let flattened = [].concat.apply( [], normalized );

	return flattened;
}


/**
 * SemanticUIElement -- base class for Semantic UI custom elements
 */
@inject( Element )
export class SemanticUIElement {

	element;
	semanticElement;


	/**
	 * Get the component name set by the uiElement() decorator on the class.
	 */
	get component() {
		let metadata = this.constructor[ constants.metadataProperty ];
		return metadata.component;
	}


	constructor( el ) {
		this.logger = LogManager.getLogger( this.constructor.name );
		this.element = el;
	}


	created( owningView, myView ) {
		this.semanticElement = this.getSemanticElement( this.element );
	}


	/**
	 * Add one or more {cssClasses} to the Semantic UI element.
	 */
	addCssClasses( ...cssClasses ) {
		let expandedClasses = expandCssClasses( cssClasses );
		this.semanticElement.classList.add( ...expandedClasses );
	}


	/**
	 * Remove one or more {cssClasses} from the Semantic UI element.
	 */
	removeCssClasses( ...cssClasses ) {
		let expandedClasses = expandCssClasses( cssClasses );
		this.semanticElement.classList.remove( ...expandedClasses );
	}


	/**
	 * Get the element which should receive SemanticUI classes relative to the 
	 * {parentEl}ement.
	 * @return {Element} the element to add CSS classes to.
	 */
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
	semanticElement;


	/**
	 * Get the component name set by the uiAttribute() decorator on the class.
	 */
	get component() {
		let metadata = this.constructor[ constants.metadataProperty ];
		return metadata.component;
	}


	constructor( element ) {
		this.logger = LogManager.getLogger( this.constructor.name );
		this.element = element;
	}


	created( owningView, myView ) {
		this.semanticElement = this.getSemanticElement( this.element );
	}


	bind( ...args ) {
		let componentName = this.component;
		let cssClasses = componentName.split( /-/ ).filter( cssClass => cssClass !== 'ui' );
		this.addCssClasses( 'ui', ...cssClasses );
	}


	/**
	 * Add one or more {cssClasses} to the Semantic UI element. The values in {cssClasses}
	 * will be expanded by expandCssClasses().
	 */
	addCssClasses( ...cssClasses ) {
		let expandedClasses = expandCssClasses( cssClasses );
		this.semanticElement.classList.add( ...expandedClasses );
	}


	/**
	 * Remove one or more {cssClasses} from the Semantic UI element.
	 */
	removeCssClasses( ...cssClasses ) {
		let expandedClasses = expandCssClasses( cssClasses );
		this.semanticElement.classList.remove( ...expandedClasses );
	}


	/**
	 * Get the element which should receive SemanticUI classes relative to the specified 
	 * {el}ement. Defaults to the element with the attribute.
	 * @return {Element} the element to add CSS classes to.
	 */
	getSemanticElement( el ) {
		return el;
	}

}


