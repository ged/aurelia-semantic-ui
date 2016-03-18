/* -*- javascript -*- */
"use strict";

/**
 * Sidebar - http://semantic-ui.com/modules/sidebar.html
 */

import {constants} from '../constants';
import {customAttribute, bindable} from 'aurelia-framework';
import {UIAttribute} from '../ui-attribute';


@customAttribute( 'ui-sidebar' )
export class UISidebarAttribute extends UIAttribute {

	@bindable context;
	@bindable events;


	attached() {
		this.logger.debug( "Sidebar attached: ", this.element );
		if ( this.context ) {
			let contextEl = $( this.element ).parent( this.context ).first();
			$( this.element ).sidebar({ context: contextEl });
		}

		if ( this.events ) {
			let contextEl = $( this.element ).parent( this.events ).first();
			$( this.element ).sidebar( 'attach events', contextEl );
		}
	}


	toggle() {
		$( this.element ).sidebar( 'toggle' );
	}

}

