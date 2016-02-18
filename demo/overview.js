/* -*- javascript -*- */
"use strict";

import Prism from 'prism';
import {inject} from 'aurelia-framework';

@inject( Element )
export class Overview {
	heading = 'Overview';


	constructor( element ) {
		this.element = element;
	}

	attached() {
		let els = this.element.querySelectorAll( 'code[class^="language-"]' );
		for ( let el of els ) {
			Prism.highlightElement( el );
		}
	}
}

