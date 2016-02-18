/**
 * filter ValueConverter 
 */

import {valueConverter} from 'aurelia-framework';

@valueConverter('filter')
export class FilterValueConverter {
	toView( collection, config ) {
		return collection.filter( item => {
			config.keys().every( key => {
				console.debug( "Testing for %s: %o == %o", key, item[key], config[key] );
				item[ key ] == config[key];
			});
		});
	}
}

