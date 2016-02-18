/* -*- javascript -*- */
"use strict";


import {inject, bindable, customElement, LogManager} from 'aurelia-framework';


@inject( Element )
@customElement('demo-nav')
export class DemoNav {

	@bindable router;

	constructor( element ) {
		this.element = element;
		this.logger = LogManager.getLogger( 'demo-nav' );
	}


	attached() {
		this.logger.debug( "Attached!" );

		$( this.element ).
			children('.top.menu').
			each( el => this.logger.debug("Setting visibility for %o", el) ).
			visibility({ type: 'fixed' });

		// create sidebar and attach to menu open
		$('.ui.sidebar').
			sidebar('attach events', '.toc.item');
	}

}
