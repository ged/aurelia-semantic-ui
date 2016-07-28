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

	var VERSION = exports.VERSION = '0.0.1-alpha.6';

	// Aurelia plugin hook
	function configure(config) {
		config.globalResources('./collections/ui-breadcrumb', './collections/ui-form', './collections/ui-grid', './collections/ui-menu', './collections/ui-message', './collections/ui-table', './elements/ui-button', './elements/ui-container', './elements/ui-divider', './elements/ui-flag', './elements/ui-header', './elements/ui-icon', './elements/ui-image', './elements/ui-input', './elements/ui-label', './elements/ui-list', './elements/ui-loader', './elements/ui-rail', './elements/ui-reveal', './elements/ui-segment', './elements/ui-step', './modules/ui-accordion', './modules/ui-dimmer', './modules/ui-dropdown', './modules/ui-modal', './modules/ui-popup', './modules/ui-progress', './modules/ui-search', './modules/ui-sidebar', './views/ui-card', './views/ui-feed', './views/ui-statistic');
	}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7U0FlZ0IsUyxHQUFBLFM7QUFmaEI7Ozs7Ozs7O0FBWU8sS0FBSSw0QkFBVSxlQUFkOztBQUVQO0FBQ08sVUFBUyxTQUFULENBQW1CLE1BQW5CLEVBQTJCO0FBQ2pDLFNBQU8sZUFBUCxDQUNDLDZCQURELEVBRUMsdUJBRkQsRUFHQyx1QkFIRCxFQUlDLHVCQUpELEVBS0MsMEJBTEQsRUFNQyx3QkFORCxFQU9DLHNCQVBELEVBUUMseUJBUkQsRUFTQyx1QkFURCxFQVVDLG9CQVZELEVBV0Msc0JBWEQsRUFZQyxvQkFaRCxFQWFDLHFCQWJELEVBY0MscUJBZEQsRUFlQyxxQkFmRCxFQWdCQyxvQkFoQkQsRUFpQkMsc0JBakJELEVBa0JDLG9CQWxCRCxFQW1CQyxzQkFuQkQsRUFvQkMsdUJBcEJELEVBcUJDLG9CQXJCRCxFQXNCQyx3QkF0QkQsRUF1QkMscUJBdkJELEVBd0JDLHVCQXhCRCxFQXlCQyxvQkF6QkQsRUEwQkMsb0JBMUJELEVBMkJDLHVCQTNCRCxFQTRCQyxxQkE1QkQsRUE2QkMsc0JBN0JELEVBOEJDLGlCQTlCRCxFQStCQyxpQkEvQkQsRUFnQ0Msc0JBaENEO0FBa0NBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBdXJlbGlhLVNlbWFudGljLVVJIC0tIEF1cmVsaWEgY29tcG9uZW50cyBmb3IgU2VtYW50aWMtVUlcbiAqICRJZCRcbiAqXG4gKiBBdXRob3JzXG4gKiAtIE1pY2hhZWwgR3JhbmdlciA8Z2VkQEZhZXJpZU1VRC5vcmc+XG4gKi9cblxuaW1wb3J0ICdzZW1hbnRpYy11aSc7XG5pbXBvcnQgJ3NlbWFudGljLXVpL3NlbWFudGljLmNzcyEnO1xuXG5cbmV4cG9ydCB2YXIgVkVSU0lPTiA9ICcwLjAuMS1hbHBoYS42JztcblxuLy8gQXVyZWxpYSBwbHVnaW4gaG9va1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWcpIHtcblx0Y29uZmlnLmdsb2JhbFJlc291cmNlcyhcblx0XHQnLi9jb2xsZWN0aW9ucy91aS1icmVhZGNydW1iJyxcblx0XHQnLi9jb2xsZWN0aW9ucy91aS1mb3JtJyxcblx0XHQnLi9jb2xsZWN0aW9ucy91aS1ncmlkJyxcblx0XHQnLi9jb2xsZWN0aW9ucy91aS1tZW51Jyxcblx0XHQnLi9jb2xsZWN0aW9ucy91aS1tZXNzYWdlJyxcblx0XHQnLi9jb2xsZWN0aW9ucy91aS10YWJsZScsXG5cdFx0Jy4vZWxlbWVudHMvdWktYnV0dG9uJyxcblx0XHQnLi9lbGVtZW50cy91aS1jb250YWluZXInLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWRpdmlkZXInLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWZsYWcnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWhlYWRlcicsXG5cdFx0Jy4vZWxlbWVudHMvdWktaWNvbicsXG5cdFx0Jy4vZWxlbWVudHMvdWktaW1hZ2UnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWlucHV0Jyxcblx0XHQnLi9lbGVtZW50cy91aS1sYWJlbCcsXG5cdFx0Jy4vZWxlbWVudHMvdWktbGlzdCcsXG5cdFx0Jy4vZWxlbWVudHMvdWktbG9hZGVyJyxcblx0XHQnLi9lbGVtZW50cy91aS1yYWlsJyxcblx0XHQnLi9lbGVtZW50cy91aS1yZXZlYWwnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLXNlZ21lbnQnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLXN0ZXAnLFxuXHRcdCcuL21vZHVsZXMvdWktYWNjb3JkaW9uJyxcblx0XHQnLi9tb2R1bGVzL3VpLWRpbW1lcicsXG5cdFx0Jy4vbW9kdWxlcy91aS1kcm9wZG93bicsXG5cdFx0Jy4vbW9kdWxlcy91aS1tb2RhbCcsXG5cdFx0Jy4vbW9kdWxlcy91aS1wb3B1cCcsXG5cdFx0Jy4vbW9kdWxlcy91aS1wcm9ncmVzcycsXG5cdFx0Jy4vbW9kdWxlcy91aS1zZWFyY2gnLFxuXHRcdCcuL21vZHVsZXMvdWktc2lkZWJhcicsXG5cdFx0Jy4vdmlld3MvdWktY2FyZCcsXG5cdFx0Jy4vdmlld3MvdWktZmVlZCcsXG5cdFx0Jy4vdmlld3MvdWktc3RhdGlzdGljJ1xuXHQpO1xufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
