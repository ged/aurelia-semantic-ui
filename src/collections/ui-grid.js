/* -*- javascript -*- */
"use strict";

/**
 * Grid - http://semantic-ui.com/collections/grid.html
 */

import * as constants from '../constants';
import {SemanticUIElement, SemanticUIAttribute} from '../ui-base';
import {uiElement, uiAttribute, bindableEnum, bindableToggle} from '../decorators';
import {bindable, children} from 'aurelia-framework';


function normalizeColumnCountClass( string ) {
	let parsedCount = Number.parseInt( string );
	return constants.VALID_COLUMNS[ parsedCount ] || string;
}

@uiElement( 'grid' )
export class SemanticUIGridElement extends SemanticUIElement {

	@bindableToggle doubling = false;
	@bindableToggle stackable = false;
	@bindableToggle equalWidth = false;

	@bindableEnum( ['vertically'] ) divided;
	@bindableEnum( ['internally'] ) celled;
	@bindableEnum( constants.VALID_DEVICES ) reversed;
	@bindableEnum( constants.VALID_ALIGNMENTS ) aligned;

	@bindable columns = null;


	bind( ...args ) {
		if ( super.bind ) { super.bind(...args); }
		if ( this.columns ) { this.columnsChanged(this.columns, null); }
	}


	columnsChanged( newValue, oldValue ) {
		this.logger.debug( `Columns changed from ${oldValue} to ${newValue}.` );
		let newCount = normalizeColumnCountClass( newValue );
		let oldCount = normalizeColumnCountClass( oldValue );

		this.removeCssClasses( oldCount, 'column' );
		this.addCssClasses( newCount );
		if ( newValue ) { this.addCssClasses('column') }
	}

}

@uiAttribute( 'grid' )
export class SemanticUIGridAttribute extends SemanticUIAttribute {

	@bindableToggle doubling = false;
	@bindableToggle stackable = false;
	@bindableToggle equalWidth = false;

	@bindableEnum( ['vertically'] ) divided;
	@bindableEnum( ['internally'] ) celled;
	@bindableEnum( constants.VALID_DEVICES ) reversed;
	@bindableEnum( constants.VALID_ALIGNMENTS ) aligned;

	@bindable columns = null;


	bind( ...args ) {
		if ( super.bind ) { super.bind(...args); }
		if ( this.columns ) { this.columnsChanged(this.columns, null); }
	}


	columnsChanged( newValue, oldValue ) {
		this.logger.debug( `Columns changed from ${oldValue} to ${newValue}.` );
		let newCount = normalizeColumnCountClass( newValue );
		let oldCount = normalizeColumnCountClass( oldValue );

		this.removeCssClasses( oldCount, 'column' );
		this.addCssClasses( newCount );
		if ( newValue ) { this.addCssClasses('column') }
	}

}


