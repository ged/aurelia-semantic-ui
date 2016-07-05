/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';


describe('ui-breadcrumb', () => {
	let component, logger;

	beforeAll(() => {
		logger = LogManager.getLogger( 'ui-breadcrumb-spec');
	});

	beforeEach(() => {
		component = StageComponent.
			withResources('src/collections/ui-breadcrumb');
	});

	afterEach(() => {
		try {
			component.dispose();
		} catch(e) {
			logger.debug( "Error disposing the StageComponent" );
		}
	});


	describe( 'as a custom attribute', () => {

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

					expect( component.element.classList ).toContain( 'ui', 'breadcrumb' );
					for( section of sections ) {
						expect( section.classList ).toContain( 'section' );
					}
					expect( sections[2].classList ).toContain( 'active' )
				}).
				then( done ).
				catch( done.fail );
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
				then( done ).
				catch( done.fail );
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
					let dividers = component.element.querySelectorAll( 'span.divider' );
					expect( dividers.length ).toEqual( 2 );
				}).
				then( done ).
				catch( done.fail );
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
					let dividers = component.element.querySelectorAll( 'i.icon' );
					expect( dividers.length ).toEqual( 2 );
				}).
				then( done ).
				catch( done.fail );
		});

	});


	describe( 'as a custom element', () => {

		it( 'adds a size class when one is set', done => {
			component.
				inView(`
					<ui-breadcrumb size="huge">
						<a ui-breadcrumb-section>One</a>
						<a ui-breadcrumb-section>Two</a>
						<a ui-breadcrumb-section="active: true">Three</a>
					</ui-breadcrumb>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let div = component.element.querySelector( 'div' );

					expect( div.nodeType ).toEqual( 1 );
					expect( div.classList ).toContain( 'ui', 'huge', 'breadcrumb' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'auto-generates text dividers if the divider is set', done => {
			component.
				inView(`
					<ui-breadcrumb divider="/">
						<a ui-breadcrumb-section>One</a>
						<a ui-breadcrumb-section>Two</a>
						<a ui-breadcrumb-section="active: true">Three</a>
					</ui-breadcrumb>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let div = component.element.querySelector( 'div' );

					let dividers = div.querySelectorAll( 'span.divider' );
					expect( dividers.length ).toEqual( 2 );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'auto-generates icon dividers if the divider is set to an icon', done => {
			component.
				inView(`
					<ui-breadcrumb divider="right angle icon">
						<a ui-breadcrumb-section>One</a>
						<a ui-breadcrumb-section>Two</a>
						<a ui-breadcrumb-section="active: true">Three</a>
					</ui-breadcrumb>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let dividers = component.element.querySelectorAll( 'i.icon' );
					expect( dividers.length ).toEqual( 2 );
				}).
				then( done ).
				catch( done.fail );
		});

	});


});
