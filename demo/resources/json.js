/**
 * json ValueConverter 
 */

import {valueConverter} from 'aurelia-framework';

@valueConverter('json')
export class JSONValueConverter {
	toView( object, indent=2 ) {
		return JSON.stringify( object, null, indent );
	}
}

