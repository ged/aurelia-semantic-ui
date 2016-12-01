/* -*- javascript -*- */
"use strict";

/**
 * Search - http://semantic-ui.com/modules/search.html
 */

import * as constants from '../constants';
import {uiElement, uiAttribute} from '../decorators';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {bindable} from 'aurelia-framework';


@uiElement( 'search' )
export class SemanticUISearchElement extends SemanticUIElement {}


@uiAttribute( 'search' )
export class SemanticUISearchAttribute extends SemanticUIAttribute {

	@bindable options = {};

	attached() {
		this.logger.debug( "Activating search on ", this.element );
		$( this.element ).search( this.options );
	}

}

