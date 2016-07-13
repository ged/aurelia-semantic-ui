/* -*- javascript -*- */
"use strict";

/**
 * Search - http://semantic-ui.com/modules/search.html
 */

import {constants} from '../constants';
import {UIAttribute} from '../ui-attribute';
import {customAttribute, bindable} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}search` )
export class UISearchAttribute extends UIAttribute {

	@bindable options = {};

	attached() {
		this.logger.debug( "Activating search on ", this.element );
		$( this.element ).search( this.options );
	}

}

