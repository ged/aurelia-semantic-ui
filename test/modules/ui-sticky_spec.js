/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {customMatchers} from '../helpers';

var counter = 0;

describe('ui-sticky', () => {
	let component, logger;

	beforeAll(() => {
		logger = LogManager.getLogger( 'ui-sticky-spec' );
		jasmine.addMatchers( customMatchers );
	});

	beforeEach(() => {
		component = StageComponent.
			withResources('src/modules/ui-sticky');
	});

	afterEach(() => {
		try {
			component.dispose();
		} catch(e) {
			logger.debug( "Error disposing the StageComponent" );
		}
	});


	describe( 'as a custom attribute', () => {

		it( "adds sticky CSS classes to the element", done => {
			component.
				inView(`
				<div ui-sticky></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let select = component.element;

					expect( select ).toHaveCssClasses( 'ui', 'sticky' );
				}).
				then( done ).
				catch( done.fail );
		});

	});



});
