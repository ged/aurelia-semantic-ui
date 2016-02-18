/**
 * Capitalization value converter
 */

export class CapitalizeValueConverter {
	toView( string ) {
		if ( !string ) { return string }
		return string.substr( 0, 1 ).toUpperCase() +
		       string.substr( 1 );
	}
}

