/* -*- javascript -*- */
"use strict";

/**
 * Search - http://semantic-ui.com/modules/search.html
 */

import {UIAttribute, bindableToggle, bindableEnum} from '../ui-attribute';
import {inject, customAttribute, children, bindable} from 'aurelia-framework';

@customAttribute( 'ui-search' )
export class UISearchAttribute extends UIAttribute {

	attached() {
		this.logger.debug( "Activating search on ", this.element );
		$( this.element ).search();
	}

}

