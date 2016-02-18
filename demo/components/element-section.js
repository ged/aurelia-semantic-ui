/* -*- javascript -*- */
"use strict";

import {customElement, bindable} from 'aurelia-framework';

@customElement( 'element-section' )
export class ElementSectionElement {

	@bindable name = null;
	@bindable description = null;
	@bindable category = "element";
	@bindable status = "incomplete";
	@bindable types;
	@bindable variations;
	@bindable docsHref = null;

}

