/* -*- javascript -*- */
"use strict";

/**
* Flag - http://semantic-ui.com/elements/flag.html
*/

import {constants} from '../constants';
import {uiElement, uiAttribute} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {bindable} from 'aurelia-framework';

@uiElement( 'flag' )
export class SemanticUIFlagElement extends SemanticUIElement {
	@bindable country;
}


@uiAttribute( 'flag' )
export class SemanticUIFlagAttribute extends SemanticUIAttribute {

	@bindable country;


	bind( ...args ) {
		// No super, as we don't need the 'ui' class
		this.addCssClasses( 'flag' );
		if ( this.country ) {
			this.addCssClasses( this.country.toLowerCase() );
		}
	}

	countryChanged( newValue, oldValue ) {
		if ( oldValue ) { this.removeCssClasses(oldValue.toLowerCase()); }
		if ( newValue ) { this.addCssClasses(newValue.toLowerCase()); }
	}

}


