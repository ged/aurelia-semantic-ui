/**
 * Date ValueConverter for the Admin App
 *
 * Handles any value that moment() accepts.
 *
 */

import Moment from 'moment';

const DEFAULT_FORMAT = "YYYY-MM-DD HH:mm a Z";


export class DateFormatValueConverter {
	toView( value, format=DEFAULT_FORMAT ) {
		let moment = Moment( value );
		return moment.format( format );
	}
}

