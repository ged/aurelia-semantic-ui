/**
 * orderBy ValueConverter 
 */

import {valueConverter} from 'aurelia-framework';

@valueConverter('orderBy')
export class OrderByValueConverter {
	toView( collection, criteria, direction ) {
		let directionFactor = 1;
		if ( direction === 'descending' ) { directionFactor = -1; }

		let sortFn = function sortFn( a, b ) {
			if ( a[criteria] < b[criteria] ) {
				return -1 * directionFactor;
			} else if ( a[criteria] > b[criteria] ) {
				return 1 * directionFactor;
			} else {
				return 0;
			}
		};

		return collection.sort( sortFn );
	}
}

