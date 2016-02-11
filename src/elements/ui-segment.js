/* -*- javascript -*- */
"use strict";

/**
 * Segment - http://semantic-ui.com/elements/segment.html
 */

import {inject, customElement, computedFrom, bindable, LogManager} from 'aurelia-framework';
import $ from 'jquery';

@customElement( 'ui-segment' )
@inject( Element )
export class UISegmentElement {

	@bindable type = null;
	@bindable variation = null;

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

		this.logger.debug( "Getting the css classes: ", this._classes );
		for ( let cls of this._classes.keys() ) {
			this.logger.debug( `Adding class: ${cls}` );
			results.push( cls );
		}
		this.logger.debug( `Classes set to '${results.join(" ")}'` );
		return results.join( ' ' );
	}


	attached() {
		this.logger.debug( "Attached to", this.element );
		if ( this.loading ) { this._classes.add('loading') }
		if ( this.disabled ) { this._classes.add('disabled') }
	}


	loadingChanged( newValue ) {
		this.logger.debug( `Loading set to ${newValue}.` );
		if ( newValue ) {
			this._classes.add( 'loading' );
		} else {
			this._classes.delete( 'type' );
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

