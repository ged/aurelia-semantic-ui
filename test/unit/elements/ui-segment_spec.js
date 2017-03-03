/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {customMatchers} from '../helpers';


describe('ui-segment', () => {
	let component, logger;

	beforeAll(() => {
		jasmine.addMatchers( customMatchers );
		logger = LogManager.getLogger( 'ui-segment-spec' );
	});

	beforeEach(() => {
		component = StageComponent.withResources('src/elements/ui-segment');
	});

	afterEach(() => {
		try {
			component.dispose();
		} catch(e) {
			logger.debug( "Error disposing the StageComponent" );
		}
	});


	describe( 'as a custom element', () => {

		it( 'adds a loading class when one is set', done => {
			component.
				inView(`
					<ui-segment loading></ui-segment>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'loading', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a basic class when one is set', done => {
			component.
				inView(`
					<ui-segment basic></ui-segment>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'basic', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a disabled class when one is set', done => {
			component.
				inView(`
					<ui-segment disabled></ui-segment>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'disabled', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an inverted class when one is set', done => {
			component.
				inView(`
					<ui-segment inverted></ui-segment>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'inverted', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a attached class when one is set', done => {
			component.
				inView(`
					<ui-segment attach></ui-segment>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'attached', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a padded class when one is set', done => {
			component.
				inView(`
					<ui-segment padded></ui-segment>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'padded', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a compact class when one is set', done => {
			component.
				inView(`
					<ui-segment compact></ui-segment>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'compact', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a secondary emphasis class when one is set', done => {
			component.
				inView(`
					<ui-segment secondary></ui-segment>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'secondary', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a tertiary emphasis class when one is set', done => {
			component.
				inView(`
					<ui-segment tertiary></ui-segment>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'tertiary', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a circular class when one is set', done => {
			component.
				inView(`
					<ui-segment circular></ui-segment>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'circular', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a clearing class when one is set', done => {
			component.
				inView(`
					<ui-segment clearing></ui-segment>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'clearing', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a floated class when one is set', done => {
			component.
				inView(`
					<ui-segment floated="right"></ui-segment>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'right', 'floated', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an alignment class when one is set', done => {
			component.
				inView(`
					<ui-segment aligned="left"></ui-segment>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'left', 'aligned', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a color class when one is set', done => {
			component.
				inView(`
					<ui-segment color="teal"></ui-segment>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'teal', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


	describe( 'as a custom attribute', () => {

		it( 'adds a loading class when one is set', done => {
			component.
				inView(`
					<div ui-segment="loading: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'loading', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a basic class when one is set', done => {
			component.
				inView(`
					<div ui-segment="basic: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'basic', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a disabled class when one is set', done => {
			component.
				inView(`
					<div ui-segment="disabled: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'disabled', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an inverted class when one is set', done => {
			component.
				inView(`
					<div ui-segment="inverted: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'inverted', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a attached class when attach is set', done => {
			component.
				inView(`
					<div ui-segment="attach: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'attached', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a attached class and a side when attach is set to a side', done => {
			component.
				inView(`
					<div ui-segment="attach: top"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'top', 'attached', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a padded class when one is set', done => {
			component.
				inView(`
					<div ui-segment="padded: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'padded', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a compact class when one is set', done => {
			component.
				inView(`
					<div ui-segment="compact: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'compact', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a secondary emphasis class when one is set', done => {
			component.
				inView(`
					<div ui-segment="secondary: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'secondary', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a tertiary emphasis class when one is set', done => {
			component.
				inView(`
					<div ui-segment="tertiary: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'tertiary', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a circular class when one is set', done => {
			component.
				inView(`
					<div ui-segment="circular: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'circular', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a clearing class when one is set', done => {
			component.
				inView(`
					<div ui-segment="clearing: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'clearing', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a floated class when one is set', done => {
			component.
				inView(`
					<div ui-segment="floated: right"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).
						toHaveCssClasses( 'ui', 'right', 'floated', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a alignment class when one is set', done => {
			component.
				inView(`
					<div ui-segment="aligned: center"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).
						toHaveCssClasses( 'ui', 'center', 'aligned', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a color class when one is set', done => {
			component.
				inView(`
					<div ui-segment="color: yellow"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).
						toHaveCssClasses( 'ui', 'yellow', 'segment' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


});
