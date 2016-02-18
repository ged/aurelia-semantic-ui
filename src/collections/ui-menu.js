/* -*- javascript -*- */
"use strict";

/**
 * Menu - http://semantic-ui.com/collections/menu.html
 */

import {inject, customElement, useView, containerless, bindable} from 'aurelia-framework';

@customElement( 'ui-menu' )
export class UIMenuElement {

	@bindable type;
	@bindable variations;
	@bindable router;

	attached() {}

}


/**
 * ui-menu-item
 */
@customElement( 'ui-menu-item' )
@useView('./ui-menu/item.html')
@containerless()
export class UIMenuItemElement {

	@bindable type;
	@bindable href;

}

