/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {customMatchers} from '../helpers';


describe('ui-container', () => {
	let component, logger;

	beforeAll(() => {
		jasmine.addMatchers( customMatchers );
		logger = LogManager.getLogger( 'ui-container-spec');
	});

	beforeEach(() => {
		component = StageComponent.withResources('src/elements/ui-container');
	});

	afterEach(() => {
		try {
			component.dispose();
		} catch(e) {
			logger.debug( "Error disposing the StageComponent" );
		}
	});


	describe( 'as a custom element', () => {

		it( 'adds an text class when one is set', done => {
			component.
				inView(`
					<ui-container text></ui-container>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let container = component.element.firstElementChild;
					expect( container ).toHaveCssClasses( 'ui', 'text', 'container' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an alignment class when one is set', done => {
			component.
				inView(`
					<ui-container aligned="left"></ui-container>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let container = component.element.firstElementChild;
					expect( container ).toHaveCssClasses( 'ui', 'left', 'aligned', 'container' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a justified class when one is set', done => {
			component.
				inView(`
					<ui-container justified></ui-container>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let container = component.element.firstElementChild;
					expect( container ).toHaveCssClasses( 'ui', 'justified', 'container' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a fluid class when one is set', done => {
			component.
				inView(`
					<ui-container fluid></ui-container>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let container = component.element.firstElementChild;
					expect( container ).toHaveCssClasses( 'ui', 'fluid', 'container' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


	describe( 'as a custom attribute', () => {

		it( 'adds an text class when one is set', done => {
			component.
				inView(`
					<div ui-container="text: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'text', 'container' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an alignment class when one is set', done => {
			component.
				inView(`
					<div ui-container="aligned: center"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'center', 'aligned', 'container' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a justified class when one is set', done => {
			component.
				inView(`
					<div ui-container="justified: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'justified', 'container' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a fluid class when one is set', done => {
			component.
				inView(`
					<div ui-container="fluid: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'fluid', 'container' );
				}).
				then( done ).
				catch( done.fail );
		});


	});


});
