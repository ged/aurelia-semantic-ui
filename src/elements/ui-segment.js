/* -*- javascript -*- */
"use strict";

/**
 * Segment - http://semantic-ui.com/elements/segment.html
 */

import {customElement, computedFrom, bindable, inject, LogManager} from 'aurelia-framework';

@inject( Element )
@customElement( 'ui-segment' )
export class UISegmentElement {

	@bindable type = null;
	@bindable variations = null;

	@bindable loading = false;
	@bindable disabled = false;

	_classes = new Set();

	constructor( element ) {
		this.logger = LogManager.getLogger( 'ui-segment-element' );
		this.element = element;
	}

	@computedFrom('_classes')
	get classes() {
		let results = [];

		for ( let cls of this._classes.keys() ) {
			results.push( cls );
		}
		return results.join( ' ' );
	}


	attached() {
		if ( this.loading ) { this._classes.add('loading') }
		if ( this.disabled ) { this._classes.add('disabled') }
		return true;
	}


	loadingChanged( newValue ) {
		this.logger.debug( `Loading set to ${newValue}.` );
		if ( newValue ) {
			this._classes.add( 'loading' );
		} else {
			this._classes.delete( 'loading' );
		}
	}


	disabledChanged( newValue ) {
		this.logger.debug( `Loading set to ${newValue}.` );
		if ( newValue ) {
			this._classes.add( 'disabled' );
		} else {
			this._classes.delete( 'disabled' );
		}
	}

}

