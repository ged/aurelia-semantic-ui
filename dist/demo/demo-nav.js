System.register(['aurelia-framework'], function (_export) {
	"use strict";

	var inject, bindable, customElement, LogManager, DemoNav;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			bindable = _aureliaFramework.bindable;
			customElement = _aureliaFramework.customElement;
			LogManager = _aureliaFramework.LogManager;
		}],
		execute: function () {
			DemoNav = (function () {
				var _instanceInitializers = {};
				var _instanceInitializers = {};

				_createDecoratedClass(DemoNav, [{
					key: 'router',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				function DemoNav(element) {
					_classCallCheck(this, _DemoNav);

					_defineDecoratedPropertyDescriptor(this, 'router', _instanceInitializers);

					this.element = element;
					this.logger = LogManager.getLogger('demo-nav');
				}

				_createDecoratedClass(DemoNav, [{
					key: 'attached',
					value: function attached() {
						var _this = this;

						this.logger.debug("Attached!");

						$(this.element).children('.top.menu').each(function (el) {
							return _this.logger.debug("Setting visibility for %o", el);
						}).visibility({ type: 'fixed' });

						$('.ui.sidebar').sidebar('attach events', '.toc.item');
					}
				}], null, _instanceInitializers);

				var _DemoNav = DemoNav;
				DemoNav = customElement('demo-nav')(DemoNav) || DemoNav;
				DemoNav = inject(Element)(DemoNav) || DemoNav;
				return DemoNav;
			})();

			_export('DemoNav', DemoNav);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8tbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxhQUFZLENBQUM7O2tEQVFBLE9BQU87Ozs7Ozs7Ozs7OEJBTFosTUFBTTtnQ0FBRSxRQUFRO3FDQUFFLGFBQWE7a0NBQUUsVUFBVTs7O0FBS3RDLFVBQU87Ozs7MEJBQVAsT0FBTzs7a0JBRWxCLFFBQVE7Ozs7O0FBRUUsYUFKQyxPQUFPLENBSU4sT0FBTyxFQUFHOzs7OztBQUN0QixTQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixTQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUUsVUFBVSxDQUFFLENBQUM7S0FDakQ7OzBCQVBXLE9BQU87O1lBVVgsb0JBQUc7OztBQUNWLFVBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLFdBQVcsQ0FBRSxDQUFDOztBQUVqQyxPQUFDLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUNoQixRQUFRLENBQUMsV0FBVyxDQUFDLENBQ3JCLElBQUksQ0FBRSxVQUFBLEVBQUU7Y0FBSSxNQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsRUFBRSxDQUFDO09BQUEsQ0FBRSxDQUNoRSxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQzs7QUFHL0IsT0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUNmLE9BQU8sQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7TUFDdkM7OzttQkFyQlcsT0FBTztBQUFQLFdBQU8sR0FEbkIsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUNiLE9BQU8sS0FBUCxPQUFPO0FBQVAsV0FBTyxHQUZuQixNQUFNLENBQUUsT0FBTyxDQUFFLENBRUwsT0FBTyxLQUFQLE9BQU87V0FBUCxPQUFPIiwiZmlsZSI6ImRlbW8tbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuXG5pbXBvcnQge2luamVjdCwgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIExvZ01hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuXG5AaW5qZWN0KCBFbGVtZW50IClcbkBjdXN0b21FbGVtZW50KCdkZW1vLW5hdicpXG5leHBvcnQgY2xhc3MgRGVtb05hdiB7XG5cblx0QGJpbmRhYmxlIHJvdXRlcjtcblxuXHRjb25zdHJ1Y3RvciggZWxlbWVudCApIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXHRcdHRoaXMubG9nZ2VyID0gTG9nTWFuYWdlci5nZXRMb2dnZXIoICdkZW1vLW5hdicgKTtcblx0fVxuXG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQXR0YWNoZWQhXCIgKTtcblxuXHRcdCQoIHRoaXMuZWxlbWVudCApLlxuXHRcdFx0Y2hpbGRyZW4oJy50b3AubWVudScpLlxuXHRcdFx0ZWFjaCggZWwgPT4gdGhpcy5sb2dnZXIuZGVidWcoXCJTZXR0aW5nIHZpc2liaWxpdHkgZm9yICVvXCIsIGVsKSApLlxuXHRcdFx0dmlzaWJpbGl0eSh7IHR5cGU6ICdmaXhlZCcgfSk7XG5cblx0XHQvLyBjcmVhdGUgc2lkZWJhciBhbmQgYXR0YWNoIHRvIG1lbnUgb3BlblxuXHRcdCQoJy51aS5zaWRlYmFyJykuXG5cdFx0XHRzaWRlYmFyKCdhdHRhY2ggZXZlbnRzJywgJy50b2MuaXRlbScpO1xuXHR9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
