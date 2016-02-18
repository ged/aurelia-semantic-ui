/**
 * Relative Time ValueConverter for the Admin App
 *
 * Handles any value that moment() accepts.
 *
 */

import Moment from 'moment';

export class RelativeTimeValueConverter {
	toView( value, withoutPrefix=false ) {
		let moment = Moment( value );
		if ( moment.isAfter() ) {
			return moment.toNow( withoutPrefix );
		} else {
			return moment.fromNow( withoutPrefix );
		}
	}
}

