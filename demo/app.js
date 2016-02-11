/**
 * Cozy Admin App
 */

import {inject, bindable, LogManager} from 'aurelia-framework';
import {Redirect} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject( EventAggregator )
export class DemoApp {

	@bindable router;

	constructor( eventAggregator ) {
		this.logger = LogManager.getLogger( 'cozyadmin' );
		this.eventAggregator = eventAggregator;
	}


	configureRouter( config, router ) {
		this.router = router;
		this.logger.debug( "Router is: ", router );

		config.title = 'Aurelia Semantic UI Demo App';
		config.map([
			{
				route: 'overview',
				name: 'overview',
				moduleId: 'demo/overview',
				nav: true,
				title: 'Overview'
			},

			{
				route: 'elements',
				name: 'elements',
				moduleId: 'demo/modules/elements',
				nav: true,
				title: 'Elements'
			},

			{
				route: 'collections',
				name: 'collections',
				moduleId: 'demo/modules/collections',
				nav: true,
				title: 'Collections'
			},

			{
				route: 'views',
				name: 'views',
				moduleId: 'demo/modules/views',
				nav: true,
				title: 'Views'
			},

			{
				route: 'modules',
				name: 'modules',
				moduleId: 'demo/modules/modules',
				nav: true,
				title: 'Modules'
			},

			/* --- */

			{
				route: '',
				redirect: 'overview'
			}
		]);
	}

	attached() {
		// :FIXME: These should eventually be moved into custom elements
		$('.main.menu').
			each( elem => this.logger.debug("Setting visibility of .main.menu ", elem) ).
			visibility({ type: 'fixed' });
		$('.overlay').
			each( elem => this.logger.debug("Setting visibility of .overlay", elem) ).
			visibility({ type: 'fixed', offset: 80 });

		// lazy load images
		$('.image').visibility({
			type: 'image',
			transition: 'vertical flip in',
			duration: 500
		});
	}

}
