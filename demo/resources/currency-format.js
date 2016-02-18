/**
 * Currency ValueConverter for the Admin App
 *
 * Handles the `amount` struct returned by our services by formatting
 * into the appropriate text representation.
 *
 */

import numeral from 'numeral';


export class CurrencyFormatValueConverter {
	toView( value ) {
		if ( typeof value === 'object' ) {
			let symbol = value.currency_symbol || '$';
			return numeral( value.cents / 100 ).format( `(${symbol}0,0.00)` );
		} else {
			let dollars = Number.parseInt( value );
			return numeral( dollars ).format( '($0,0)' );
		}
	}
}

