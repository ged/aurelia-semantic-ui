/* -*- javascript -*- */
"use strict";

/**
 * UIAttribute -- base class for Semantic UI attributes
 */

import {inject, bindable, LogManager} from 'aurelia-framework';

const UI_ATTRIBUTE_NAME = /UI(\w+)Attribute/;

@inject( Element )
export class UIAttribute {

	constructor( element ) {
		this.logger = LogManager.getLogger( this.constructor.name );
		this.element = element;
	}


	bind() {
		let nameMatch = UI_ATTRIBUTE_NAME.exec( this.constructor.name );

		if ( nameMatch ) {
			let attrName = nameMatch[ 1 ].toLowerCase();
			this.element.classList.add( 'ui', attrName );
		} else {
			this.logger.warn( "Attribute class doesn't match the naming convention; ",
				"assuming it's going to manage the classList itself." );
		}
	}

}


export function bindableEnum( ...validValues ) {
	// console.debug( "Bindable enum decorator called with: ", validValues );
	return function( target, name, descriptor ) {
		let changedMethodName = `${name}Changed`;
		// console.debug( "Setting up a ", changedMethodName, " method on ", target );
		target[ changedMethodName ] = function( newValue, oldValue ) {
			this.logger.debug( `Changing ${name} to ${newValue} from ${oldValue}` );
			this.element.classList.remove( oldValue );
			this.element.classList.add( newValue );
		};

		let originalBind = target.bind;
		target.bind = function( ...args ) {
			Reflect.apply( originalBind, this, args );
			if ( this[name] ) {
				this.element.classList.add( this[name] );
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
		if ( newValue ) { this.element.classList.add(name); }
		else { this.element.classList.remove(name); }
	};

	let originalBind = target.bind;
	target.bind = function( ...args ) {
		Reflect.apply( originalBind, this, args );
		if ( this[name] ) {
			this.element.classList.add( name );
		}
	};

	return bindable( target, name, descriptor );
}


