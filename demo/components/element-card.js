/* -*- javascript -*- */
"use strict";

import {LogManager, customElement, computedFrom, inject, bindable} from 'aurelia-framework';

@customElement( 'element-card' )
@inject( Element )
export class ElementCardElement {

	@bindable parentSection;

	constructor( element ) {
		this.element = element;
		this.logger = LogManager.getLogger( 'element-card' );
		this.status = null;
	}


	bind( context ) {
		this.parentSection = context;
		this.status = context.status;
	}

	get defaultUrl() {
		return `http://semantic-ui.com/${this.parentSection.category}s/${this.parentSection.name}.html`;
	}

	get supportedTypes() {
		if ( !this.parentSection.types ) { return [] }
		return this.parentSection.types.split( /\s*,\s*/ );
	}

	get supportedVariations() {
		if ( !this.parentSection.variations ) { return [] }
		return this.parentSection.variations.split( /\s*,\s*/ );
	}

	@computedFrom( 'status' )
	get statusIcon() {
		switch( this.status ) {
			case 'incomplete':
				return 'warning sign';
				break;
			default:
				return 'help';
		}
	}

}

