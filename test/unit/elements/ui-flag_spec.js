/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {customMatchers} from '../helpers';


describe('ui-flag', () => {
	let component, logger;

	beforeAll(() => {
		jasmine.addMatchers( customMatchers );
		logger = LogManager.getLogger( 'ui-flag-spec' );
	});

	beforeEach(() => {
		component = StageComponent.withResources('src/elements/ui-flag');
	});

	afterEach(() => {
		try {
			component.dispose();
		} catch(e) {
			logger.debug( "Error disposing the StageComponent" );
		}
	});


	describe( 'as a custom element', () => {

		it( 'adds the country as a class', done => {
			component.
				inView(`
					<ui-flag country="Ghana"></ui-flag>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let flag = component.element.firstElementChild;
					expect( flag ).toBeHtmlTag( 'i' );
					expect( flag ).toHaveCssClasses( 'ghana', 'flag' );
					expect( flag ).not.toHaveCssClasses( 'ui' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'can get the country from a bound value', done => {
			component.
				inView(`
					<ui-flag country.bind="address.country"></ui-flag>
				`).
				boundTo({
					address: {
						line1: '101 Independence Ave SE',
						city: 'Washington',
						state:'DC',
						postal_code: '20540',
						country: 'us'
					}
				}).
				create( bootstrap ).then( () => {
					let flag = component.element.firstElementChild;
					expect( flag ).toBeHtmlTag( 'i' );
					expect( flag ).toHaveCssClasses( 'us', 'flag' );
					expect( flag ).not.toHaveCssClasses( 'ui' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


	describe( 'as a custom attribute', () => {

		it( 'adds the country as a class', done => {
			component.
				inView(`
					<i ui-flag="country: ae"></i>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ae', 'flag' );
					expect( component.element ).not.toHaveCssClasses( 'ui' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'can get the country from a bound value', done => {
			component.
				inView(`
					<i ui-flag="country.bind: address.country"></i>
				`).
				boundTo({
					address: {
						line1: 'Saarstraße 21',
						postal_code: '55122',
						city: 'Mainz',
						country: 'Germany'
					}
				}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'germany', 'flag' );
					expect( component.element ).not.toHaveCssClasses( 'ui' );
				}).
				then( done ).
				catch( done.fail );
		});


	});


});
