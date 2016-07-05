/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';


describe('ui-button', () => {
	let component, logger;

	beforeAll(() => {
		// let appender = new ConsoleAppender();
		// LogManager.addAppender( appender );
		// LogManager.setLevel( 'warn' );
		//
		logger = LogManager.getLogger( 'ui-button-spec');
	});

	beforeEach(() => {
		component = StageComponent.withResources('src/elements/ui-button');
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
					<div ui-button>The Button</div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element.classList ).toContain( 'ui', 'button' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a size class when one is set', done => {
			component.
				inView(`
					<div ui-button="size: huge">The Button</div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element.classList ).toContain( 'ui', 'huge', 'button' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a color class when one is set', done => {
			component.
				inView(`
					<div ui-button="color: red">Erase History</div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element.classList ).toContain( 'ui', 'red', 'button' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a disabled class when it is set', done => {
			component.
				inView(`
					<div ui-button="disabled: true">Eject!</div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element.classList ).toContain( 'ui', 'disabled', 'button' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'auto-generates an icon if one is set', done => {
			component.
				inView(`
					<div ui-button="icon: check">Yep!</div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let icon = component.element.querySelector( 'i.icon' );
					expect( icon ).toBeDefined();
					expect( icon.classList ).toContain( 'ui', 'check', 'icon' )
				}).
				then( done ).
				catch( done.fail );
		});

	});


	describe( 'as a custom element', () => {

		it( 'adds a size class when one is set', done => {
			component.
				inView(`
					<ui-button size="huge">Do All The Things!</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let button = component.element.querySelector( 'button' );

					expect( button ).toBeDefined();
					expect( button.nodeType ).toEqual( 1 );
					expect( button.classList ).toContain( 'ui', 'huge', 'button' );
					expect( button.innerText ).toContain( 'Do All The Things!' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a color class when one is set', done => {
			component.
				inView(`
					<ui-button color="red">Erase History</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let button = component.element.querySelector( 'button' );

					expect( button ).toBeDefined();
					expect( button.nodeType ).toEqual( 1 );
					expect( button.classList ).toContain( 'ui', 'red', 'button' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a disabled class when it is set', done => {
			component.
				inView(`
					<ui-button disabled="true">Eject!</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let button = component.element.querySelector( 'button' );

					expect( button ).toBeDefined();
					expect( button.nodeType ).toEqual( 1 );
					expect( button.classList ).toContain( 'ui', 'disabled', 'button' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'auto-generates an icon if one is set', done => {
			component.
				inView(`
					<ui-button icon="check">Yep!</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let icon = component.element.querySelector( 'i.icon' );

					expect( icon ).not.toBeNull();
					expect( icon.classList ).toContain( 'check', 'icon' )
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'can be basic', done => {
			component.
				inView(`
					<ui-button basic>So Simple</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let button = component.element.querySelector( 'button' );
					expect( button.classList ).toContain( 'basic' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


});
