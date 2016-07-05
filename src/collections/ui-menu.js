/* -*- javascript -*- */
"use strict";

/**
 * Menu - http://semantic-ui.com/collections/menu.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableToggle, bindableEnum} from '../ui-base';
import {inject, customAttribute, customElement, children, bindable} from 'aurelia-framework';

@customElement( `${constants.elementPrefix}menu` )
export class SemanticUIMenuElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}menu` )
export class SemanticUIMenuAttribute extends SemanticUIAttribute {

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
@customElement( `${constants.elementPrefix}menu-item` )
export class SemanticUIMenuItemElement extends SemanticUIElement {}

@customAttribute( `${constants.attributePrefix}menu-item` )
export class SemanticUIMenuItemAttribute extends SemanticUIAttribute {

	@bindableToggle active = false;

	bind() {
		// no super
		this.element.classList.add( 'item' );
	}

}

