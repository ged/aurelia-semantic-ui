/* -*- javascript -*- */
"use strict";

import {constants} from './constants';
import {bindable, customAttribute, customElement} from 'aurelia-framework';

export function uiElement( component ) {
	let customElementFn = customElement( `${constants.elementPrefix}${component}` );
	let metadata = { component };

	return function( target, name, descriptor ) {
		Reflect.defineProperty( target, constants.metadataProperty, {value: metadata} );
		return customElementFn( target, name, descriptor );
	};
}


export function uiAttribute( component, defaultBindingMode=null ) {
	let customAttributeFn =
		customAttribute( `${constants.attributePrefix}${component}`, defaultBindingMode );
	let metadata = { component };

	return function( target, name, descriptor ) {
		Reflect.defineProperty( target, constants.metadataProperty, {value: metadata} );
		return customAttributeFn( target, name, descriptor );
	};
}


export function bindableEnum( ...validValues ) {
	// console.debug( "Bindable enum decorator called with: ", validValues );
	return function( target, name, descriptor ) {
		let changedMethodName = `${name}Changed`;
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
		if ( originalBind ) {
			Reflect.apply( originalBind, this, args );
		}
		if ( this[name] !== null && this[name] !== false ) {
			this.addCssClasses( name );
		}
	};

	return bindable( target, name, descriptor );
}


