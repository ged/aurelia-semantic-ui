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


const DEFAULT_ENUM_OPTIONS = {
	includeName: true,
	cssClass: null
};


export function bindableEnum( validValues, options={} ) {
	options = Object.assign( {}, DEFAULT_ENUM_OPTIONS, options );

	// console.debug( "Bindable enum decorator called with: ", validValues );
	return function( target, name, descriptor ) {
		let changedMethodName = `${name}Changed`;
		target[ changedMethodName ] = function( newValue, oldValue ) {
			this.logger.debug( `Changing ${name} to ${newValue} from ${oldValue}` );

			this.removeCssClasses( oldValue );
			this.addCssClasses( newValue );

			if ( options.includeName ) {
				let cssClass = options.cssClass || name;

				if ( newValue || newValue === '' ) {
					this.addCssClasses( cssClass );
				} else {
					this.removeCssClases( cssClass );
				}
			}
		};

		let originalBind = target.bind;
		target.bind = function( ...args ) {
			if ( originalBind ) {
				Reflect.apply( originalBind, this, args );
			}
			if ( this[name] || this[name] === '' ) {
				this.addCssClasses( this[name] );
				if ( options.includeName ) {
					let cssClass = options.cssClass || name;
					this.addCssClasses( cssClass );
				}
			}
		};

		return bindable( target, name, descriptor );
	};
}


export function bindableToggle( target, name, descriptor ) {
	let changedMethodName = `${name}Changed`;

	target[ changedMethodName ] = function( newValue ) {
		if ( newValue ) { this.addCssClasses(name); }
		else { this.removeCssClasses(name); }
	};

	let originalBind = target.bind;
	target.bind = function( ...args ) {
		if ( originalBind ) {
			Reflect.apply( originalBind, this, args );
		}
		// Treat an empty-string value as true for boolean attributes
		// (e.g., <ui-form inverted>)
		if ( this[name] !== null && this[name] !== false ) {
			this.addCssClasses( name );
		}
	};

	return bindable( target, name, descriptor );
}


