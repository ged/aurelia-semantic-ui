/* -*- javascript -*- */
"use strict";

/**
 * Sidebar - http://semantic-ui.com/modules/sidebar.html
 */

import {constants} from '../constants';
import {customAttribute, customElement, bindable} from 'aurelia-framework';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';


@customElement( `${constants.elementPrefix}sidebar` )
export class SemanticUISidebarElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}sidebar` )
export class SemanticUISidebarAttribute extends SemanticUIAttribute {

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

