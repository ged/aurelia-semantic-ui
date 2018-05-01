/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {customMatchers, setupConsoleLogging} from '../helpers';

var counter = 0;

describe('ui-modal', () => {
	let component, logger;

	beforeAll(() => {
		setupConsoleLogging();
		logger = LogManager.getLogger( 'ui-modal-spec' );
		jasmine.addMatchers( customMatchers );
	});

	beforeEach(() => {
		component = StageComponent.
			withResources('src/modules/ui-modal');
	});

	afterEach(() => {
		try {
			component.dispose();
		} catch(e) {
			logger.debug( "Error disposing the StageComponent" );
		}
	});


	describe( 'as a custom element', () => {


	});


	fdescribe( 'as a custom attribute', () => {

		it( "can be made detachable", done => {
			component.
				inView(`
				<div ui-modal></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'detachable', 'modal' );
				}).
				then( done ).
				catch( done.fail );
		});

	});

});
