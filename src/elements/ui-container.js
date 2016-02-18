/* -*- javascript -*- */
"use strict";

/**
 * Container - http://semantic-ui.com/elements/container.html
 */

import {customElement, bindable} from 'aurelia-framework';

@customElement( 'ui-container' )
export class UIContainerElement {

	@bindable type;
	@bindable variations;

}

