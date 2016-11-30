/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {customMatchers} from '../helpers';


describe('ui-form', () => {
	let component, logger;

	beforeAll(() => {
		logger = LogManager.getLogger( 'ui-form-spec');
		jasmine.addMatchers( customMatchers );
	});

	beforeEach(() => {
		component = StageComponent.
			withResources('src/collections/ui-form');
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
					<div ui-form>
					</div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'form' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a loading class when it is set', done => {
			component.
				inView(`
					<div ui-form="loading.bind: isLoading">
					</div>
				`).
				boundTo({
					isLoading: true
				}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'loading', 'form' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an error class when it is set', done => {
			component.
				inView(`
					<div ui-form="error.bind: formError">
					</div>
				`).
				boundTo({
					formError: "You're missing some data!"
				}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'error', 'form' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a success class when it is set', done => {
			component.
				inView(`
					<div ui-form="success.bind: formSuccess">
					</div>
				`).
				boundTo({
					formSuccess: "Okay, new user created!"
				}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'success', 'form' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a warning class when it is set', done => {
			component.
				inView(`
					<div ui-form="warning.bind: formWarning">
					</div>
				`).
				boundTo({
					formWarning: "Caution: this is an unsupported version."
				}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'warning', 'form' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an inverted class when it is set', done => {
			component.
				inView(`
					<div ui-form="inverted: true">
					</div>
				`).
				boundTo().
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'inverted', 'form' );
				}).
				then( done ).
				catch( done.fail );
		});


	});


	describe( 'as a custom element', () => {

		it( 'adds a loading class when it is set', done => {
			component.
				inView(`
					<ui-form loading.bind="isLoading">
					</ui-form>
				`).
				boundTo({
					isLoading: true
				}).
				create( bootstrap ).then( () => {
					let form = component.element.querySelector( 'form' );

					expect( form.nodeType ).toEqual( 1 );
					expect( form ).toHaveCssClasses( 'ui', 'loading', 'form' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an error class when it is set', done => {
			component.
				inView(`
					<ui-form error.bind="formError">
					</ui-form>
				`).
				boundTo({
					formError: "You're missing a few fields!"
				}).
				create( bootstrap ).then( () => {
					let form = component.element.querySelector( 'form' );

					expect( form.nodeType ).toEqual( 1 );
					expect( form ).toHaveCssClasses( 'ui', 'error', 'form' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a success class when it is set', done => {
			component.
				inView(`
					<ui-form success.bind="formSuccess">
					</ui-form>
				`).
				boundTo({
					formSuccess: "You're missing a few fields!"
				}).
				create( bootstrap ).then( () => {
					let form = component.element.querySelector( 'form' );

					expect( form.nodeType ).toEqual( 1 );
					expect( form ).toHaveCssClasses( 'ui', 'success', 'form' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a warning class when it is set', done => {
			component.
				inView(`
					<ui-form warning.bind="formWarning">
					</ui-form>
				`).
				boundTo({
					formWarning: "Two-day delivery not available to this address."
				}).
				create( bootstrap ).then( () => {
					let form = component.element.querySelector( 'form' );

					expect( form.nodeType ).toEqual( 1 );
					expect( form ).toHaveCssClasses( 'ui', 'warning', 'form' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an inverted class when it is set', done => {
			component.
				inView(`
					<ui-form inverted>
					</ui-form>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let form = component.element.querySelector( 'form' );

					expect( form.nodeType ).toEqual( 1 );
					expect( form ).toHaveCssClasses( 'ui', 'inverted', 'form' );
				}).
				then( done ).
				catch( done.fail );
		});


	});


});

