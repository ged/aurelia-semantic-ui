/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {customMatchers} from '../helpers';

var counter = 0;

describe('ui-checkbox', () => {
	let component, logger;

	beforeAll(() => {
		logger = LogManager.getLogger( 'ui-checkbox-spec' );
		jasmine.addMatchers( customMatchers );
	});

	beforeEach(() => {
		component = StageComponent.
			withResources('src/modules/ui-checkbox');
	});

	afterEach(() => {
		try {
			component.dispose();
		} catch(e) {
			logger.debug( "Error disposing the StageComponent" );
		}
	});


	describe( 'as a custom attribute', () => {

		it( "generates the hidden input if it's not already present", done => {
			component.
				inView(`
					<div ui-checkbox="checked.bind=isChecked"></div>
				`).
				boundTo({
					isChecked: true
				}).
				create( bootstrap ).then( () => {
					let input = component.element.querySelector( 'input.hidden' );

					expect( input ).toBeHtmlTag( 'input' );
					expect( component.element ).toHaveCssClasses( 'ui', 'checkbox' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


	describe( 'as a custom element', () => {

		it( 'defaults to unchecked', done => {
			component.
				inView(`
					<form><ui-checkbox>Forcefield enabled</ui-checkbox></form>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let checkbox = component.element.querySelector( 'div' ),
						input = checkbox.querySelector( 'input' );

					expect( checkbox.nodeType ).toEqual( 1 );
					expect( checkbox ).toHaveCssClasses( 'ui', 'checkbox' );

					expect( component.viewModel.checked ).toEqual( false );
				}).
				then( done ).
				catch( done.fail );
		});


		xit( 'can default to checked', done => {
			component.
				inView(`
					<form><ui-checkbox checked>Forcefield enabled</ui-checkbox></form>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.viewModel.checked ).toEqual( true );
				}).
				then( done ).
				catch( done.fail );
		});


		xit( 'can bind to the checked status', done => {
			component.
				inView(`
					<form><ui-checkbox checked.bind="isChecked">Gravity enabled</ui-checkbox></form>
				`).
				boundTo({
					isChecked: true
				}).
				create( bootstrap ).then( () => {
					expect( component.viewModel.checked ).toEqual( true );
				}).
				then( done ).
				catch( done.fail );
		});

	});


});
