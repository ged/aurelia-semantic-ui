/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {customMatchers} from '../helpers';

var counter = 0;

describe('ui-dimmer', () => {
	let component, logger;

	beforeAll(() => {
		logger = LogManager.getLogger( 'ui-dimmer-spec' );
		jasmine.addMatchers( customMatchers );
	});

	beforeEach(() => {
		component = StageComponent.
			withResources('src/modules/ui-dimmer');
	});

	afterEach(() => {
		try {
			component.dispose();
		} catch(e) {
			logger.debug( "Error disposing the StageComponent" );
		}
	});


	describe( 'as a custom element', () => {

		it( "is active if active is set", done => {
			component.
				inView(`
				<ui-dimmer active><p>Stuff/</p></ui-dimmer>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'active', 'dimmer' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( "is disabled if disabled is set", done => {
			component.
				inView(`
				<ui-dimmer disabled><p>Stuff/</p></ui-dimmer>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'disabled', 'dimmer' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( "is inverted if inverted is set", done => {
			component.
				inView(`
				<ui-dimmer inverted><p>Stuff/</p></ui-dimmer>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'inverted', 'dimmer' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


	describe( 'as a custom attribute', () => {

		it( "adds dimmer CSS classes to the element", done => {
			component.
				inView(`
				<div ui-dimmer></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let div = component.element;

					expect( div ).toHaveCssClasses( 'ui', 'dimmer' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( "is active if active is set", done => {
			component.
				inView(`
				<div ui-dimmer="active: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let div = component.element;

					expect( div ).toHaveCssClasses( 'ui', 'active', 'dimmer' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( "is disabled if disabled is set", done => {
			component.
				inView(`
				<div ui-dimmer="disabled: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let div = component.element;

					expect( div ).toHaveCssClasses( 'ui', 'disabled', 'dimmer' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( "is inverted if inverted is set", done => {
			component.
				inView(`
				<div ui-dimmer="inverted: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let div = component.element;

					expect( div ).toHaveCssClasses( 'ui', 'inverted', 'dimmer' );
				}).
				then( done ).
				catch( done.fail );
		});

	});

});
