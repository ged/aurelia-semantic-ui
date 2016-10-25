/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {customMatchers} from '../helpers';


describe('ui-calendar', () => {
	let component, logger;

	beforeAll(() => {
		jasmine.addMatchers( customMatchers );
		logger = LogManager.getLogger( 'ui-calendar-spec');
	});

	beforeEach(() => {
		component = StageComponent.withResources('src/plugins/ui-calendar');
	});

	afterEach(() => {
		try {
			component.dispose();
		} catch(e) {
			logger.debug( "Error disposing the StageComponent" );
		}
	});


	describe( 'as a custom element', () => {

		it( 'defaults to a `datetime` selection', done => {
			component.
				inView(`
					<ui-calendar></ui-calendar>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let calendar = component.viewModel;
					expect( calendar.type ).toEqual( 'datetime' );
				}).
				then( done ).
				catch( done.fail );
		});

		it( 'can be set to a different type', done => {
			component.
				inView(`
					<ui-calendar type.bind="selectionType"></ui-calendar>
				`).
				boundTo({
					selectionType: 'year'
				}).
				create( bootstrap ).then( () => {
					let calendar = component.viewModel;
					expect( calendar.type ).toEqual( 'year' );
				}).
				then( done ).
				catch( done.fail );
		});


	});


	describe( 'as a custom attribute', () => {


	});


});
