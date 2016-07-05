/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';


describe('ui-form', () => {
	let component, logger;

	beforeAll(() => {
		logger = LogManager.getLogger( 'ui-form-spec');
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
					expect( component.element.classList ).toContain( 'ui', 'form' );
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
					expect( component.element.classList ).toContain( 'ui', 'loading', 'form' );
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
					expect( form.classList ).toContain( 'ui', 'loading', 'form' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


});
