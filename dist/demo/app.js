System.register(['aurelia-framework', 'aurelia-router', 'aurelia-event-aggregator'], function (_export) {
	'use strict';

	var inject, bindable, LogManager, Redirect, EventAggregator, DemoApp;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			bindable = _aureliaFramework.bindable;
			LogManager = _aureliaFramework.LogManager;
		}, function (_aureliaRouter) {
			Redirect = _aureliaRouter.Redirect;
		}, function (_aureliaEventAggregator) {
			EventAggregator = _aureliaEventAggregator.EventAggregator;
		}],
		execute: function () {
			DemoApp = (function () {
				var _instanceInitializers = {};
				var _instanceInitializers = {};

				_createDecoratedClass(DemoApp, [{
					key: 'router',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				function DemoApp(eventAggregator) {
					_classCallCheck(this, _DemoApp);

					_defineDecoratedPropertyDescriptor(this, 'router', _instanceInitializers);

					this.logger = LogManager.getLogger('cozyadmin');
					this.eventAggregator = eventAggregator;
				}

				_createDecoratedClass(DemoApp, [{
					key: 'configureRouter',
					value: function configureRouter(config, router) {
						this.router = router;
						this.logger.debug("Router is: ", router);

						config.title = 'Aurelia Semantic UI Demo App';
						config.map([{
							route: 'overview',
							name: 'overview',
							moduleId: 'demo/overview',
							nav: true,
							title: 'Overview'
						}, {
							route: 'elements',
							name: 'elements',
							moduleId: 'demo/modules/elements',
							nav: true,
							title: 'Elements'
						}, {
							route: 'collections',
							name: 'collections',
							moduleId: 'demo/modules/collections',
							nav: true,
							title: 'Collections'
						}, {
							route: 'views',
							name: 'views',
							moduleId: 'demo/modules/views',
							nav: true,
							title: 'Views'
						}, {
							route: 'modules',
							name: 'modules',
							moduleId: 'demo/modules/modules',
							nav: true,
							title: 'Modules'
						}, {
							route: '',
							redirect: 'overview'
						}]);
					}
				}, {
					key: 'attached',
					value: function attached() {
						$('.image').visibility({
							type: 'image',
							transition: 'vertical flip in',
							duration: 500
						});
					}
				}], null, _instanceInitializers);

				var _DemoApp = DemoApp;
				DemoApp = inject(EventAggregator)(DemoApp) || DemoApp;
				return DemoApp;
			})();

			_export('DemoApp', DemoApp);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OERBU2EsT0FBTzs7Ozs7Ozs7Ozs4QkFMWixNQUFNO2dDQUFFLFFBQVE7a0NBQUUsVUFBVTs7NkJBQzVCLFFBQVE7OzZDQUNSLGVBQWU7OztBQUdWLFVBQU87Ozs7MEJBQVAsT0FBTzs7a0JBRWxCLFFBQVE7Ozs7O0FBRUUsYUFKQyxPQUFPLENBSU4sZUFBZSxFQUFHOzs7OztBQUM5QixTQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUUsV0FBVyxDQUFFLENBQUM7QUFDbEQsU0FBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7S0FDdkM7OzBCQVBXLE9BQU87O1lBVUoseUJBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRztBQUNqQyxVQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixVQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxhQUFhLEVBQUUsTUFBTSxDQUFFLENBQUM7O0FBRTNDLFlBQU0sQ0FBQyxLQUFLLEdBQUcsOEJBQThCLENBQUM7QUFDOUMsWUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNWO0FBQ0MsWUFBSyxFQUFFLFVBQVU7QUFDakIsV0FBSSxFQUFFLFVBQVU7QUFDaEIsZUFBUSxFQUFFLGVBQWU7QUFDekIsVUFBRyxFQUFFLElBQUk7QUFDVCxZQUFLLEVBQUUsVUFBVTtPQUNqQixFQUVEO0FBQ0MsWUFBSyxFQUFFLFVBQVU7QUFDakIsV0FBSSxFQUFFLFVBQVU7QUFDaEIsZUFBUSxFQUFFLHVCQUF1QjtBQUNqQyxVQUFHLEVBQUUsSUFBSTtBQUNULFlBQUssRUFBRSxVQUFVO09BQ2pCLEVBRUQ7QUFDQyxZQUFLLEVBQUUsYUFBYTtBQUNwQixXQUFJLEVBQUUsYUFBYTtBQUNuQixlQUFRLEVBQUUsMEJBQTBCO0FBQ3BDLFVBQUcsRUFBRSxJQUFJO0FBQ1QsWUFBSyxFQUFFLGFBQWE7T0FDcEIsRUFFRDtBQUNDLFlBQUssRUFBRSxPQUFPO0FBQ2QsV0FBSSxFQUFFLE9BQU87QUFDYixlQUFRLEVBQUUsb0JBQW9CO0FBQzlCLFVBQUcsRUFBRSxJQUFJO0FBQ1QsWUFBSyxFQUFFLE9BQU87T0FDZCxFQUVEO0FBQ0MsWUFBSyxFQUFFLFNBQVM7QUFDaEIsV0FBSSxFQUFFLFNBQVM7QUFDZixlQUFRLEVBQUUsc0JBQXNCO0FBQ2hDLFVBQUcsRUFBRSxJQUFJO0FBQ1QsWUFBSyxFQUFFLFNBQVM7T0FDaEIsRUFJRDtBQUNDLFlBQUssRUFBRSxFQUFFO0FBQ1QsZUFBUSxFQUFFLFVBQVU7T0FDcEIsQ0FDRCxDQUFDLENBQUM7TUFDSDs7O1lBRU8sb0JBQUc7QUFHVixPQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDO0FBQ3RCLFdBQUksRUFBRSxPQUFPO0FBQ2IsaUJBQVUsRUFBRSxrQkFBa0I7QUFDOUIsZUFBUSxFQUFFLEdBQUc7T0FDYixDQUFDLENBQUM7TUFDSDs7O21CQXpFVyxPQUFPO0FBQVAsV0FBTyxHQURuQixNQUFNLENBQUUsZUFBZSxDQUFFLENBQ2IsT0FBTyxLQUFQLE9BQU87V0FBUCxPQUFPIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ296eSBBZG1pbiBBcHBcbiAqL1xuXG5pbXBvcnQge2luamVjdCwgYmluZGFibGUsIExvZ01hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7UmVkaXJlY3R9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuXG5AaW5qZWN0KCBFdmVudEFnZ3JlZ2F0b3IgKVxuZXhwb3J0IGNsYXNzIERlbW9BcHAge1xuXG5cdEBiaW5kYWJsZSByb3V0ZXI7XG5cblx0Y29uc3RydWN0b3IoIGV2ZW50QWdncmVnYXRvciApIHtcblx0XHR0aGlzLmxvZ2dlciA9IExvZ01hbmFnZXIuZ2V0TG9nZ2VyKCAnY296eWFkbWluJyApO1xuXHRcdHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xuXHR9XG5cblxuXHRjb25maWd1cmVSb3V0ZXIoIGNvbmZpZywgcm91dGVyICkge1xuXHRcdHRoaXMucm91dGVyID0gcm91dGVyO1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIlJvdXRlciBpczogXCIsIHJvdXRlciApO1xuXG5cdFx0Y29uZmlnLnRpdGxlID0gJ0F1cmVsaWEgU2VtYW50aWMgVUkgRGVtbyBBcHAnO1xuXHRcdGNvbmZpZy5tYXAoW1xuXHRcdFx0e1xuXHRcdFx0XHRyb3V0ZTogJ292ZXJ2aWV3Jyxcblx0XHRcdFx0bmFtZTogJ292ZXJ2aWV3Jyxcblx0XHRcdFx0bW9kdWxlSWQ6ICdkZW1vL292ZXJ2aWV3Jyxcblx0XHRcdFx0bmF2OiB0cnVlLFxuXHRcdFx0XHR0aXRsZTogJ092ZXJ2aWV3J1xuXHRcdFx0fSxcblxuXHRcdFx0e1xuXHRcdFx0XHRyb3V0ZTogJ2VsZW1lbnRzJyxcblx0XHRcdFx0bmFtZTogJ2VsZW1lbnRzJyxcblx0XHRcdFx0bW9kdWxlSWQ6ICdkZW1vL21vZHVsZXMvZWxlbWVudHMnLFxuXHRcdFx0XHRuYXY6IHRydWUsXG5cdFx0XHRcdHRpdGxlOiAnRWxlbWVudHMnXG5cdFx0XHR9LFxuXG5cdFx0XHR7XG5cdFx0XHRcdHJvdXRlOiAnY29sbGVjdGlvbnMnLFxuXHRcdFx0XHRuYW1lOiAnY29sbGVjdGlvbnMnLFxuXHRcdFx0XHRtb2R1bGVJZDogJ2RlbW8vbW9kdWxlcy9jb2xsZWN0aW9ucycsXG5cdFx0XHRcdG5hdjogdHJ1ZSxcblx0XHRcdFx0dGl0bGU6ICdDb2xsZWN0aW9ucydcblx0XHRcdH0sXG5cblx0XHRcdHtcblx0XHRcdFx0cm91dGU6ICd2aWV3cycsXG5cdFx0XHRcdG5hbWU6ICd2aWV3cycsXG5cdFx0XHRcdG1vZHVsZUlkOiAnZGVtby9tb2R1bGVzL3ZpZXdzJyxcblx0XHRcdFx0bmF2OiB0cnVlLFxuXHRcdFx0XHR0aXRsZTogJ1ZpZXdzJ1xuXHRcdFx0fSxcblxuXHRcdFx0e1xuXHRcdFx0XHRyb3V0ZTogJ21vZHVsZXMnLFxuXHRcdFx0XHRuYW1lOiAnbW9kdWxlcycsXG5cdFx0XHRcdG1vZHVsZUlkOiAnZGVtby9tb2R1bGVzL21vZHVsZXMnLFxuXHRcdFx0XHRuYXY6IHRydWUsXG5cdFx0XHRcdHRpdGxlOiAnTW9kdWxlcydcblx0XHRcdH0sXG5cblx0XHRcdC8qIC0tLSAqL1xuXG5cdFx0XHR7XG5cdFx0XHRcdHJvdXRlOiAnJyxcblx0XHRcdFx0cmVkaXJlY3Q6ICdvdmVydmlldydcblx0XHRcdH1cblx0XHRdKTtcblx0fVxuXG5cdGF0dGFjaGVkKCkge1xuXG5cdFx0Ly8gbGF6eSBsb2FkIGltYWdlc1xuXHRcdCQoJy5pbWFnZScpLnZpc2liaWxpdHkoe1xuXHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdHRyYW5zaXRpb246ICd2ZXJ0aWNhbCBmbGlwIGluJyxcblx0XHRcdGR1cmF0aW9uOiA1MDBcblx0XHR9KTtcblx0fVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
