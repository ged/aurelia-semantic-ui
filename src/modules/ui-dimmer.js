/* -*- javascript -*- */
"use strict";

/**
 * Dimmer - http://semantic-ui.com/modules/dimmer.html
 */

import * as constants from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableToggle} from '../decorators';
import {bindable} from 'aurelia-framework';


@uiElement( 'dimmer' )
export class SemanticUIDimmerElement extends SemanticUIElement {

	@bindableToggle active = false;
	@bindableToggle disabled = false;
	@bindableToggle inverted = false;

	@bindable options = {};


	attached() {
		$( this.semanticElement ).dimmer( this.options );
	}


	show() {
		$( this.semanticElement ).dimmer( 'show' );
	}


	hide() {
		$( this.semanticElement ).dimmer( 'hide' );
	}

}

@uiAttribute( 'dimmer' )
export class SemanticUIDimmerAttribute extends SemanticUIAttribute {

	@bindableToggle active = false;
	@bindableToggle disabled = false;
	@bindableToggle inverted = false;

	@bindable options = {};


    attached() {
		this.logger.debug( "Setting up dimmer for ", this.element, " with options: ", this.options );
        $( this.semanticElement ).dimmer( this.options );
    }


	show() {
		$( this.semanticElement ).dimmer( 'show' );
	}


	hide() {
		$( this.semanticElement ).dimmer( 'hide' );
	}

}

