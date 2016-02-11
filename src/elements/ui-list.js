/* -*- javascript -*- */
"use strict";

/**
 * List - http://semantic-ui.com/elements/list.html
 */

import {inject, customElement, useView, containerless, bindable} from 'aurelia-framework';

@customElement( 'ui-list' )
export class UIListElement {

	@bindable type = null;
	@bindable variation = null;

}


/**
 * ui-list-item
 */
@customElement( 'ui-list-item' )
@useView('./ui-list/item.html')
@containerless()
export class UIListItemElement {}

