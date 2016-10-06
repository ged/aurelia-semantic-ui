/* -*- javascript -*- */
"use strict";


import {inject, bindable, child, LogManager} from 'aurelia-framework';

const UI_ATTRIBUTE_NAME = /SemanticUI(\w+)/;


/**
 * SemanticUIElement -- base class for Semantic UI custom elements
 */
@inject( Element )
export class SemanticUIElement {

	element;
	innerElement;


	constructor( el ) {
		this.logger = LogManager.getLogger( this.constructor.name );
		this.element = el;
	}


	created( owningView, myView ) {
		this.logger.debug( "myView: ", myView );
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


	constructor( element ) {
		this.logger = LogManager.getLogger( this.constructor.name );
		this.element = element;
	}


	bind() {
		let nameMatch = UI_ATTRIBUTE_NAME.exec( this.constructor.name );

		if ( nameMatch ) {
			let attrName = nameMatch[ 1 ].toLowerCase().replace( /attribute$/, '' );
			this.addCssClasses( 'ui', attrName );
		} else {
			this.logger.warn( "Attribute class doesn't match the naming convention; ",
				"assuming it's going to manage the classList itself." );
		}
	}


	addCssClasses( ...cssClasses ) {
		this.element.classList.add( ...cssClasses );
	}


	removeCssClasses( ...cssClasses ) {
		this.element.classList.remove( ...cssClasses );
	}

}


export function bindableEnum( ...validValues ) {
	// console.debug( "Bindable enum decorator called with: ", validValues );
	return function( target, name, descriptor ) {
		let changedMethodName = `${name}Changed`;
		// console.debug( "Setting up a ", changedMethodName, " method on ", target );
		target[ changedMethodName ] = function( newValue, oldValue ) {
			this.logger.debug( `Changing ${name} to ${newValue} from ${oldValue}` );

			this.removeCssClasses( oldValue );
			this.addCssClasses( newValue );
		};

		let originalBind = target.bind;
		target.bind = function( ...args ) {
			if ( originalBind ) {
				Reflect.apply( originalBind, this, args );
			}
			if ( this[name] ) {
				this.addCssClasses( this[name] );
			}
		};

		return bindable( target, name, descriptor );
	};
}


export function bindableToggle( target, name, descriptor ) {
	// console.debug( "Bindable toggle decorator called with args: ", target, name, descriptor );
	let changedMethodName = `${name}Changed`;
	// console.debug( "Setting up a ", changedMethodName, " method on ", target );
	target[ changedMethodName ] = function( newValue ) {
		this.logger.debug( `Toggling ${name} to ${newValue ? 'on' : 'off'}.` );
		if ( newValue ) { this.addCssClasses(name); }
		else { this.removeCssClasses(name); }
	};

	let originalBind = target.bind;
	target.bind = function( ...args ) {
		this.logger.debug( `Bound for ${name} toggle-able attribute: '${this[name]}'.` );
		if ( originalBind ) {
			Reflect.apply( originalBind, this, args );
		}
		if ( this[name] !== null && this[name] !== false ) {
			this.addCssClasses( name );
		}
	};

	return bindable( target, name, descriptor );
}


