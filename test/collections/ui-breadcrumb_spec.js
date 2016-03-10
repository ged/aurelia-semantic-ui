/* -*- javascript -*- */
"use strict";

import {UIBreadcrumbAttribute} from '../../src/collections/ui-breadcrumb';
import {Container} from 'aurelia-dependency-injection';
import {TemplatingEngine} from 'aurelia-templating';
import {initialize} from 'aurelia-pal-browser';
import {DOM} from 'aurelia-pal';

describe('UIBreadcrumbAttribute', () => {
	let uiBreadcrumb;
	let container;
	let templatingEngine;
	let element;

	function createSectionAnchor( text ) {
		let anchor = document.createElement( 'a' );
		anchor.appendChild( document.createTextNode(text) );
		let attr = document.createAttribute('ui-breadcrumb-section');
		anchor.setAttributeNode( attr );

		return anchor;
	}
	function createActiveSectionDiv( text ) {
		let div = document.createElement( 'div' );
		div.appendChild( document.createTextNode(text) );
		let attr = document.createAttribute('ui-breadcrumb-section');
		attr.value = 'active: true';
		div.setAttributeNode( attr );

		return div;
	}

	beforeEach(() => {
		initialize();

		element = document.createElement('div');
		element.appendChild( createSectionAnchor('One') );
		element.appendChild( createSectionAnchor('Two') );
		element.appendChild( createActiveSectionDiv('Three') );

		container = new Container();
		container.registerInstance(DOM.Element, element);
		jasmine.clock().install();
		templatingEngine = container.get(TemplatingEngine);
	});

	afterEach(() => {
		jasmine.clock().uninstall();
	});


	it( 'adds base classes when bound', done => {
		uiBreadcrumb = templatingEngine.createViewModelForUnitTest( UIBreadcrumbAttribute );
		spyOn( element.classList, 'add' ).and.callThrough();

		uiBreadcrumb.bind();
		jasmine.clock().tick(1);

		expect( element.classList.add.calls.count() ).toEqual( 1 );
		expect( element.classList.add.calls.allArgs() ).toContain(['ui', 'breadcrumb']);

		done();
	});

	it( 'adds a size class when one is set', done => {
		uiBreadcrumb = templatingEngine.
			createViewModelForUnitTest( UIBreadcrumbAttribute, {size: 'big'} );
		spyOn( element.classList, 'add' ).and.callThrough();

		uiBreadcrumb.bind();
		jasmine.clock().tick(1);

		expect( element.classList.add.calls.count() ).toEqual( 2 );
		expect( element.classList.add.calls.allArgs() ).toContain(['ui', 'breadcrumb']);
		expect( element.classList.add.calls.allArgs() ).toContain(['big']);

		done();
	});

	it( 'auto-generates text dividers if the divider is set', done => {
		uiBreadcrumb = templatingEngine.
			createViewModelForUnitTest( UIBreadcrumbAttribute, {divider: '/'} );
		// TODO: Is there a way to have the @children do this instead?
		uiBreadcrumb.sections = element.querySelectorAll( '[ui-breadcrumb-section]' );

		spyOn( element, 'insertBefore' ).and.callThrough();
		uiBreadcrumb.bind();
		jasmine.clock().tick(1);

		expect( element.insertBefore.calls.count() ).toEqual( 2 );
		expect(
			element.insertBefore
		).toHaveBeenCalledWith( jasmine.any(HTMLSpanElement), jasmine.any(HTMLDivElement) );

		done();
	});

	it( 'auto-generates icon dividers if the divider is set to an icon', done => {
		uiBreadcrumb = templatingEngine.
			createViewModelForUnitTest( UIBreadcrumbAttribute, {divider: 'right angle icon'} );
		// TODO: Is there a way to have the @children do this instead?
		uiBreadcrumb.sections = element.querySelectorAll( '[ui-breadcrumb-section]' );

		spyOn( element, 'insertBefore' ).and.callThrough();
		uiBreadcrumb.bind();
		jasmine.clock().tick(1);

		expect( element.insertBefore.calls.count() ).toEqual( 2 );
		expect(
			element.insertBefore
		).toHaveBeenCalledWith( jasmine.any(HTMLElement), jasmine.any(HTMLElement) );

		done();
	});

	it( '', done => {
		uiBreadcrumb = templatingEngine.
			createViewModelForUnitTest( UIBreadcrumbAttribute, {divider: 'right angle icon'} );
		// TODO: Is there a way to have the @children do this instead?
		uiBreadcrumb.sections = element.querySelectorAll( '[ui-breadcrumb-section]' );

		spyOn( element, 'insertBefore' ).and.callThrough();
		uiBreadcrumb.bind();
		jasmine.clock().tick(1);

		expect( element.insertBefore.calls.count() ).toEqual( 2 );
		expect(
			element.insertBefore
		).toHaveBeenCalledWith( jasmine.any(HTMLElement), jasmine.any(HTMLElement) );

		done();
	});
});
