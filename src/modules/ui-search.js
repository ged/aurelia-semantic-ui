/* -*- javascript -*- */
"use strict";

/**
 * Search - http://semantic-ui.com/modules/search.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {customAttribute, customElement, bindable} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}search` )
export class SemanticUISearchElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}search` )
export class SemanticUISearchAttribute extends SemanticUIAttribute {

	@bindable options = {};

	attached() {
		this.logger.debug( "Activating search on ", this.element );
		$( this.element ).search( this.options );
	}

}

