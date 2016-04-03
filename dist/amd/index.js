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

	var VERSION = exports.VERSION = '0.0.1.dev';

	// Aurelia plugin hook
	function configure(config) {
		config.globalResources('./collections/ui-breadcrumb', './collections/ui-form', './collections/ui-grid', './collections/ui-menu', './collections/ui-message', './collections/ui-table', './elements/ui-button', './elements/ui-container', './elements/ui-divider', './elements/ui-flag', './elements/ui-header', './elements/ui-icon', './elements/ui-image', './elements/ui-input', './elements/ui-label', './elements/ui-list', './elements/ui-loader', './elements/ui-rail', './elements/ui-reveal', './elements/ui-segment', './elements/ui-step', './modules/ui-dropdown', './modules/ui-modal', './modules/ui-search', './modules/ui-sidebar', './views/ui-card');
	}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7U0FlZ0I7Ozs7Ozs7OztBQUhULEtBQUksNEJBQVUsV0FBVjs7O0FBR0osVUFBUyxTQUFULENBQW1CLE1BQW5CLEVBQTJCO0FBQ2pDLFNBQU8sZUFBUCxDQUNDLDZCQURELEVBRUMsdUJBRkQsRUFHQyx1QkFIRCxFQUlDLHVCQUpELEVBS0MsMEJBTEQsRUFNQyx3QkFORCxFQU9DLHNCQVBELEVBUUMseUJBUkQsRUFTQyx1QkFURCxFQVVDLG9CQVZELEVBV0Msc0JBWEQsRUFZQyxvQkFaRCxFQWFDLHFCQWJELEVBY0MscUJBZEQsRUFlQyxxQkFmRCxFQWdCQyxvQkFoQkQsRUFpQkMsc0JBakJELEVBa0JDLG9CQWxCRCxFQW1CQyxzQkFuQkQsRUFvQkMsdUJBcEJELEVBcUJDLG9CQXJCRCxFQXNCQyx1QkF0QkQsRUF1QkMsb0JBdkJELEVBd0JDLHFCQXhCRCxFQXlCQyxzQkF6QkQsRUEwQkMsaUJBMUJELEVBRGlDO0VBQTNCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBdXJlbGlhLVNlbWFudGljLVVJIC0tIEF1cmVsaWEgY29tcG9uZW50cyBmb3IgU2VtYW50aWMtVUlcbiAqICRJZCRcbiAqXG4gKiBBdXRob3JzXG4gKiAtIE1pY2hhZWwgR3JhbmdlciA8Z2VkQEZhZXJpZU1VRC5vcmc+XG4gKi9cblxuaW1wb3J0ICdzZW1hbnRpYy11aSc7XG5pbXBvcnQgJ3NlbWFudGljLXVpL3NlbWFudGljLmNzcyEnO1xuXG5cbmV4cG9ydCB2YXIgVkVSU0lPTiA9ICcwLjAuMS5kZXYnO1xuXG4vLyBBdXJlbGlhIHBsdWdpbiBob29rXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZykge1xuXHRjb25maWcuZ2xvYmFsUmVzb3VyY2VzKFxuXHRcdCcuL2NvbGxlY3Rpb25zL3VpLWJyZWFkY3J1bWInLFxuXHRcdCcuL2NvbGxlY3Rpb25zL3VpLWZvcm0nLFxuXHRcdCcuL2NvbGxlY3Rpb25zL3VpLWdyaWQnLFxuXHRcdCcuL2NvbGxlY3Rpb25zL3VpLW1lbnUnLFxuXHRcdCcuL2NvbGxlY3Rpb25zL3VpLW1lc3NhZ2UnLFxuXHRcdCcuL2NvbGxlY3Rpb25zL3VpLXRhYmxlJyxcblx0XHQnLi9lbGVtZW50cy91aS1idXR0b24nLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWNvbnRhaW5lcicsXG5cdFx0Jy4vZWxlbWVudHMvdWktZGl2aWRlcicsXG5cdFx0Jy4vZWxlbWVudHMvdWktZmxhZycsXG5cdFx0Jy4vZWxlbWVudHMvdWktaGVhZGVyJyxcblx0XHQnLi9lbGVtZW50cy91aS1pY29uJyxcblx0XHQnLi9lbGVtZW50cy91aS1pbWFnZScsXG5cdFx0Jy4vZWxlbWVudHMvdWktaW5wdXQnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWxhYmVsJyxcblx0XHQnLi9lbGVtZW50cy91aS1saXN0Jyxcblx0XHQnLi9lbGVtZW50cy91aS1sb2FkZXInLFxuXHRcdCcuL2VsZW1lbnRzL3VpLXJhaWwnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLXJldmVhbCcsXG5cdFx0Jy4vZWxlbWVudHMvdWktc2VnbWVudCcsXG5cdFx0Jy4vZWxlbWVudHMvdWktc3RlcCcsXG5cdFx0Jy4vbW9kdWxlcy91aS1kcm9wZG93bicsXG5cdFx0Jy4vbW9kdWxlcy91aS1tb2RhbCcsXG5cdFx0Jy4vbW9kdWxlcy91aS1zZWFyY2gnLFxuXHRcdCcuL21vZHVsZXMvdWktc2lkZWJhcicsXG5cdFx0Jy4vdmlld3MvdWktY2FyZCdcblx0KTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
