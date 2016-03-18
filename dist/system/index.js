System.register(['semantic', 'semantic/semantic.css!'], function (_export) {
	'use strict';

	var VERSION;

	_export('configure', configure);

	function configure(config) {
		config.globalResources('./collections/ui-breadcrumb', './collections/ui-form', './collections/ui-menu', './collections/ui-message', './collections/ui-table', './elements/ui-button', './elements/ui-container', './elements/ui-divider', './elements/ui-flag', './elements/ui-header', './elements/ui-icon', './elements/ui-image', './elements/ui-input', './elements/ui-label', './elements/ui-list', './elements/ui-loader', './elements/ui-rail', './elements/ui-reveal', './elements/ui-segment', './elements/ui-step', './modules/ui-dropdown', './modules/ui-modal', './modules/ui-search', './modules/ui-sidebar', './views/ui-card');
	}

	return {
		setters: [function (_semantic) {}, function (_semanticSemanticCss) {}],
		execute: function () {
			VERSION = '0.0.1.dev';

			_export('VERSION', VERSION);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztLQVlXLE9BQU87Ozs7QUFHWCxVQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUU7QUFDakMsUUFBTSxDQUFDLGVBQWUsQ0FDckIsNkJBQTZCLEVBQzdCLHVCQUF1QixFQUN2Qix1QkFBdUIsRUFDdkIsMEJBQTBCLEVBQzFCLHdCQUF3QixFQUN4QixzQkFBc0IsRUFDdEIseUJBQXlCLEVBQ3pCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsc0JBQXNCLEVBQ3RCLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsc0JBQXNCLEVBQ3RCLG9CQUFvQixFQUNwQixzQkFBc0IsRUFDdEIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLHFCQUFxQixFQUNyQixzQkFBc0IsRUFDdEIsaUJBQWlCLENBQ2pCLENBQUM7RUFDRjs7Ozs7QUEvQlUsVUFBTyxHQUFHLFdBQVciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEF1cmVsaWEtU2VtYW50aWMtVUkgLS0gQXVyZWxpYSBjb21wb25lbnRzIGZvciBTZW1hbnRpYy1VSVxuICogJElkJFxuICpcbiAqIEF1dGhvcnNcbiAqIC0gTWljaGFlbCBHcmFuZ2VyIDxnZWRARmFlcmllTVVELm9yZz5cbiAqL1xuXG5pbXBvcnQgJ3NlbWFudGljJztcbmltcG9ydCAnc2VtYW50aWMvc2VtYW50aWMuY3NzISc7XG5cblxuZXhwb3J0IHZhciBWRVJTSU9OID0gJzAuMC4xLmRldic7XG5cbi8vIEF1cmVsaWEgcGx1Z2luIGhvb2tcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnKSB7XG5cdGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoXG5cdFx0Jy4vY29sbGVjdGlvbnMvdWktYnJlYWRjcnVtYicsXG5cdFx0Jy4vY29sbGVjdGlvbnMvdWktZm9ybScsXG5cdFx0Jy4vY29sbGVjdGlvbnMvdWktbWVudScsXG5cdFx0Jy4vY29sbGVjdGlvbnMvdWktbWVzc2FnZScsXG5cdFx0Jy4vY29sbGVjdGlvbnMvdWktdGFibGUnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWJ1dHRvbicsXG5cdFx0Jy4vZWxlbWVudHMvdWktY29udGFpbmVyJyxcblx0XHQnLi9lbGVtZW50cy91aS1kaXZpZGVyJyxcblx0XHQnLi9lbGVtZW50cy91aS1mbGFnJyxcblx0XHQnLi9lbGVtZW50cy91aS1oZWFkZXInLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWljb24nLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWltYWdlJyxcblx0XHQnLi9lbGVtZW50cy91aS1pbnB1dCcsXG5cdFx0Jy4vZWxlbWVudHMvdWktbGFiZWwnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWxpc3QnLFxuXHRcdCcuL2VsZW1lbnRzL3VpLWxvYWRlcicsXG5cdFx0Jy4vZWxlbWVudHMvdWktcmFpbCcsXG5cdFx0Jy4vZWxlbWVudHMvdWktcmV2ZWFsJyxcblx0XHQnLi9lbGVtZW50cy91aS1zZWdtZW50Jyxcblx0XHQnLi9lbGVtZW50cy91aS1zdGVwJyxcblx0XHQnLi9tb2R1bGVzL3VpLWRyb3Bkb3duJyxcblx0XHQnLi9tb2R1bGVzL3VpLW1vZGFsJyxcblx0XHQnLi9tb2R1bGVzL3VpLXNlYXJjaCcsXG5cdFx0Jy4vbW9kdWxlcy91aS1zaWRlYmFyJyxcblx0XHQnLi92aWV3cy91aS1jYXJkJ1xuXHQpO1xufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
