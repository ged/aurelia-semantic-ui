/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {customMatchers} from '../helpers';


describe('ui-divider', () => {
	let component, logger;

	beforeAll(() => {
		jasmine.addMatchers( customMatchers );
		logger = LogManager.getLogger( 'ui-divider-spec');
	});

	beforeEach(() => {
		component = StageComponent.withResources('src/elements/ui-divider');
	});

	afterEach(() => {
		try {
			component.dispose();
		} catch(e) {
			logger.debug( "Error disposing the StageComponent" );
		}
	});


	describe( 'as a custom element', () => {

		it( 'adds an inverted class when it is set', done => {
			component.
				inView(`
					<ui-divider inverted></ui-divider>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let divider = component.element.firstElementChild;
					expect( divider ).toHaveCssClasses( 'ui', 'inverted', 'divider' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a hidden class when it is set', done => {
			component.
				inView(`
					<ui-divider hidden></ui-divider>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let divider = component.element.firstElementChild;
					expect( divider ).toHaveCssClasses( 'ui', 'hidden', 'divider' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a fitted class when it is set', done => {
			component.
				inView(`
					<ui-divider fitted></ui-divider>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let divider = component.element.firstElementChild;
					expect( divider ).toHaveCssClasses( 'ui', 'fitted', 'divider' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a section class when it is set', done => {
			component.
				inView(`
					<ui-divider section></ui-divider>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let divider = component.element.firstElementChild;
					expect( divider ).toHaveCssClasses( 'ui', 'section', 'divider' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a clearing class when it is set', done => {
			component.
				inView(`
					<ui-divider clearing></ui-divider>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let divider = component.element.firstElementChild;
					expect( divider ).toHaveCssClasses( 'ui', 'clearing', 'divider' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a vertical class when it is set', done => {
			component.
				inView(`
					<ui-divider vertical></ui-divider>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let divider = component.element.firstElementChild;
					expect( divider ).toHaveCssClasses( 'ui', 'vertical', 'divider' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


	describe( 'as a custom attribute', () => {

		it( 'adds an inverted class when it is set', done => {
			component.
				inView(`
					<div ui-divider="inverted: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'inverted', 'divider' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a hidden class when it is set', done => {
			component.
				inView(`
					<div ui-divider="hidden: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'hidden', 'divider' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a fitted class when it is set', done => {
			component.
				inView(`
					<div ui-divider="fitted: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'fitted', 'divider' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a section class when it is set', done => {
			component.
				inView(`
					<div ui-divider="section: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'section', 'divider' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a clearing class when it is set', done => {
			component.
				inView(`
					<div ui-divider="clearing: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'clearing', 'divider' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a vertical class when it is set', done => {
			component.
				inView(`
					<div ui-divider="vertical: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'vertical', 'divider' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


});
