/* -*- javascript -*- */
"use strict";

/**
 * Breadcrumb - http://semantic-ui.com/collections/breadcrumb.html
 */

import {UIAttribute, bindableToggle, bindableEnum} from '../ui-attribute';
import {inject, customAttribute, children, bindable, LogManager} from 'aurelia-framework';

@customAttribute( 'ui-breadcrumb' )
export class UIBreadcrumbAttribute extends UIAttribute {

	@bindable divider;
	@bindableEnum('small', 'large', 'huge') size;
	@children( '[ui-breadcrumb-section]' ) sections;


	bind() {
		super.bind();

		if ( this.divider ) {
			let dividerNode = null;

			// Icon divider (<i>)
			if ( this.divider.match(/\bicon\b/) ) {
				this.logger.debug( `Icon divider (${this.divider})` );
				dividerNode = document.createElement( 'i' );
				dividerNode.classList.add( ...this.divider.split(/\s+/) );
				dividerNode.classList.add( 'divider' );
			}

			// Text divider (<span>)
			else {
				this.logger.debug( `Text divider (${this.divider})` );
				let content = document.createTextNode( this.divider );
				dividerNode = document.createElement( 'span' );
				dividerNode.classList.add( 'divider' );
				dividerNode.appendChild( content );
			}

			for ( let i in this.sections ) {
				if ( i > 0 ) {
					let section = this.sections[ i ];
					this.element.insertBefore( dividerNode.cloneNode(true), section );
				}
			}
		}
	}

}


/**
 * ui-breadcrumb-section
 */
@customAttribute( 'ui-breadcrumb-section' )
export class UIBreadcrumbSectionAttribute extends UIAttribute {

	@bindableToggle active = false;

	bind() {
		// No super
		this.element.classList.add( 'section' );
	}

}


/**
 * ui-breadcrumb-divider
 */
@customAttribute( 'ui-breadcrumb-divider' )
export class UIBreadcrumbDividerAttribute extends UIAttribute {

	bind() {
		// No super
		if ( this.element.classList ) {
			this.element.classList.add( 'divider' );
		}
	}

}

