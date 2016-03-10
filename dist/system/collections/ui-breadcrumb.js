System.register(['../ui-attribute', 'aurelia-framework'], function (_export) {
	"use strict";

	var UIAttribute, bindableToggle, bindableEnum, inject, customAttribute, children, bindable, LogManager, UIBreadcrumbAttribute, UIBreadcrumbSectionAttribute, UIBreadcrumbDividerAttribute;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	return {
		setters: [function (_uiAttribute) {
			UIAttribute = _uiAttribute.UIAttribute;
			bindableToggle = _uiAttribute.bindableToggle;
			bindableEnum = _uiAttribute.bindableEnum;
		}, function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			customAttribute = _aureliaFramework.customAttribute;
			children = _aureliaFramework.children;
			bindable = _aureliaFramework.bindable;
			LogManager = _aureliaFramework.LogManager;
		}],
		execute: function () {
			UIBreadcrumbAttribute = (function (_UIAttribute) {
				var _instanceInitializers = {};

				_inherits(UIBreadcrumbAttribute, _UIAttribute);

				function UIBreadcrumbAttribute() {
					_classCallCheck(this, _UIBreadcrumbAttribute);

					_get(Object.getPrototypeOf(_UIBreadcrumbAttribute.prototype), 'constructor', this).apply(this, arguments);

					_defineDecoratedPropertyDescriptor(this, 'divider', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'sections', _instanceInitializers);
				}

				_createDecoratedClass(UIBreadcrumbAttribute, [{
					key: 'bind',
					value: function bind() {
						_get(Object.getPrototypeOf(_UIBreadcrumbAttribute.prototype), 'bind', this).call(this);

						if (this.divider) {
							var dividerNode = null;

							if (this.divider.match(/\bicon\b/)) {
								var _dividerNode$classList;

								this.logger.debug('Icon divider (' + this.divider + ')');
								dividerNode = document.createElement('i');
								(_dividerNode$classList = dividerNode.classList).add.apply(_dividerNode$classList, _toConsumableArray(this.divider.split(/\s+/)));
								dividerNode.classList.add('divider');
							} else {
									this.logger.debug('Text divider (' + this.divider + ')');
									var content = document.createTextNode(this.divider);
									dividerNode = document.createElement('span');
									dividerNode.classList.add('divider');
									dividerNode.appendChild(content);
								}

							for (var i in this.sections) {
								if (i > 0) {
									var section = this.sections[i];
									this.element.insertBefore(dividerNode.cloneNode(true), section);
								}
							}
						}
					}
				}, {
					key: 'divider',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: 'size',
					decorators: [bindableEnum('small', 'large', 'huge')],
					initializer: null,
					enumerable: true
				}, {
					key: 'sections',
					decorators: [children('[ui-breadcrumb-section]')],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				var _UIBreadcrumbAttribute = UIBreadcrumbAttribute;
				UIBreadcrumbAttribute = customAttribute('ui-breadcrumb')(UIBreadcrumbAttribute) || UIBreadcrumbAttribute;
				return UIBreadcrumbAttribute;
			})(UIAttribute);

			_export('UIBreadcrumbAttribute', UIBreadcrumbAttribute);

			UIBreadcrumbSectionAttribute = (function (_UIAttribute2) {
				var _instanceInitializers2 = {};

				_inherits(UIBreadcrumbSectionAttribute, _UIAttribute2);

				function UIBreadcrumbSectionAttribute() {
					_classCallCheck(this, _UIBreadcrumbSectionAttribute);

					_get(Object.getPrototypeOf(_UIBreadcrumbSectionAttribute.prototype), 'constructor', this).apply(this, arguments);

					_defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers2);
				}

				_createDecoratedClass(UIBreadcrumbSectionAttribute, [{
					key: 'bind',
					value: function bind() {
						this.element.classList.add('section');
					}
				}, {
					key: 'active',
					decorators: [bindableToggle],
					initializer: function initializer() {
						return false;
					},
					enumerable: true
				}], null, _instanceInitializers2);

				var _UIBreadcrumbSectionAttribute = UIBreadcrumbSectionAttribute;
				UIBreadcrumbSectionAttribute = customAttribute('ui-breadcrumb-section')(UIBreadcrumbSectionAttribute) || UIBreadcrumbSectionAttribute;
				return UIBreadcrumbSectionAttribute;
			})(UIAttribute);

			_export('UIBreadcrumbSectionAttribute', UIBreadcrumbSectionAttribute);

			UIBreadcrumbDividerAttribute = (function (_UIAttribute3) {
				_inherits(UIBreadcrumbDividerAttribute, _UIAttribute3);

				function UIBreadcrumbDividerAttribute() {
					_classCallCheck(this, _UIBreadcrumbDividerAttribute);

					_get(Object.getPrototypeOf(_UIBreadcrumbDividerAttribute.prototype), 'constructor', this).apply(this, arguments);
				}

				_createClass(UIBreadcrumbDividerAttribute, [{
					key: 'bind',
					value: function bind() {
						if (this.element.classList) {
							this.element.classList.add('divider');
						}
					}
				}]);

				var _UIBreadcrumbDividerAttribute = UIBreadcrumbDividerAttribute;
				UIBreadcrumbDividerAttribute = customAttribute('ui-breadcrumb-divider')(UIBreadcrumbDividerAttribute) || UIBreadcrumbDividerAttribute;
				return UIBreadcrumbDividerAttribute;
			})(UIAttribute);

			_export('UIBreadcrumbDividerAttribute', UIBreadcrumbDividerAttribute);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWJyZWFkY3J1bWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7eUdBVUEscUJBQXFCLEVBOENyQiw0QkFBNEIsRUFnQjVCLDRCQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQWxFakMsV0FBVztpQ0FBRSxjQUFjOytCQUFFLFlBQVk7OzhCQUN6QyxNQUFNO3VDQUFFLGVBQWU7Z0NBQUUsUUFBUTtnQ0FBRSxRQUFRO2tDQUFFLFVBQVU7OztBQUdsRCx3QkFBcUI7OztjQUFyQixxQkFBcUI7O2FBQXJCLHFCQUFxQjs7Ozs7Ozs7Ozs7OzBCQUFyQixxQkFBcUI7O1lBTzdCLGdCQUFHO0FBQ04sNkZBQWE7O0FBRWIsVUFBSyxJQUFJLENBQUMsT0FBTyxFQUFHO0FBQ25CLFdBQUksV0FBVyxHQUFHLElBQUksQ0FBQzs7QUFHdkIsV0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRzs7O0FBQ3JDLFlBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxvQkFBbUIsSUFBSSxDQUFDLE9BQU8sT0FBSyxDQUFDO0FBQ3RELG1CQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBRSxHQUFHLENBQUUsQ0FBQztBQUM1QyxrQ0FBQSxXQUFXLENBQUMsU0FBUyxFQUFDLEdBQUcsTUFBQSw0Q0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQzFELG1CQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxTQUFTLENBQUUsQ0FBQztRQUN2QyxNQUdJO0FBQ0osYUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLG9CQUFtQixJQUFJLENBQUMsT0FBTyxPQUFLLENBQUM7QUFDdEQsYUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7QUFDdEQsb0JBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFFLE1BQU0sQ0FBRSxDQUFDO0FBQy9DLG9CQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxTQUFTLENBQUUsQ0FBQztBQUN2QyxvQkFBVyxDQUFDLFdBQVcsQ0FBRSxPQUFPLENBQUUsQ0FBQztTQUNuQzs7QUFFRCxZQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUc7QUFDOUIsWUFBSyxDQUFDLEdBQUcsQ0FBQyxFQUFHO0FBQ1osYUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDLENBQUUsQ0FBQztBQUNqQyxhQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBRSxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBRSxDQUFDO1NBQ2xFO1FBQ0Q7T0FDRDtNQUNEOzs7a0JBbkNBLFFBQVE7Ozs7O2tCQUNSLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQzs7Ozs7a0JBQ3RDLFFBQVEsQ0FBRSx5QkFBeUIsQ0FBRTs7Ozs7aUNBSjFCLHFCQUFxQjtBQUFyQix5QkFBcUIsR0FEakMsZUFBZSxDQUFFLGVBQWUsQ0FBRSxDQUN0QixxQkFBcUIsS0FBckIscUJBQXFCO1dBQXJCLHFCQUFxQjtNQUFTLFdBQVc7Ozs7QUE4Q3pDLCtCQUE0Qjs7O2NBQTVCLDRCQUE0Qjs7YUFBNUIsNEJBQTRCOzs7Ozs7OzswQkFBNUIsNEJBQTRCOztZQUlwQyxnQkFBRztBQUVOLFVBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxTQUFTLENBQUUsQ0FBQztNQUN4Qzs7O2tCQUxBLGNBQWM7O2FBQVUsS0FBSzs7Ozs7d0NBRmxCLDRCQUE0QjtBQUE1QixnQ0FBNEIsR0FEeEMsZUFBZSxDQUFFLHVCQUF1QixDQUFFLENBQzlCLDRCQUE0QixLQUE1Qiw0QkFBNEI7V0FBNUIsNEJBQTRCO01BQVMsV0FBVzs7OztBQWdCaEQsK0JBQTRCO2NBQTVCLDRCQUE0Qjs7YUFBNUIsNEJBQTRCOzs7Ozs7aUJBQTVCLDRCQUE0Qjs7WUFFcEMsZ0JBQUc7QUFFTixVQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFHO0FBQzdCLFdBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxTQUFTLENBQUUsQ0FBQztPQUN4QztNQUNEOzs7d0NBUFcsNEJBQTRCO0FBQTVCLGdDQUE0QixHQUR4QyxlQUFlLENBQUUsdUJBQXVCLENBQUUsQ0FDOUIsNEJBQTRCLEtBQTVCLDRCQUE0QjtXQUE1Qiw0QkFBNEI7TUFBUyxXQUFXIiwiZmlsZSI6ImNvbGxlY3Rpb25zL3VpLWJyZWFkY3J1bWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEJyZWFkY3J1bWIgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2NvbGxlY3Rpb25zL2JyZWFkY3J1bWIuaHRtbFxuICovXG5cbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBjaGlsZHJlbiwgYmluZGFibGUsIExvZ01hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggJ3VpLWJyZWFkY3J1bWInIClcbmV4cG9ydCBjbGFzcyBVSUJyZWFkY3J1bWJBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlIGRpdmlkZXI7XG5cdEBiaW5kYWJsZUVudW0oJ3NtYWxsJywgJ2xhcmdlJywgJ2h1Z2UnKSBzaXplO1xuXHRAY2hpbGRyZW4oICdbdWktYnJlYWRjcnVtYi1zZWN0aW9uXScgKSBzZWN0aW9ucztcblxuXG5cdGJpbmQoKSB7XG5cdFx0c3VwZXIuYmluZCgpO1xuXG5cdFx0aWYgKCB0aGlzLmRpdmlkZXIgKSB7XG5cdFx0XHRsZXQgZGl2aWRlck5vZGUgPSBudWxsO1xuXG5cdFx0XHQvLyBJY29uIGRpdmlkZXIgKDxpPilcblx0XHRcdGlmICggdGhpcy5kaXZpZGVyLm1hdGNoKC9cXGJpY29uXFxiLykgKSB7XG5cdFx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgSWNvbiBkaXZpZGVyICgke3RoaXMuZGl2aWRlcn0pYCApO1xuXHRcdFx0XHRkaXZpZGVyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpJyApO1xuXHRcdFx0XHRkaXZpZGVyTm9kZS5jbGFzc0xpc3QuYWRkKCAuLi50aGlzLmRpdmlkZXIuc3BsaXQoL1xccysvKSApO1xuXHRcdFx0XHRkaXZpZGVyTm9kZS5jbGFzc0xpc3QuYWRkKCAnZGl2aWRlcicgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVGV4dCBkaXZpZGVyICg8c3Bhbj4pXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBUZXh0IGRpdmlkZXIgKCR7dGhpcy5kaXZpZGVyfSlgICk7XG5cdFx0XHRcdGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoIHRoaXMuZGl2aWRlciApO1xuXHRcdFx0XHRkaXZpZGVyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuXHRcdFx0XHRkaXZpZGVyTm9kZS5jbGFzc0xpc3QuYWRkKCAnZGl2aWRlcicgKTtcblx0XHRcdFx0ZGl2aWRlck5vZGUuYXBwZW5kQ2hpbGQoIGNvbnRlbnQgKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yICggbGV0IGkgaW4gdGhpcy5zZWN0aW9ucyApIHtcblx0XHRcdFx0aWYgKCBpID4gMCApIHtcblx0XHRcdFx0XHRsZXQgc2VjdGlvbiA9IHRoaXMuc2VjdGlvbnNbIGkgXTtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKCBkaXZpZGVyTm9kZS5jbG9uZU5vZGUodHJ1ZSksIHNlY3Rpb24gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG5cblxuLyoqXG4gKiB1aS1icmVhZGNydW1iLXNlY3Rpb25cbiAqL1xuQGN1c3RvbUF0dHJpYnV0ZSggJ3VpLWJyZWFkY3J1bWItc2VjdGlvbicgKVxuZXhwb3J0IGNsYXNzIFVJQnJlYWRjcnVtYlNlY3Rpb25BdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlVG9nZ2xlIGFjdGl2ZSA9IGZhbHNlO1xuXG5cdGJpbmQoKSB7XG5cdFx0Ly8gTm8gc3VwZXJcblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3NlY3Rpb24nICk7XG5cdH1cblxufVxuXG5cbi8qKlxuICogdWktYnJlYWRjcnVtYi1kaXZpZGVyXG4gKi9cbkBjdXN0b21BdHRyaWJ1dGUoICd1aS1icmVhZGNydW1iLWRpdmlkZXInIClcbmV4cG9ydCBjbGFzcyBVSUJyZWFkY3J1bWJEaXZpZGVyQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdGJpbmQoKSB7XG5cdFx0Ly8gTm8gc3VwZXJcblx0XHRpZiAoIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QgKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2RpdmlkZXInICk7XG5cdFx0fVxuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
