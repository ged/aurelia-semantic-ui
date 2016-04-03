define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Search - http://semantic-ui.com/modules/search.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UISearchAttribute = undefined;

	var _dec, _class;

	let UISearchAttribute = exports.UISearchAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }search`), _dec(_class = class UISearchAttribute extends _uiAttribute.UIAttribute {

		attached() {
			this.logger.debug("Activating search on ", this.element);
			$(this.element).search();
		}

	}) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktc2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7S0FXYSx3REFEWix1Q0FBaUIsQ0FBQyxHQUFFLHFCQUFVLGVBQVYsRUFBMEIsTUFBN0IsQ0FBakIsaUJBQ00sTUFBTSxpQkFBTixrQ0FBNEM7O0FBRWxELGFBQVc7QUFDVixRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLHVCQUFuQixFQUE0QyxLQUFLLE9BQUwsQ0FBNUMsQ0FEVTtBQUVWLEtBQUcsS0FBSyxPQUFMLENBQUgsQ0FBa0IsTUFBbEIsR0FGVTtHQUFYOztFQUZNIiwiZmlsZSI6Im1vZHVsZXMvdWktc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBTZWFyY2ggLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvc2VhcmNoLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBjaGlsZHJlbiwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1zZWFyY2hgIClcbmV4cG9ydCBjbGFzcyBVSVNlYXJjaEF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRhdHRhY2hlZCgpIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJBY3RpdmF0aW5nIHNlYXJjaCBvbiBcIiwgdGhpcy5lbGVtZW50ICk7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkuc2VhcmNoKCk7XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
