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

	var VERSION = exports.VERSION = '0.0.1-alpha.4';

	// Aurelia plugin hook
	function configure(config) {
		config.globalResources('./collections/ui-breadcrumb', './collections/ui-form', './collections/ui-grid', './collections/ui-menu', './collections/ui-message', './collections/ui-table', './elements/ui-button', './elements/ui-container', './elements/ui-divider', './elements/ui-flag', './elements/ui-header', './elements/ui-icon', './elements/ui-image', './elements/ui-input', './elements/ui-label', './elements/ui-list', './elements/ui-loader', './elements/ui-rail', './elements/ui-reveal', './elements/ui-segment', './elements/ui-step', './modules/ui-accordion', './modules/ui-dropdown', './modules/ui-modal', './modules/ui-popup', './modules/ui-search', './modules/ui-sidebar', './views/ui-card', './views/ui-statistic');
	}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7U0FlZ0I7Ozs7Ozs7OztBQUhULEtBQUksNEJBQVUsZUFBVjs7O0FBR0osVUFBUyxTQUFULENBQW1CLE1BQW5CLEVBQTJCO0FBQ2pDLFNBQU8sZUFBUCxDQUNDLDZCQURELEVBRUMsdUJBRkQsRUFHQyx1QkFIRCxFQUlDLHVCQUpELEVBS0MsMEJBTEQsRUFNQyx3QkFORCxFQU9DLHNCQVBELEVBUUMseUJBUkQsRUFTQyx1QkFURCxFQVVDLG9CQVZELEVBV0Msc0JBWEQsRUFZQyxvQkFaRCxFQWFDLHFCQWJELEVBY0MscUJBZEQsRUFlQyxxQkFmRCxFQWdCQyxvQkFoQkQsRUFpQkMsc0JBakJELEVBa0JDLG9CQWxCRCxFQW1CQyxzQkFuQkQsRUFvQkMsdUJBcEJELEVBcUJDLG9CQXJCRCxFQXNCQyx3QkF0QkQsRUF1QkMsdUJBdkJELEVBd0JDLG9CQXhCRCxFQXlCQyxvQkF6QkQsRUEwQkMscUJBMUJELEVBMkJDLHNCQTNCRCxFQTRCQyxpQkE1QkQsRUE2QkMsc0JBN0JELEVBRGlDO0VBQTNCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBdXJlbGlhLVNlbWFudGljLVVJIC0tIEF1cmVsaWEgY29tcG9uZW50cyBmb3IgU2VtYW50aWMtVUlcbiAqICRJZCRcbiAqXG4gKiBBdXRob3JzXG4gKiAtIE1pY2hhZWwgR3JhbmdlciA8Z2VkQEZhZXJpZU1VRC5vcmc+XG4gKi9cblxuaW1wb3J0ICdzZW1hbnRpYy11aSc7XG5pbXBvcnQgJ3NlbWFudGljLXVpL3NlbWFudGljLmNzcyEnO1xuXG5cbmV4cG9ydCB2YXIgVkVSU0lPTiA9ICcwLjAuMS1hbHBoYS40JztcblxuLy8gQXVyZWxpYSBwbHVnaW4gaG9va1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWcpIHtcblx0Y29uZmlnLmdsb2JhbFJlc291cmNlcyhcblx0XHQnLi9jb2xsZWN0aW9ucy91aS1icmVhZGNydW1iJyxcblx0XHQnLi9jb2xsZWN0aW9ucy91aS1mb3JtJyxcblx0XHQnLi9jb2xsZWN0aW9ucy91aS1ncmlkJyxcblx0XHQnLi9jb2xsZWN0aW9ucy91aS1tZW51Jyxcblx0XHQnLi9jb2xsZWN0aW9ucy91aS1tZXNzYWdlJyxcblx0XHQnLi9jb2xsZWN0aW9ucy91aS10YWJsZScsXG5cdFx0Jy4vZWxlbWVudHMvdWktYnV0dG9uJyxcblx0XHQnLi9lbGVtZW50cy91aS1jb250YWluZXInLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWRpdmlkZXInLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWZsYWcnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWhlYWRlcicsXG5cdFx0Jy4vZWxlbWVudHMvdWktaWNvbicsXG5cdFx0Jy4vZWxlbWVudHMvdWktaW1hZ2UnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWlucHV0Jyxcblx0XHQnLi9lbGVtZW50cy91aS1sYWJlbCcsXG5cdFx0Jy4vZWxlbWVudHMvdWktbGlzdCcsXG5cdFx0Jy4vZWxlbWVudHMvdWktbG9hZGVyJyxcblx0XHQnLi9lbGVtZW50cy91aS1yYWlsJyxcblx0XHQnLi9lbGVtZW50cy91aS1yZXZlYWwnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLXNlZ21lbnQnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLXN0ZXAnLFxuXHRcdCcuL21vZHVsZXMvdWktYWNjb3JkaW9uJyxcblx0XHQnLi9tb2R1bGVzL3VpLWRyb3Bkb3duJyxcblx0XHQnLi9tb2R1bGVzL3VpLW1vZGFsJyxcblx0XHQnLi9tb2R1bGVzL3VpLXBvcHVwJyxcblx0XHQnLi9tb2R1bGVzL3VpLXNlYXJjaCcsXG5cdFx0Jy4vbW9kdWxlcy91aS1zaWRlYmFyJyxcblx0XHQnLi92aWV3cy91aS1jYXJkJyxcblx0XHQnLi92aWV3cy91aS1zdGF0aXN0aWMnXG5cdCk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
