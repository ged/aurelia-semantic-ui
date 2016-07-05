/* -*- javascript -*- */
"use strict";

/**
 * Progress - http://semantic-ui.com/modules/progress.html
 */

import {constants} from '../constants';
import {bindable, customAttribute, customElement} from 'aurelia-framework';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';

@customElement( `${constants.elementPrefix}progress` )
export class SemanticUIProgressElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}progress` )
export class SemanticUIProgressAttribute extends SemanticUIAttribute {

	@bindable total;
	@bindable progress;
	@bindable percent;
	@bindable active;

	@bindable label;
	@bindable barLabel;
	@bindable options = {};

	attached() {
		$( this.element ).progress( this.options );
	}


	totalChanged( newValue, oldValue ) {
		this.logger.debug( `Setting total to ${newValue}` );
		$( this.element ).progress( 'set total', newValue );
	}


	progressChanged( newValue, oldValue ) {
		this.logger.debug( `Setting progress to ${newValue}` );
		$( this.element ).progress( 'set progress', newValue );
	}


	percentChanged( newValue, oldValue ) {
		this.logger.debug( `Setting percent to ${newValue}` );
		$( this.element ).progress( 'set percent', newValue );
	}


	activeChanged( newValue, oldValue ) {
		this.logger.debug( `Setting active to ${newValue}` );
		if ( newValue ) {
			$( this.element ).progress( 'set active' );
		} else {
			$( this.element ).progress( 'remove active' );
		}
	}


	labelChanged( newValue, oldValue ) {
		this.logger.debug( `Setting label to ${newValue}` );
		$( this.element ).progress( 'set label', newValue );
	}


	barLabelChanged( newValue, oldValue ) {
		this.logger.debug( `Setting bar label to ${newValue}` );
		$( this.element ).progress( 'set bar label', newValue );
	}

}

