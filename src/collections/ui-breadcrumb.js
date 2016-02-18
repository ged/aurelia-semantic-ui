/* -*- javascript -*- */
"use strict";

/**
 * Breadcrumb - http://semantic-ui.com/collections/breadcrumb.html
 */

import {inject, customElement, useView, containerless, bindable} from 'aurelia-framework';

@inject(Element)
@customElement( 'ui-breadcrumb' )
export class UIBreadcrumbElement {

	@bindable divider = null;
	@bindable size = null;

	constructor( element ) {
		this.element = element;
	}

	attached() {
		// TODO: Figure out how to auto-inject the divider
	}

}


/**
 * ui-breadcrumb-section
 */
@customElement( 'ui-breadcrumb-section' )
@useView('./ui-breadcrumb/section.html')
@containerless()
export class UIBreadcrumbSectionElement {}

