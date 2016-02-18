/**
 * HTML sanitizer ValueConverter. Basically just ripped off from the
 * Aurelia docs.
 */

import DOMPurify from 'dompurify';

export class SanitizeHtmlValueConverter {
	toView( untrustedHtml ) {
		return DOMPurify.sanitize( untrustedHtml );
	}
}

