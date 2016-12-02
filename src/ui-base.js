/* -*- javascript -*- */
"use strict";

import {constants} from './constants';
import {inject, LogManager} from 'aurelia-framework';


function dashify( string ) {
	return string.toString().
		replace( /([a-z])([A-Z])/, (_,a,b) => `${a}-${b.toLowerCase()}` );
}

function splitIntoClasses( name ) {
	if ( !name ) return [];
	let dashified = dashify( name );
	return dashified.split( /[ ]+/ );
}


/**
 * Expand all of the values in {cssClasses} so that `'equalWidth'`, `'equal width'`, and 
 * `'equal-width'` all result in `['equal', 'width']`. Also removes classes prefixed with
 * 'au-' to avoid messing with Aurelia's classes.
 * @return {Array[String]} the flattened list of CSS classes.
 */
function expandCssClasses( ...cssClasses ) {
	let expanded = cssClasses.
		map( (cl) => {
			if ( Array.isArray(cl) ) {
				return expandCssClasses( ...cl );
			} else {
				return splitIntoClasses( cl );
			}
		});
	let flattened = [].concat.apply( [], expanded );

	return flattened;
}


/**
 * Expand the classes in {cssClasses} with expandCssClasses() and then filter out 
 * non-classes and Aurelia-internal classes.
 */
function normalizeCssClasses( ...cssClasses ) {
	let classList = expandCssClasses( ...cssClasses );
	return classList.
		filter( (cl) => {
			return cl !== '' &&
				cl !== 'true' &&
				cl !== 'false' &&
				!cl.startsWith( 'au-' )
		});
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
		this.addCssClasses( this.element.classList );
	}


	/**
	 * Add one or more {cssClasses} to the Semantic UI element.
	 */
	addCssClasses( ...cssClasses ) {
		let expandedClasses = normalizeCssClasses( cssClasses );
		if ( expandedClasses.length ) {
			this.semanticElement.classList.add( ...expandedClasses );
		}
	}


	/**
	 * Remove one or more {cssClasses} from the Semantic UI element.
	 */
	removeCssClasses( ...cssClasses ) {
		let expandedClasses = normalizeCssClasses( cssClasses ).
			filter( (cl) => cl !== '' && !cl.startsWith('au-') );
		if ( expandedClasses.length ) {
			this.semanticElement.classList.remove( ...expandedClasses );
		}
	}


	/**
	 * Get the element which should receive SemanticUI classes relative to the 
	 * {parentEl}ement.
	 * @return {Element} the element to add CSS classes to.
	 */
	getSemanticElement( parentEl ) {
		this.logger.debug( "Fetching inner semantic element for parent element: ", parentEl );

		// Containerless elements get passed a comment anchor element
		if ( parentEl.nodeType === 8 ) {
			this.logger.debug( "  Containerless element; using previous sibling." );
			return parentEl.previousElementSibling;
		}

		else if ( parentEl.nodeType === 1 ) {
			this.logger.debug( "  HTML element; using first element child: ", parentEl.firstElementChild );
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
	 * will be expanded by normalizeCssClasses().
	 */
	addCssClasses( ...cssClasses ) {
		let expandedClasses = normalizeCssClasses( cssClasses );
		this.semanticElement.classList.add( ...expandedClasses );
	}


	/**
	 * Remove one or more {cssClasses} from the Semantic UI element.
	 */
	removeCssClasses( ...cssClasses ) {
		let expandedClasses = normalizeCssClasses( cssClasses );
		this.semanticElement.classList.remove( ...expandedClasses );
	}


	/**
	 * Get the element which should receive SemanticUI classes relative to the specified 
	 * {el}ement. Defaults to the element with the attribute.
	 * @return {Element} the element to add CSS classes to.
	 */
	getSemanticElement( el ) {
		// If this is an attribute of a Semantic UI element, use its semantic element.
		if (
			el.au &&
			el.au.controller &&
			el.au.controller.viewModel &&
			el.au.controller.viewModel instanceof SemanticUIElement
		) {
			let container = el.au.controller.viewModel;
			if ( container instanceof SemanticUIElement ) {
				this.logger.debug( "Decorating another Semantic element: ", container );
				let semEl = container.getSemanticElement( el );
				this.logger.debug( "Other element's semantic element is: ", semEl );
				return semEl;
			}
			return el;
		} else {
			this.logger.debug( "Decorating a plain HTML element: ", el );
			return el;
		}
	}

}


