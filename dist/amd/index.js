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
		config.globalResources('./collections/ui-breadcrumb', './collections/ui-form', './collections/ui-grid', './collections/ui-menu', './collections/ui-message', './collections/ui-table', './elements/ui-button', './elements/ui-container', './elements/ui-divider', './elements/ui-flag', './elements/ui-header', './elements/ui-icon', './elements/ui-image', './elements/ui-input', './elements/ui-label', './elements/ui-list', './elements/ui-loader', './elements/ui-rail', './elements/ui-reveal', './elements/ui-segment', './elements/ui-step', './modules/ui-dropdown', './modules/ui-modal', './modules/ui-search', './modules/ui-sidebar', './views/ui-card', './views/ui-statistic');
	}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7U0FlZ0I7Ozs7Ozs7OztBQUhULEtBQUksNEJBQVUsZUFBVjs7O0FBR0osVUFBUyxTQUFULENBQW1CLE1BQW5CLEVBQTJCO0FBQ2pDLFNBQU8sZUFBUCxDQUNDLDZCQURELEVBRUMsdUJBRkQsRUFHQyx1QkFIRCxFQUlDLHVCQUpELEVBS0MsMEJBTEQsRUFNQyx3QkFORCxFQU9DLHNCQVBELEVBUUMseUJBUkQsRUFTQyx1QkFURCxFQVVDLG9CQVZELEVBV0Msc0JBWEQsRUFZQyxvQkFaRCxFQWFDLHFCQWJELEVBY0MscUJBZEQsRUFlQyxxQkFmRCxFQWdCQyxvQkFoQkQsRUFpQkMsc0JBakJELEVBa0JDLG9CQWxCRCxFQW1CQyxzQkFuQkQsRUFvQkMsdUJBcEJELEVBcUJDLG9CQXJCRCxFQXNCQyx1QkF0QkQsRUF1QkMsb0JBdkJELEVBd0JDLHFCQXhCRCxFQXlCQyxzQkF6QkQsRUEwQkMsaUJBMUJELEVBMkJDLHNCQTNCRCxFQURpQztFQUEzQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXVyZWxpYS1TZW1hbnRpYy1VSSAtLSBBdXJlbGlhIGNvbXBvbmVudHMgZm9yIFNlbWFudGljLVVJXG4gKiAkSWQkXG4gKlxuICogQXV0aG9yc1xuICogLSBNaWNoYWVsIEdyYW5nZXIgPGdlZEBGYWVyaWVNVUQub3JnPlxuICovXG5cbmltcG9ydCAnc2VtYW50aWMtdWknO1xuaW1wb3J0ICdzZW1hbnRpYy11aS9zZW1hbnRpYy5jc3MhJztcblxuXG5leHBvcnQgdmFyIFZFUlNJT04gPSAnMC4wLjEuYWxwaGEuMyc7XG5cbi8vIEF1cmVsaWEgcGx1Z2luIGhvb2tcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnKSB7XG5cdGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoXG5cdFx0Jy4vY29sbGVjdGlvbnMvdWktYnJlYWRjcnVtYicsXG5cdFx0Jy4vY29sbGVjdGlvbnMvdWktZm9ybScsXG5cdFx0Jy4vY29sbGVjdGlvbnMvdWktZ3JpZCcsXG5cdFx0Jy4vY29sbGVjdGlvbnMvdWktbWVudScsXG5cdFx0Jy4vY29sbGVjdGlvbnMvdWktbWVzc2FnZScsXG5cdFx0Jy4vY29sbGVjdGlvbnMvdWktdGFibGUnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWJ1dHRvbicsXG5cdFx0Jy4vZWxlbWVudHMvdWktY29udGFpbmVyJyxcblx0XHQnLi9lbGVtZW50cy91aS1kaXZpZGVyJyxcblx0XHQnLi9lbGVtZW50cy91aS1mbGFnJyxcblx0XHQnLi9lbGVtZW50cy91aS1oZWFkZXInLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWljb24nLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWltYWdlJyxcblx0XHQnLi9lbGVtZW50cy91aS1pbnB1dCcsXG5cdFx0Jy4vZWxlbWVudHMvdWktbGFiZWwnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWxpc3QnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWxvYWRlcicsXG5cdFx0Jy4vZWxlbWVudHMvdWktcmFpbCcsXG5cdFx0Jy4vZWxlbWVudHMvdWktcmV2ZWFsJyxcblx0XHQnLi9lbGVtZW50cy91aS1zZWdtZW50Jyxcblx0XHQnLi9lbGVtZW50cy91aS1zdGVwJyxcblx0XHQnLi9tb2R1bGVzL3VpLWRyb3Bkb3duJyxcblx0XHQnLi9tb2R1bGVzL3VpLW1vZGFsJyxcblx0XHQnLi9tb2R1bGVzL3VpLXNlYXJjaCcsXG5cdFx0Jy4vbW9kdWxlcy91aS1zaWRlYmFyJyxcblx0XHQnLi92aWV3cy91aS1jYXJkJyxcblx0XHQnLi92aWV3cy91aS1zdGF0aXN0aWMnXG5cdCk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
