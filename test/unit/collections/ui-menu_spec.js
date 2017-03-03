/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {customMatchers} from '../helpers';


describe('ui-menu', () => {
	let component, logger;

	beforeAll(() => {
		logger = LogManager.getLogger( 'ui-menu-spec' );
		jasmine.addMatchers( customMatchers );
	});

	beforeEach(() => {
		component = StageComponent.
			withResources('src/collections/ui-menu');
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
					<div ui-menu>
					</div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'menu' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an inverted class when it is set', done => {
			component.
				inView(`
					<div ui-menu="inverted: true">
					</div>
				`).
				boundTo().
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'inverted', 'menu' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds vertical classes when it is set', done => {
			component.
				inView(`
					<div ui-menu="vertical: true">
					</div>
				`).
				boundTo().
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'vertical', 'menu' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds secondary classes when it is set', done => {
			component.
				inView(`
					<div ui-menu="secondary: true">
					</div>
				`).
				boundTo().
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'secondary', 'menu' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds pointing classes when it is set', done => {
			component.
				inView(`
					<div ui-menu="pointing: true">
					</div>
				`).
				boundTo().
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'pointing', 'menu' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a fixed class when one is set', done => {
			component.
				inView(`
					<div ui-menu="fixed: left">
					</div>
				`).
				boundTo().
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'left', 'fixed', 'menu' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an attached class when attach is set', done => {
			component.
				inView(`
					<div ui-menu="attach: true">
					</div>
				`).
				boundTo().
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'attached', 'menu' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an attached class and a side when attach is set to a side', done => {
			component.
				inView(`
					<div ui-menu="attach: top">
					</div>
				`).
				boundTo().
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'top', 'attached', 'menu' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


	describe( 'as a custom element', () => {

		it( 'adds an inverted class when it is set', done => {
			component.
				inView(`
					<ui-menu inverted>
					</ui-menu>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let menu = component.element.firstElementChild;

					expect( menu ).toBeHtmlTag( 'div' );
					expect( menu ).toHaveCssClasses( 'ui', 'inverted', 'menu' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a vertical class when it is set', done => {
			component.
				inView(`
					<ui-menu vertical.bind="portraitMode">
					</ui-menu>
				`).
				boundTo({
					portraitMode: true
				}).
				create( bootstrap ).then( () => {
					let menu = component.element.firstElementChild;

					expect( menu ).toBeHtmlTag( 'div' );
					expect( menu ).toHaveCssClasses( 'ui', 'vertical', 'menu' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a secondary class when it is set', done => {
			component.
				inView(`
					<ui-menu secondary.bind="portraitMode">
					</ui-menu>
				`).
				boundTo({
					portraitMode: true
				}).
				create( bootstrap ).then( () => {
					let menu = component.element.firstElementChild;

					expect( menu ).toBeHtmlTag( 'div' );
					expect( menu ).toHaveCssClasses( 'ui', 'secondary', 'menu' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a pointing class when it is set', done => {
			component.
				inView(`
					<ui-menu pointing.bind="portraitMode">
					</ui-menu>
				`).
				boundTo({
					portraitMode: true
				}).
				create( bootstrap ).then( () => {
					let menu = component.element.firstElementChild;

					expect( menu ).toBeHtmlTag( 'div' );
					expect( menu ).toHaveCssClasses( 'ui', 'pointing', 'menu' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a fixed class when one is set', done => {
			component.
				inView(`
					<ui-menu fixed="top">
					</ui-menu>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let menu = component.element.firstElementChild;

					expect( menu ).toBeHtmlTag( 'div' );
					expect( menu ).toHaveCssClasses( 'ui', 'top', 'fixed', 'menu' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an attached class when attach is set', done => {
			component.
				inView(`
					<ui-menu attach>
					</ui-menu>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let menu = component.element.firstElementChild;

					expect( menu ).toBeHtmlTag( 'div' );
					expect( menu ).toHaveCssClasses( 'ui', 'attached', 'menu' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an attached class when attach is set to a side', done => {
			component.
				inView(`
					<ui-menu attach="bottom">
					</ui-menu>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let menu = component.element.firstElementChild;

					expect( menu ).toBeHtmlTag( 'div' );
					expect( menu ).toHaveCssClasses( 'ui', 'bottom', 'attached', 'menu' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


});

