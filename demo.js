/* -*- javascript -*- */
"use strict";

import 'babel/polyfill';

import JQuery from 'jquery';
import 'semantic';
import 'semantic/semantic.css!';


export function configure(aurelia) {
	aurelia.use.
		standardConfiguration().
		developmentLogging().
		plugin( 'aurelia-animator-css' ).
		plugin( 'aurelia-semantic-ui' );

	aurelia.start().
		then( a => a.setRoot('demo/app', document.body) );
}


