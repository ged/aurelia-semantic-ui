/* -*- javascript -*- */
"use strict";

/**
 * Sticky - http://semantic-ui.com/modules/sticky.html
 */

import * as constants from '../constants';
import {uiElement, uiAttribute, bindableToggle} from '../decorators';
import {bindable} from 'aurelia-framework';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';


@uiAttribute( 'sticky' )
export class SemanticUIStickyAttribute extends SemanticUIAttribute {

	@bindableToggle pushing;

	@bindable context;
	@bindable offset;
	@bindable bottomOffset;


	get options() {
		return {
			context: this.context,
			offset: this.offset,
			bottomOffset: this.bottomOffset,
			pushing: this.pushing
		};
	}


	attached() {
		this.logger.debug( `Making ${this.semanticElement} sticky.` );
		$( this.semanticElement ).sticky( this.options );
	}


	refresh() {
		$( this.semanticElement ).sticky( 'refresh' );
	}

}

