/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {customMatchers} from '../helpers';


describe('ui-icon', () => {
	let component, logger;

	beforeAll(() => {
		jasmine.addMatchers( customMatchers );
		logger = LogManager.getLogger( 'ui-icon-spec' );
	});

	beforeEach(() => {
		component = StageComponent.withResources('src/elements/ui-icon');
	});

	afterEach(() => {
		component.dispose();
	});


	describe( 'as a custom attribute', () => {

		it( 'adds semantic classes when bound', done => {
			component.
				inView(`
					<i ui-icon="name: cloud"></i>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'cloud', 'icon' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'has a reasonable name default', done => {
			component.
				inView(`
					<i ui-icon></i>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'help', 'circle', 'icon' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a size class when one is set', done => {
			component.
				inView(`
					<i ui-icon="name: cloud; size: huge"></i>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'huge', 'cloud', 'icon' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a color class when one is set', done => {
			component.
				inView(`
					<i ui-icon="name: user; color: red">Erase History</i>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'red', 'user', 'icon' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a disabled class when it is set', done => {
			component.
				inView(`
					<i ui-icon="disabled: true">Eject!</i>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'disabled', 'icon' );
				}).
				then( done ).
				catch( done.fail );
		});


	});


	describe( 'as a custom element', () => {

		it( 'uses the icon name', done => {
			component.
				inView(`
					<ui-icon name="cloud"></ui-icon>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let icon = component.viewModel.semanticElement;

					expect( icon ).toBeDefined();
					expect( icon.nodeType ).toEqual( 1 );
					expect( icon ).toHaveCssClasses( 'cloud' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'support multiple names', done => {
			component.
				inView(`
					<ui-icon name="circular inverted users"></ui-icon>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let icon = component.viewModel.semanticElement;

					expect( icon ).toBeDefined();
					expect( icon.nodeType ).toEqual( 1 );
					expect( icon ).toHaveCssClasses( 'circular', 'inverted', 'users' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'has a reasonable default name', done => {
			component.
				inView(`
					<ui-icon></ui-icon>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let icon = component.viewModel.semanticElement;

					expect( icon ).toBeDefined();
					expect( icon.nodeType ).toEqual( 1 );
					expect( icon ).toHaveCssClasses( 'help', 'circle' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a size class when one is set', done => {
			component.
				inView(`
					<ui-icon size="huge"></ui-icon>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let icon = component.viewModel.semanticElement;

					expect( icon ).toBeDefined();
					expect( icon.nodeType ).toEqual( 1 );
					expect( icon ).toHaveCssClasses( 'huge' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a color class when one is set', done => {
			component.
				inView(`
					<ui-icon color="red"></ui-icon>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let icon = component.viewModel.semanticElement;

					expect( icon ).toBeDefined();
					expect( icon.nodeType ).toEqual( 1 );
					expect( icon ).toHaveCssClasses( 'red' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a disabled class when it is set', done => {
			component.
				inView(`
					<ui-icon disabled="true"></ui-icon>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let icon = component.viewModel.semanticElement;

					expect( icon ).toBeDefined();
					expect( icon.nodeType ).toEqual( 1 );
					expect( icon ).toHaveCssClasses( 'disabled' );
				}).
				then( done ).
				catch( done.fail );
		});


	});


});
