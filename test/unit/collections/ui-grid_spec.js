/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {customMatchers, setupConsoleLogging} from '../helpers';


describe('ui-grid', () => {
	let component, logger;

	beforeAll(() => {
		// setupConsoleLogging();
		jasmine.addMatchers( customMatchers );
		logger = LogManager.getLogger( 'ui-grid-spec' );
	});

	beforeEach(() => {
		component = StageComponent.withResources([
			'src/elements/ui-container',
			'src/collections/ui-grid'
		]);
	});

	afterEach(() => {
		try {
			component.dispose();
		} catch(e) {
			logger.debug( "Error disposing the StageComponent" );
		}
	});


	describe( 'as a custom element', () => {

		it( 'adds a `divided` class when it is set', done => {
			component.
				inView(`
					<ui-grid divided></ui-grid>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let grid = component.element.firstElementChild;
					expect( grid ).toHaveCssClasses( 'ui', 'divided', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds `divided` and `vertically` classes when `divided` is set to `vertically`', done => {
			component.
				inView(`
					<ui-grid divided="vertically"></ui-grid>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let grid = component.element.firstElementChild;
					expect( grid ).toHaveCssClasses( 'ui', 'vertically', 'divided', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a `celled` class when it is set', done => {
			component.
				inView(`
					<ui-grid celled></ui-grid>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let grid = component.element.firstElementChild;
					expect( grid ).toHaveCssClasses( 'ui', 'celled', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds `celled` and `internally` classes when `celled` is set to `internally`', done => {
			component.
				inView(`
					<ui-grid celled="internally"></ui-grid>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let grid = component.element.firstElementChild;
					expect( grid ).toHaveCssClasses( 'ui', 'internally', 'celled', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a `doubling` class when it is set', done => {
			component.
				inView(`
					<ui-grid doubling></ui-grid>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let grid = component.element.firstElementChild;
					expect( grid ).toHaveCssClasses( 'ui', 'doubling', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a `stackable` class when it is set', done => {
			component.
				inView(`
					<ui-grid stackable></ui-grid>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let grid = component.element.firstElementChild;
					expect( grid ).toHaveCssClasses( 'ui', 'stackable', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a `equal-width` class when it is set', done => {
			component.
				inView(`
					<ui-grid equal-width></ui-grid>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let grid = component.element.firstElementChild;
					expect( grid ).toHaveCssClasses( 'ui', 'equal-width', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds `tablet` and `reversed` classes when `reversed` is set to `tablet`', done => {
			component.
				inView(`
					<ui-grid reversed="tablet"></ui-grid>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let grid = component.element.firstElementChild;
					expect( grid ).toHaveCssClasses( 'ui', 'tablet', 'reversed', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds `eight` and `column` classes when `columns` is set to `8`', done => {
			component.
				inView(`
					<ui-grid columns="8"></ui-grid>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let grid = component.element.firstElementChild;
					expect( grid ).toHaveCssClasses( 'ui', 'eight', 'column', 'grid' );

					let cssClasses = Array.from( grid.classList );
					expect( cssClasses.indexOf('eight') ).toEqual( cssClasses.indexOf('column') - 1 );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds `six` and `column` classes when `columns` is set to `six`', done => {
			component.
				inView(`
					<ui-grid columns="six"></ui-grid>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let grid = component.element.firstElementChild;
					expect( grid ).toHaveCssClasses( 'ui', 'six', 'column', 'grid' );

					let cssClasses = Array.from( grid.classList );
					expect( cssClasses.indexOf('six') ).toEqual( cssClasses.indexOf('column') - 1 );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'maintains the order of the column count and `column` class when the binding changes', done => {
			component.
				inView(`
					<ui-grid columns.bind="colcount"></ui-grid>
				`).
				boundTo({ colcount: 8 }).
				create( bootstrap ).then( () => {
					let grid = component.element.firstElementChild;
					let cssClasses = Array.from( grid.classList );

					expect( grid ).toHaveCssClasses( 'ui', 'eight', 'column', 'grid' );
					expect( cssClasses.indexOf('eight') ).toEqual( cssClasses.indexOf('column') - 1 );

					component.viewModel.columnsChanged( 6, 8 );
					cssClasses = Array.from( grid.classList );

					expect( grid ).toHaveCssClasses( 'ui', 'six', 'column', 'grid' );
					expect( cssClasses.indexOf('six') ).toEqual( cssClasses.indexOf('column') - 1 );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an alignment class when one is set', done => {
			component.
				inView(`
					<ui-grid aligned="center"></ui-grid>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let segment = component.element.firstElementChild;
					expect( segment ).toHaveCssClasses( 'ui', 'center', 'aligned', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


	describe( 'as a custom attribute', () => {


		it( "applies to the inner element if used on another semantic UI element", done => {
			component.
				inView(`
					<ui-container text ui-grid="divided: true">Stuff!</ui-container>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let element = component.element.firstElementChild;

					expect( element ).
						toHaveCssClasses( 'ui', 'divided', 'grid', 'container' );
				}).
				then( done ).
				catch( done.fail );
		} )

		it( 'adds a `divided` class when it is set', done => {
			component.
				inView(`
					<div ui-grid="divided: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'divided', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds `divided` and `vertically` classes when `divided` is set to `vertically`', done => {
			component.
				inView(`
					<div ui-grid="divided: vertically"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'vertically', 'divided', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a `celled` class when it is set', done => {
			component.
				inView(`
					<div ui-grid="celled: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'celled', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds `celled` and `internally` classes when `celled` is set to `internally`', done => {
			component.
				inView(`
					<div ui-grid="celled: internally"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'internally', 'celled', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a `doubling` class when it is set', done => {
			component.
				inView(`
					<div ui-grid="doubling: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'doubling', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a `stackable` class when it is set', done => {
			component.
				inView(`
					<div ui-grid="stackable: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'stackable', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a `equal-width` class when it is set', done => {
			component.
				inView(`
					<div ui-grid="equal-width: true"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'equal-width', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds `mobile` and `reversed` classes when `reversed` is set to `mobile`', done => {
			component.
				inView(`
					<div ui-grid="reversed: mobile"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).
						toHaveCssClasses( 'ui', 'mobile', 'reversed', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds `four` and `column` classes when `columns` is set to `4`', done => {
			component.
				inView(`
					<div ui-grid="columns: 4"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'four', 'column', 'grid' );

					let cssClasses = Array.from( component.element.classList );
					expect( cssClasses.indexOf('four') ).toEqual( cssClasses.indexOf('column') - 1 );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds `two` and `column` classes when `columns` is set to `two`', done => {
			component.
				inView(`
					<div ui-grid="columns: 2"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'two', 'column', 'grid' );

					let cssClasses = Array.from( component.element.classList );
					expect( cssClasses.indexOf('two') ).toEqual( cssClasses.indexOf('column') - 1 );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'maintains the order of the column count and `column` class when the binding changes', done => {
			component.
				inView(`
					<div ui-grid="columns.bind: colcount"></div>
				`).
				boundTo({ colcount: 2 }).
				create( bootstrap ).then( () => {
					let grid = component.element;
					let cssClasses = Array.from( grid.classList );

					expect( grid ).toHaveCssClasses( 'ui', 'two', 'column', 'grid' );
					expect( cssClasses.indexOf('two') ).toEqual( cssClasses.indexOf('column') - 1 );

					component.viewModel.columnsChanged( 4, 2 );
					cssClasses = Array.from( grid.classList );

					expect( grid ).toHaveCssClasses( 'ui', 'four', 'column', 'grid' );
					expect( cssClasses.indexOf('four') ).toEqual( cssClasses.indexOf('column') - 1 );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds an alignment class when one is set', done => {
			component.
				inView(`
					<div ui-grid="aligned: right"></div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'right', 'aligned', 'grid' );
				}).
				then( done ).
				catch( done.fail );
		});


	});


});
