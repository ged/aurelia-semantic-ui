/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';


describe('UIBreadcrumbAttribute', () => {
	let component;

	beforeEach(() => {
		component = StageComponent.
			withResources('src/collections/ui-breadcrumb').
			inView(`
				<div ui-breadcrumb>
					<a ui-breadcrumb-section>One</a>
					<a ui-breadcrumb-section>Two</a>
					<a ui-breadcrumb-section="active: true">Three</a>
				</div>
			`);
	});

	afterEach(() => {
		component.dispose();
	});



	it( 'adds semantic classes when bound', done => {
		component.create( bootstrap ).then( () => {
			expect( component.element.classList ).toContain( 'ui', 'breadcrumb' );
		}).
		then( done );
	});

	//
	// it( 'adds a size class when one is set', done => {
	// 	uiBreadcrumb = templatingEngine.
	// 		createViewModelForUnitTest( UIBreadcrumbAttribute, {size: 'big'} );
	// 	spyOn( element.classList, 'add' ).and.callThrough();
	//
	// 	uiBreadcrumb.bind();
	// 	jasmine.clock().tick(1);
	//
	// 	expect( element.classList.add.calls.count() ).toEqual( 2 );
	// 	expect( element.classList.add.calls.allArgs() ).toContain(['ui', 'breadcrumb']);
	// 	expect( element.classList.add.calls.allArgs() ).toContain(['big']);
	//
	// 	done();
	// });
	//
	// it( 'auto-generates text dividers if the divider is set', done => {
	// 	uiBreadcrumb = templatingEngine.
	// 		createViewModelForUnitTest( UIBreadcrumbAttribute, {divider: '/'} );
	// 	// TODO: Is there a way to have the @children do this instead?
	// 	uiBreadcrumb.sections = element.querySelectorAll( '[ui-breadcrumb-section]' );
	//
	// 	spyOn( element, 'insertBefore' ).and.callThrough();
	// 	uiBreadcrumb.bind();
	// 	jasmine.clock().tick(1);
	//
	// 	expect( element.insertBefore.calls.count() ).toEqual( 2 );
	// 	expect(
	// 		element.insertBefore
	// 	).toHaveBeenCalledWith( jasmine.any(HTMLSpanElement), jasmine.any(HTMLDivElement) );
	//
	// 	done();
	// });
	//
	// it( 'auto-generates icon dividers if the divider is set to an icon', done => {
	// 	uiBreadcrumb = templatingEngine.
	// 		createViewModelForUnitTest( UIBreadcrumbAttribute, {divider: 'right angle icon'} );
	// 	// TODO: Is there a way to have the @children do this instead?
	// 	uiBreadcrumb.sections = element.querySelectorAll( '[ui-breadcrumb-section]' );
	//
	// 	spyOn( element, 'insertBefore' ).and.callThrough();
	// 	uiBreadcrumb.bind();
	// 	jasmine.clock().tick(1);
	//
	// 	expect( element.insertBefore.calls.count() ).toEqual( 2 );
	// 	expect(
	// 		element.insertBefore
	// 	).toHaveBeenCalledWith( jasmine.any(HTMLElement), jasmine.any(HTMLElement) );
	//
	// 	done();
	// });

});
