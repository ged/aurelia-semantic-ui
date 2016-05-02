define(['exports', 'semantic-ui', 'semantic-ui/semantic.css!'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.VERSION = undefined;
	exports.configure = configure;
	/**
  * Aurelia-Semantic-UI -- Aurelia components for Semantic-UI
  * $Id$
  *
  * Authors
  * - Michael Granger <ged@FaerieMUD.org>
  */

	var VERSION = exports.VERSION = '0.0.1.alpha.3';

	// Aurelia plugin hook
	function configure(config) {
		config.globalResources('./collections/ui-breadcrumb', './collections/ui-form', './collections/ui-grid', './collections/ui-menu', './collections/ui-message', './collections/ui-table', './elements/ui-button', './elements/ui-container', './elements/ui-divider', './elements/ui-flag', './elements/ui-header', './elements/ui-icon', './elements/ui-image', './elements/ui-input', './elements/ui-label', './elements/ui-list', './elements/ui-loader', './elements/ui-rail', './elements/ui-reveal', './elements/ui-segment', './elements/ui-step', './modules/ui-accordion', './modules/ui-dropdown', './modules/ui-modal', './modules/ui-search', './modules/ui-sidebar', './views/ui-card', './views/ui-statistic');
	}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7U0FlZ0I7Ozs7Ozs7OztBQUhULEtBQUksNEJBQVUsZUFBVjs7O0FBR0osVUFBUyxTQUFULENBQW1CLE1BQW5CLEVBQTJCO0FBQ2pDLFNBQU8sZUFBUCxDQUNDLDZCQURELEVBRUMsdUJBRkQsRUFHQyx1QkFIRCxFQUlDLHVCQUpELEVBS0MsMEJBTEQsRUFNQyx3QkFORCxFQU9DLHNCQVBELEVBUUMseUJBUkQsRUFTQyx1QkFURCxFQVVDLG9CQVZELEVBV0Msc0JBWEQsRUFZQyxvQkFaRCxFQWFDLHFCQWJELEVBY0MscUJBZEQsRUFlQyxxQkFmRCxFQWdCQyxvQkFoQkQsRUFpQkMsc0JBakJELEVBa0JDLG9CQWxCRCxFQW1CQyxzQkFuQkQsRUFvQkMsdUJBcEJELEVBcUJDLG9CQXJCRCxFQXNCQyx3QkF0QkQsRUF1QkMsdUJBdkJELEVBd0JDLG9CQXhCRCxFQXlCQyxxQkF6QkQsRUEwQkMsc0JBMUJELEVBMkJDLGlCQTNCRCxFQTRCQyxzQkE1QkQsRUFEaUM7RUFBM0IiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEF1cmVsaWEtU2VtYW50aWMtVUkgLS0gQXVyZWxpYSBjb21wb25lbnRzIGZvciBTZW1hbnRpYy1VSVxuICogJElkJFxuICpcbiAqIEF1dGhvcnNcbiAqIC0gTWljaGFlbCBHcmFuZ2VyIDxnZWRARmFlcmllTVVELm9yZz5cbiAqL1xuXG5pbXBvcnQgJ3NlbWFudGljLXVpJztcbmltcG9ydCAnc2VtYW50aWMtdWkvc2VtYW50aWMuY3NzISc7XG5cblxuZXhwb3J0IHZhciBWRVJTSU9OID0gJzAuMC4xLmFscGhhLjMnO1xuXG4vLyBBdXJlbGlhIHBsdWdpbiBob29rXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZykge1xuXHRjb25maWcuZ2xvYmFsUmVzb3VyY2VzKFxuXHRcdCcuL2NvbGxlY3Rpb25zL3VpLWJyZWFkY3J1bWInLFxuXHRcdCcuL2NvbGxlY3Rpb25zL3VpLWZvcm0nLFxuXHRcdCcuL2NvbGxlY3Rpb25zL3VpLWdyaWQnLFxuXHRcdCcuL2NvbGxlY3Rpb25zL3VpLW1lbnUnLFxuXHRcdCcuL2NvbGxlY3Rpb25zL3VpLW1lc3NhZ2UnLFxuXHRcdCcuL2NvbGxlY3Rpb25zL3VpLXRhYmxlJyxcblx0XHQnLi9lbGVtZW50cy91aS1idXR0b24nLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWNvbnRhaW5lcicsXG5cdFx0Jy4vZWxlbWVudHMvdWktZGl2aWRlcicsXG5cdFx0Jy4vZWxlbWVudHMvdWktZmxhZycsXG5cdFx0Jy4vZWxlbWVudHMvdWktaGVhZGVyJyxcblx0XHQnLi9lbGVtZW50cy91aS1pY29uJyxcblx0XHQnLi9lbGVtZW50cy91aS1pbWFnZScsXG5cdFx0Jy4vZWxlbWVudHMvdWktaW5wdXQnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWxhYmVsJyxcblx0XHQnLi9lbGVtZW50cy91aS1saXN0Jyxcblx0XHQnLi9lbGVtZW50cy91aS1sb2FkZXInLFxuXHRcdCcuL2VsZW1lbnRzL3VpLXJhaWwnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLXJldmVhbCcsXG5cdFx0Jy4vZWxlbWVudHMvdWktc2VnbWVudCcsXG5cdFx0Jy4vZWxlbWVudHMvdWktc3RlcCcsXG5cdFx0Jy4vbW9kdWxlcy91aS1hY2NvcmRpb24nLFxuXHRcdCcuL21vZHVsZXMvdWktZHJvcGRvd24nLFxuXHRcdCcuL21vZHVsZXMvdWktbW9kYWwnLFxuXHRcdCcuL21vZHVsZXMvdWktc2VhcmNoJyxcblx0XHQnLi9tb2R1bGVzL3VpLXNpZGViYXInLFxuXHRcdCcuL3ZpZXdzL3VpLWNhcmQnLFxuXHRcdCcuL3ZpZXdzL3VpLXN0YXRpc3RpYydcblx0KTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
