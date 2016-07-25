/* -*- javascript -*- */
"use strict";

/**
 * Progress - http://semantic-ui.com/modules/progress.html
 */

import {constants} from '../constants';
import {bindable, customAttribute} from 'aurelia-framework';
import {UIAttribute} from '../ui-attribute';

@customAttribute( `${constants.attributePrefix}progress` )
export class UIProgressAttribute extends UIAttribute {

	@bindable total;
	@bindable progress;
	@bindable percent;
	@bindable active;

	@bindable label;
	@bindable barLabel;


	attached() {
		$( this.element ).progress();
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
		$( this.element ).progress( 'set active', newValue );
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

