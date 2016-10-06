/* -*- javascript -*- */
"use strict";

import 'aurelia-polyfills';

export var customMatchers = {
	toHaveCssClasses: function( util, customEqualityTesters ) {
		return {
			compare: function( element, ...classes ) {
				if ( classes.length === 0 ) {
					throw new Error( "No CSS classes specified." );
				}
				if ( !element.nodeType || element.nodeType !== 1 ) {
					throw new Error( `Can't check for CSS classes of ${element}` );
				}

				let missing = classes.
					filter( cssClass => !util.contains(element.classList, cssClass) );
				let result = {
					pass: missing.length === 0
				};

				if ( result.pass ) {
					result.message =
						`Expected ${element} not to have CSS classes: ${classes.join(', ')}\n` +
						`but it had: ${element.classList}`;
				} else {
					result.message =
						`Expected ${element} to have CSS classes: ${classes.join(', ')}\n` +
						`but it was missing: ${missing.join(', ')}`;
				}

				return result;
			}
		};
	}
};