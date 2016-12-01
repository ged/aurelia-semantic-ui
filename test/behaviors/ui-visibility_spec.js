/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {customMatchers} from '../helpers';

var counter = 0;

describe('ui-visibility', () => {
	let component, logger;

	beforeAll(() => {
		logger = LogManager.getLogger( 'ui-visibility-spec' );
		jasmine.addMatchers( customMatchers );
	});

	beforeEach(() => {
		component = StageComponent.
			withResources('src/behaviors/ui-visibility');
	});

	afterEach(() => {
		try {
			component.dispose();
		} catch(e) {
			logger.debug( "Error disposing the StageComponent" );
		}
	});


	describe( 'as a custom attribute', () => {

		it( "registers visibility callbacks on the attributed element", done => {
			let visibilityPlugin = spyOn( $.fn, 'visibility' );

			component.
				inView(`<div ui-visibility></div>`).
				boundTo({}).
				create( bootstrap ).
				then( () => {
					expect( visibilityPlugin ).
						toHaveBeenCalledWith( jasmine.objectContaining({ type: false }) );
				}).
				then( done ).
				catch( done.fail );
		});


		it( "can be registered with fixed visibility", done => {
			let visibilityPlugin = spyOn( $.fn, 'visibility' );

			component.
				inView(`<div ui-visibility="type: fixed"></div>`).
				boundTo({}).
				create( bootstrap ).
				then( () => {
					expect( visibilityPlugin ).
						toHaveBeenCalledWith( jasmine.objectContaining({ type: 'fixed' }) );
				}).
				then( done ).
				catch( done.fail );
		});


		it( "gets registered with image visibility if it's on an IMG", done => {
			let visibilityPlugin = spyOn( $.fn, 'visibility' );

			component.
				inView(`<img src="" ui-visibility>`).
				boundTo({}).
				create( bootstrap ).
				then( () => {
					expect( visibilityPlugin ).
						toHaveBeenCalledWith( jasmine.objectContaining({ type: 'image' }) );
				}).
				then( done ).
				catch( done.fail );
		});


		it( "gets registered with a specified type of visibility even if it's on an IMG", done => {
			let visibilityPlugin = spyOn( $.fn, 'visibility' );

			component.
				inView(`<img src="" ui-visibility="type: fixed">`).
				boundTo({}).
				create( bootstrap ).
				then( () => {
					expect( visibilityPlugin ).
						toHaveBeenCalledWith( jasmine.objectContaining({ type: 'fixed' }) );
				}).
				then( done ).
				catch( done.fail );
		});

	});



});
