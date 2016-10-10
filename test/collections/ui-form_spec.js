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

	});


});

describe('ui-checbox', () => {
	let component, logger;

	beforeAll(() => {
		logger = LogManager.getLogger( 'ui-checkbox-spec');
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
					<div ui-checkbox></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'checkbox' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


	describe( 'as a custom element', () => {

		it( 'can bind to the checked status of the hidden element', done => {
			component.
				inView(`
					<ui-checkbox checked.bind="isChecked">
					</ui-checkbox>
				`).
				boundTo({
					isChecked: true
				}).
				create( bootstrap ).then( () => {
					let checkbox = component.element.querySelector( 'div' ),
						input = checkbox.querySelector( 'input' );

					expect( checkbox.nodeType ).toEqual( 1 );
					expect( checkbox ).toHaveCssClasses( 'ui', 'checkbox' );

					expect( input.value ).toEqual( '1' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


});
