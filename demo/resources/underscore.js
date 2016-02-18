/**
 * Underscoring value converter
 */

export class UnderscoreValueConverter {
	toView( string ) {
		return string.replace( /\s+/, '_' );
	}
}

