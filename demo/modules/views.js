/* -*- javascript -*- */
"use strict";

import {inject, LogManager} from 'aurelia-framework';


@inject( Element )
export class Views {
	heading = 'Views';


	constructor( element ) {
		this.element = element;
		this.logger = LogManager.getLogger( 'views' );
	}

	attached() {
		$( this.element ).shape();
	}

	toggleSource( event ) {
		this.logger.debug( "Toggling source view for ", this.element );
		$( this.element ).shape( 'flip over' );
	}

}

