/* -*- javascript -*- */
"use strict";

/**
 * Menu - http://semantic-ui.com/collections/menu.html
 */

import {constants} from '../constants';
import {UIAttribute, bindableToggle, bindableEnum} from '../ui-attribute';
import {inject, customAttribute, children, bindable} from 'aurelia-framework';

@customAttribute( `${constants.attributePrefix}menu` )
export class UIMenuAttribute extends UIAttribute {

	@bindable router;
	@children( '[ui-menu-item]' ) items;


	isSubmenu() {
		let parent = this.element.parentElement;
		if ( !parent ) { return false; }

		let classes = parent.classList
		if ( !classes ) { return false; }

		return (classes.contains('item') || classes.contains('menu'))
	}


	bind() {
		// Don't super for sub-menus because they shouldn't get the 'ui'
		if ( this.isSubmenu() ) {
			this.element.classList.add( 'menu' );
		} else {
			super.bind();
		}
	}

}


/**
 * ui-menu-item
 */
@customAttribute( `${constants.attributePrefix}menu-item` )
export class UIMenuItemAttribute extends UIAttribute {

	@bindableToggle active = false;

	bind() {
		// no super
		this.element.classList.add( 'item' );
	}

}

