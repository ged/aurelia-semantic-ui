/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {customMatchers} from '../helpers';


describe('ui-list', () => {
	let component, logger;

	beforeAll(() => {
		jasmine.addMatchers( customMatchers );
		logger = LogManager.getLogger( 'ui-list-spec' );
	});

	beforeEach(() => {
		component = StageComponent.withResources('src/elements/ui-list');
	});

	afterEach(() => {
		try {
			component.dispose();
		} catch(e) {
			logger.debug( "Error disposing the StageComponent" );
		}
	});


	describe( 'as a custom element', () => {

		it( 'adds a "bulleted" class when the attribute is present', done => {
			component.
				inView(`
					<ui-list bulleted>
					  <div class="item">Apples</div>
					  <div class="item">Pomegranates</div>
					</ui-list>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let list = component.element.firstElementChild;
					expect( list ).toHaveCssClasses( 'ui', 'bulleted', 'list' );
					expect( list.innerText ).toContain( 'Pomegranates' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a "ordered" class when the attribute is present', done => {
			component.
				inView(`
					<ui-list ordered>
					  <div class="item">Cactus</div>
					  <div class="item">Yucca</div>
					</ui-list>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let list = component.element.firstElementChild;
					expect( list ).toHaveCssClasses( 'ui', 'ordered', 'list' );
					expect( list.innerText ).toContain( 'Cactus' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a "link" class when the attribute is present', done => {
			component.
				inView(`
					<ui-list link>
					  <div class="item">Balloon</div>
					  <div class="item">Kite</div>
					</ui-list>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let list = component.element.firstElementChild;
					expect( list ).toHaveCssClasses( 'ui', 'link', 'list' );
					expect( list.innerText ).toContain( 'Balloon' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a "horizontal" class when the attribute is present', done => {
			component.
				inView(`
					<ui-list horizontal>
						<div class="item">Bat</div>
						<div class="item">Trestle</div>
					</ui-list>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let list = component.element.firstElementChild;
					expect( list ).toHaveCssClasses( 'ui', 'horizontal', 'list' );
					expect( list.innerText ).toContain( 'Bat' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a "inverted" class when the attribute is present', done => {
			component.
				inView(`
					<ui-list inverted>
						<div class="item">Hugo</div>
						<div class="item">Trainer</div>
					</ui-list>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let list = component.element.firstElementChild;
					expect( list ).toHaveCssClasses( 'ui', 'inverted', 'list' );
					expect( list.innerText ).toContain( 'Trainer' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a "selection" class when the attribute is present', done => {
			component.
				inView(`
					<ui-list selection>
						<div class="item">Darkness</div>
						<div class="item">Travail</div>
					</ui-list>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let list = component.element.firstElementChild;
					expect( list ).toHaveCssClasses( 'ui', 'selection', 'list' );
					expect( list.innerText ).toContain( 'Travail' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a "animated" class when the attribute is present', done => {
			component.
				inView(`
					<ui-list animated>
						<div class="item">vanity</div>
						<div class="item">avarice</div>
					</ui-list>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let list = component.element.firstElementChild;
					expect( list ).toHaveCssClasses( 'ui', 'animated', 'list' );
					expect( list.innerText ).toContain( 'vanity' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a "relaxed" class when the attribute is present', done => {
			component.
				inView(`
					<ui-list relaxed>
						<div class="item">Darling</div>
						<div class="item">Punt</div>
					</ui-list>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let list = component.element.firstElementChild;
					expect( list ).toHaveCssClasses( 'ui', 'relaxed', 'list' );
					expect( list.innerText ).toContain( 'Punt' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a "divided" class when the attribute is present', done => {
			component.
				inView(`
					<ui-list divided>
						<div class="item">Variety</div>
						<div class="item">Yarrow</div>
					</ui-list>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let list = component.element.firstElementChild;
					expect( list ).toHaveCssClasses( 'ui', 'divided', 'list' );
					expect( list.innerText ).toContain( 'Variety' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a "celled" class when the attribute is present', done => {
			component.
				inView(`
					<ui-list celled>
						<div class="item">Vanguard</div>
						<div class="item">Hollowbranch</div>
					</ui-list>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let list = component.element.firstElementChild;
					expect( list ).toHaveCssClasses( 'ui', 'celled', 'list' );
					expect( list.innerText ).toContain( 'Vanguard' );
				}).
				then( done ).
				catch( done.fail );
		});


	});


	describe( 'as a custom attribute', () => {

		it( 'adds semantic classes when bound', done => {
			component.
				inView(`
					<ul ui-list>
						<li>One</li>
						<li>Two</li>
					</ul>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'list' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a "bulleted" class when it is true', done => {
			component.
				inView(`
					<ul ui-list="bulleted: true">
					  <li>Trucks</li>
					  <li>Trains</li>
					</ul>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'bulleted', 'list' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a "ordered" class when it is true', done => {
			component.
				inView(`
					<ul ui-list="ordered: true">
					  <li>Ducks</li>
					  <li>Brains</li>
					</ul>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'ordered', 'list' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a "link" class when it is true', done => {
			component.
				inView(`
					<ul ui-list="link: true">
					  <li>Pucks</li>
					  <li>Plantains</li>
					</ul>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'link', 'list' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


});
