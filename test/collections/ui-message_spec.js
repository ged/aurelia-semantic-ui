/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {customMatchers} from '../helpers';


describe('ui-message', () => {
	let component, logger;

	beforeAll(() => {
		logger = LogManager.getLogger( 'ui-message-spec' );
		jasmine.addMatchers( customMatchers );
	});

	beforeEach(() => {
		component = StageComponent.
			withResources('src/collections/ui-message');
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
					<div ui-message>
					</div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'message' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an success class when it is set', done => {
			component.
				inView(`
					<div ui-message="success: true">
					</div>
				`).
				boundTo().
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'success', 'message' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds positive classes when it is set', done => {
			component.
				inView(`
					<div ui-message="positive: true">
					</div>
				`).
				boundTo().
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'positive', 'message' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds error classes when it is set', done => {
			component.
				inView(`
					<div ui-message="error: true">
					</div>
				`).
				boundTo().
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'error', 'message' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds negative classes when it is set', done => {
			component.
				inView(`
					<div ui-message="negative: true">
					</div>
				`).
				boundTo().
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'negative', 'message' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a warning class when it is set', done => {
			component.
				inView(`
					<div ui-message="warning: true">
					</div>
				`).
				boundTo().
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'warning', 'message' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a size class when one is set', done => {
			component.
				inView(`
					<div ui-message="size: huge">
					</div>
				`).
				boundTo().
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'huge', 'message' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an color class when one is set', done => {
			component.
				inView(`
					<div ui-message="color: green">
					</div>
				`).
				boundTo().
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'green', 'message' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


	describe( 'as a custom element', () => {

		it( 'adds an success class when it is set', done => {
			component.
				inView(`
					<ui-message success>
					</ui-message>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let message = component.element.firstElementChild;

					expect( message ).toBeHtmlTag( 'div' );
					expect( message ).toHaveCssClasses( 'ui', 'success', 'message' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a positive class when it is set', done => {
			component.
				inView(`
					<ui-message positive.bind="isPositive">
					</ui-message>
				`).
				boundTo({
					isPositive: true
				}).
				create( bootstrap ).then( () => {
					let message = component.element.firstElementChild;

					expect( message ).toBeHtmlTag( 'div' );
					expect( message ).toHaveCssClasses( 'ui', 'positive', 'message' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a error class when it is set', done => {
			component.
				inView(`
					<ui-message error.bind="error">
					</ui-message>
				`).
				boundTo({
					error: new Error("Something bad happened.")
				}).
				create( bootstrap ).then( () => {
					let message = component.element.firstElementChild;

					expect( message ).toBeHtmlTag( 'div' );
					expect( message ).toHaveCssClasses( 'ui', 'error', 'message' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a negative class when it is set', done => {
			component.
				inView(`
					<ui-message negative.bind="!isPositive">
					</ui-message>
				`).
				boundTo({
					isPositive: false
				}).
				create( bootstrap ).then( () => {
					let message = component.element.firstElementChild;

					expect( message ).toBeHtmlTag( 'div' );
					expect( message ).toHaveCssClasses( 'ui', 'negative', 'message' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a warning class when it is set', done => {
			component.
				inView(`
					<ui-message warning>
					</ui-message>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let message = component.element.firstElementChild;

					expect( message ).toBeHtmlTag( 'div' );
					expect( message ).toHaveCssClasses( 'ui', 'warning', 'message' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a size class when one is set', done => {
			component.
				inView(`
					<ui-message size="tiny">
					</ui-message>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let message = component.element.firstElementChild;

					expect( message ).toBeHtmlTag( 'div' );
					expect( message ).toHaveCssClasses( 'ui', 'tiny', 'message' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a color class when one is set', done => {
			component.
				inView(`
					<ui-message color="yellow">
					</ui-message>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let message = component.element.firstElementChild;

					expect( message ).toBeHtmlTag( 'div' );
					expect( message ).toHaveCssClasses( 'ui', 'yellow', 'message' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


});

