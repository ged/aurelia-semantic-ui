/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';


describe('UIBreadcrumbAttribute', () => {
	let component;

	beforeAll(() => {
		let appender = new ConsoleAppender();
		LogManager.addAppender( appender );
		LogManager.setLevel( 'debug' );
	});

	beforeEach(() => {
		component = StageComponent.
			withResources('src/collections/ui-breadcrumb');
	});

	afterEach(() => {
		component.dispose();
	});



	it( 'adds semantic classes when bound', done => {
		component.
			inView(`
				<div ui-breadcrumb>
					<a ui-breadcrumb-section>One</a>
					<a ui-breadcrumb-section>Two</a>
					<a ui-breadcrumb-section="active: true">Three</a>
				</div>
			`).
			boundTo({}).
			create( bootstrap ).then( () => {
				let sections = component.element.querySelectorAll( 'a' );
				let section;

				console.debug( "Sections are: ", sections );
				expect( component.element.classList ).toContain( 'ui', 'breadcrumb' );
				for( section of sections ) {
					expect( section.classList ).toContain( 'section' );
				}
				expect( sections[2].classList ).toContain( 'active' )
			}).
			then( done );
	});


	it( 'adds a size class when one is set', done => {
		component.
			inView(`
				<div ui-breadcrumb="size: huge">
					<a ui-breadcrumb-section>One</a>
					<a ui-breadcrumb-section>Two</a>
					<a ui-breadcrumb-section="active: true">Three</a>
				</div>
			`).
			boundTo({}).
			create( bootstrap ).then( () => {
				expect( component.element.classList ).toContain( 'ui', 'huge', 'breadcrumb' );
			}).
			then( done );
	});


	it( 'auto-generates text dividers if the divider is set', done => {
		component.
			inView(`
				<div ui-breadcrumb="divider: /">
					<a ui-breadcrumb-section>One</a>
					<a ui-breadcrumb-section>Two</a>
					<a ui-breadcrumb-section="active: true">Three</a>
				</div>
			`).
			boundTo({}).
			create( bootstrap ).then( () => {
				console.log( "Element is: ", component.element );
				let dividers = component.element.querySelectorAll( 'span.divider' );
				expect( dividers.length ).toEqual( 2 );
			}).
			then( done );
	});


	it( 'auto-generates icon dividers if the divider is set to an icon', done => {
		component.
			inView(`
				<div ui-breadcrumb="divider: right angle icon">
					<a ui-breadcrumb-section>One</a>
					<a ui-breadcrumb-section>Two</a>
					<a ui-breadcrumb-section="active: true">Three</a>
				</div>
			`).
			boundTo({}).
			create( bootstrap ).then( () => {
				console.log( "Element is: ", component.element );
				let dividers = component.element.querySelectorAll( 'i.icon' );
				expect( dividers.length ).toEqual( 2 );
			}).
			then( done );
	});

});
