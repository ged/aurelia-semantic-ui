/* -*- javascript -*- */
"use strict";

/**
 * Breadcrumb - http://semantic-ui.com/collections/breadcrumb.html
 */

import {constants} from '../constants';
import {SemanticUIElement, SemanticUIAttribute, bindableToggle, bindableEnum} from '../ui-base';
import {inject, customAttribute, customElement, children, bindable, LogManager} from 'aurelia-framework';


function addDividerNodes( element, divider ) {
	let dividerNode = null;
	let sections = element.querySelectorAll( '[ui-breadcrumb-section]' );

	if ( sections.length === 0 ) {
		return;
	}

	// Icon divider (<i>)
	if ( divider.match(/\bicon\b/) ) {
		dividerNode = document.createElement( 'i' );
		dividerNode.classList.add( ...divider.split(/\s+/) );
		dividerNode.classList.add( 'divider' );
	}

	// Text divider (<span>)
	else {
		let content = document.createTextNode( divider );
		dividerNode = document.createElement( 'span' );
		dividerNode.classList.add( 'divider' );
		dividerNode.appendChild( content );
	}

	for ( let i in sections ) {
		if ( i > 0 ) {
			let section = sections[ i ];
			element.insertBefore( dividerNode.cloneNode(true), section );
		}
	}
}


@customElement( `${constants.elementPrefix}breadcrumb` )
export class SemanticUIBreadcrumbElement extends SemanticUIElement {
	@bindable divider;
	@bindableEnum(constants.VALID_SIZES) size;
	@children( '[ui-breadcrumb-section]' ) sections;

	attached( ...args ) {
		this.logger.debug( "Attached!" );

		if ( this.divider ) {
			let div = this.element.querySelector( 'div' );
			addDividerNodes( div, this.divider );
		}

		this.logger.debug( "Done with attached()." );
	}

}


@customAttribute( `${constants.attributePrefix}breadcrumb` )
export class SemanticUIBreadcrumbAttribute extends SemanticUIAttribute {

	@bindable divider;
	@bindableEnum(constants.VALID_SIZES) size;
	@children( '[ui-breadcrumb-section]' ) sections;

	attached( ...args ) {
		this.logger.debug( "Attached!" );

		if ( this.divider ) {
			addDividerNodes( this.element, this.divider );
		}

		this.logger.debug( "Done with attached()." );
	}


}


/**
 * ui-breadcrumb-section
 */
@customAttribute( `${constants.attributePrefix}breadcrumb-section` )
export class SemanticUIBreadcrumbSection extends SemanticUIAttribute {

	@bindableToggle active = false;

	bind() {
		// No super
		this.element.classList.add( 'section' );
	}

}


/**
 * ui-breadcrumb-divider
 */
@customAttribute( `${constants.attributePrefix}breadcrumb-divider` )
export class SemanticUIBreadcrumbDivider extends SemanticUIAttribute {

	bind() {
		// No super
		if ( this.element.classList ) {
			this.element.classList.add( 'divider' );
		}
	}

}

