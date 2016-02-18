/* -*- javascript -*- */
"use strict";

import Prism from 'prism';

import {
	TargetInstruction,
	LogManager,
	child,
	customElement,
	processContent,
	inject,
	bindable
} from 'aurelia-framework';

@processContent( (compiler, resources, element, instruction) => {
	let exampleSource = element.innerHTML;
	if ( exampleSource !== '' ) {
		instruction.exampleSource = exampleSource;
	}

	return true;
})
@inject(Element, TargetInstruction)
@customElement( 'element-example' )
export class ElementExampleElement {

	@bindable language = 'markup';
	@bindable exampleSource;
	@bindable caption;


	constructor( element, targetInstruction ) {
		this.element = element;
		this.logger = LogManager.getLogger( 'element-example' );
		this.exampleSource = this.extractRawContent( targetInstruction );
	}


	extractRawContent( targetInstruction ) {
		if ( targetInstruction.elementInstruction.exampleSource ) {
			let content = targetInstruction.elementInstruction.exampleSource;

			let match = /^\n(\s+)/.exec( content );
			if ( match ) {
				let indent = match[1];
				let re = new RegExp( `\n${indent}`, 'g' )
				// this.logger.debug( `Indent is: ${indent}` );
				content = content.replace( re, "\n" );
			}

			content = content.replace( /\t/g, '    ' ).trim();
			// this.logger.debug( "Set raw content to: ", content );
			return content;
		} else {
			return "";
		}
	}

	attached() {
		let sourceEl = this.element.querySelector( '.example-source' );
		if ( sourceEl ) {
			this.logger.debug( "Highlighting ", sourceEl, ` as ${this.language}.` );
			Prism.highlightElement( sourceEl );
		} else {
			this.logger.error( "Couldn't find the source element for", this.element );
		}
	}

}

