/* -*- javascript -*- */
"use strict";

/**
 * Search - http://semantic-ui.com/modules/search.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableToggle, bindableEnum} from '../ui-attribute';
import {inject, customAttribute, children, bindable} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}search` )
export class UISearchAttribute extends UIAttribute {

	attached() {
		this.logger.debug( "Activating search on ", this.element );
		$( this.element ).search();
	}

}

