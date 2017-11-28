/* -*- javascript -*- */
"use strict";

/**
 * Sidebar - http://semantic-ui.com/modules/sidebar.html
 */

import * as constants from '../constants';
import {uiElement, uiAttribute} from '../decorators';
import {bindable} from 'aurelia-framework';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';


@uiElement( 'sidebar' )
export class SemanticUISidebarElement extends SemanticUIElement {}


@uiAttribute( 'sidebar' )
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


	show() {
		$( this.element ).sidebar( 'show' );
	}

	hide() {
		$( this.element ).sidebar( 'hide' );
	}

	toggle() {
		$( this.element ).sidebar( 'toggle' );
	}

}

