/* -*- javascript -*- */
"use strict";

import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {customMatchers} from '../helpers';


describe('ui-button', () => {
	let component, logger;

	beforeAll(() => {
		jasmine.addMatchers( customMatchers );
		logger = LogManager.getLogger( 'ui-button-spec');
	});

	beforeEach(() => {
		component = StageComponent.withResources('src/elements/ui-button');
	});

	afterEach(() => {
		try {
			component.dispose();
		} catch(e) {
			logger.debug( "Error disposing the StageComponent" );
		}
	});


	describe( 'as a custom element', () => {

		it( 'adds a size class when one is set', done => {
			component.
				inView(`
					<ui-button size="huge">Do All The Things!</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let button = component.element.firstElementChild;
					expect( button ).toHaveCssClasses( 'ui', 'huge', 'button' );
					expect( button.innerText ).toContain( 'Do All The Things!' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a color class when one is set', done => {
			component.
				inView(`
					<ui-button color="red">Erase History</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let button = component.element.firstElementChild;
					expect( button ).toHaveCssClasses( 'ui', 'red', 'button' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a disabled class when it is set', done => {
			component.
				inView(`
					<ui-button disabled="true">Eject!</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let button = component.element.firstElementChild;

					expect( button ).toBeDefined();
					expect( button.nodeType ).toEqual( 1 );
					expect( button ).toHaveCssClasses( 'ui', 'disabled', 'button' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'auto-generates an icon if one is set', done => {
			component.
				inView(`
					<ui-button icon="check">Yep!</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let icon = component.element.querySelector( 'i.icon' );

					expect( icon ).not.toBeNull();
					expect( icon ).toHaveCssClasses( 'check', 'icon' )
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'can be basic', done => {
			component.
				inView(`
					<ui-button basic>So Simple</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let button = component.element.firstElementChild;
					expect( button ).toHaveCssClasses( 'basic' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'can be a primary button', done => {
			component.
				inView(`
					<ui-button primary>Submit!</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let button = component.element.firstElementChild;
					expect( button ).toHaveCssClasses( 'primary' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'can be a secondary button', done => {
			component.
				inView(`
					<ui-button secondary>Cancel</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let button = component.element.firstElementChild;
					expect( button ).toHaveCssClasses( 'secondary' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'can be animated', done => {
			component.
				inView(`
					<ui-button animated>
					  <div class="visible content">Next</div>
					  <div class="hidden content">
					    <i class="right arrow icon"></i>
					  </div>
					</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let button = component.element.firstElementChild;
					expect( button ).toHaveCssClasses( 'animated' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'can be animated vertically', done => {
			component.
				inView(`
					<ui-button animated="vertical">
						<div class="hidden content">Shop</div>
						<div class="visible content">
							<i class="shop icon"></i>
						</div>
					</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let button = component.element.firstElementChild;
					expect( button ).toHaveCssClasses( 'animated', 'vertical' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'can be animated with a fade-in effect', done => {
			component.
				inView(`
					<ui-button animated="fade">
						<div class="visible content">Sign-up for a Pro account</div>
						<div class="hidden content">$12.99 a month</div>
					</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let button = component.element.firstElementChild;
					expect( button ).toHaveCssClasses( 'animated', 'fade' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'can appear alongside a label', done => {
			component.
				inView(`
					<ui-button labeled>
						<ui-button icon="heart">Like</div>
						<a ui-label class="basic">2,048</a>
					</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let button = component.element.firstElementChild;
					expect( button ).toHaveCssClasses( 'labeled' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'can appear to the left of a label', done => {
			component.
				inView(`
					<ui-button labeled="left">
						<ui-button icon="heart">Like</div>
						<a ui-label class="basic">2,048</a>
					</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let button = component.element.firstElementChild;
					expect( button ).toHaveCssClasses( 'left', 'labeled' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'can use an icon as a label', done => {
			component.
				inView(`
					<ui-button labeled icon="pause">Pause</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let button = component.element.firstElementChild;
					expect( button ).toHaveCssClasses( 'labeled', 'icon' );
					expect( button ).not.toHaveCssClasses( 'right' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'can use an icon as a label to its right', done => {
			component.
				inView(`
					<ui-button labeled="right" icon="pause">Pause</ui-button>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let button = component.element.firstElementChild;
					expect( button ).toHaveCssClasses( 'right', 'labeled', 'icon' );
				}).
				then( done ).
				catch( done.fail );
		});

	});


	describe( 'as a custom attribute', () => {

		it( 'adds semantic classes when bound', done => {
			component.
				inView(`
					<div ui-button>The Button</div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'button' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a size class when one is set', done => {
			component.
				inView(`
					<div ui-button="size: huge">The Button</div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'huge', 'button' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a color class when one is set', done => {
			component.
				inView(`
					<div ui-button="color: red">Erase History</div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'red', 'button' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'adds a disabled class when it is set', done => {
			component.
				inView(`
					<div ui-button="disabled: true">Eject!</div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					expect( component.element ).toHaveCssClasses( 'ui', 'disabled', 'button' );
				}).
				then( done ).
				catch( done.fail );
		});


		it( 'auto-generates an icon if one is set', done => {
			component.
				inView(`
					<div ui-button="icon: check">Yep!</div>
				`).
				boundTo({}).
				create( bootstrap ).then( () => {
					let icon = component.element.querySelector( 'i.icon' );
					expect( icon ).toBeDefined();
					expect( icon ).toHaveCssClasses( 'ui', 'check', 'icon' )
				}).
				then( done ).
				catch( done.fail );
		});

	});


});
