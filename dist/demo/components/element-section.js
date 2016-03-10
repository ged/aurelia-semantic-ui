System.register(['aurelia-framework'], function (_export) {
	"use strict";

	var customElement, bindable, ElementSectionElement;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_aureliaFramework) {
			customElement = _aureliaFramework.customElement;
			bindable = _aureliaFramework.bindable;
		}],
		execute: function () {
			ElementSectionElement = (function () {
				var _instanceInitializers = {};

				function ElementSectionElement() {
					_classCallCheck(this, _ElementSectionElement);

					_defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'description', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'category', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'status', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'types', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'variations', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'docsHref', _instanceInitializers);
				}

				_createDecoratedClass(ElementSectionElement, [{
					key: 'name',
					decorators: [bindable],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'description',
					decorators: [bindable],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'category',
					decorators: [bindable],
					initializer: function initializer() {
						return "element";
					},
					enumerable: true
				}, {
					key: 'status',
					decorators: [bindable],
					initializer: function initializer() {
						return "incomplete";
					},
					enumerable: true
				}, {
					key: 'types',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: 'variations',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: 'docsHref',
					decorators: [bindable],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}], null, _instanceInitializers);

				var _ElementSectionElement = ElementSectionElement;
				ElementSectionElement = customElement('element-section')(ElementSectionElement) || ElementSectionElement;
				return ElementSectionElement;
			})();

			_export('ElementSectionElement', ElementSectionElement);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZWxlbWVudC1zZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxhQUFZLENBQUM7OzhCQUtBLHFCQUFxQjs7Ozs7Ozs7OztxQ0FIMUIsYUFBYTtnQ0FBRSxRQUFROzs7QUFHbEIsd0JBQXFCOzs7YUFBckIscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQXJCLHFCQUFxQjs7a0JBRWhDLFFBQVE7O2FBQVEsSUFBSTs7Ozs7a0JBQ3BCLFFBQVE7O2FBQWUsSUFBSTs7Ozs7a0JBQzNCLFFBQVE7O2FBQVksU0FBUzs7Ozs7a0JBQzdCLFFBQVE7O2FBQVUsWUFBWTs7Ozs7a0JBQzlCLFFBQVE7Ozs7O2tCQUNSLFFBQVE7Ozs7O2tCQUNSLFFBQVE7O2FBQVksSUFBSTs7Ozs7aUNBUmIscUJBQXFCO0FBQXJCLHlCQUFxQixHQURqQyxhQUFhLENBQUUsaUJBQWlCLENBQUUsQ0FDdEIscUJBQXFCLEtBQXJCLHFCQUFxQjtXQUFyQixxQkFBcUIiLCJmaWxlIjoiY29tcG9uZW50cy9lbGVtZW50LXNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21FbGVtZW50KCAnZWxlbWVudC1zZWN0aW9uJyApXG5leHBvcnQgY2xhc3MgRWxlbWVudFNlY3Rpb25FbGVtZW50IHtcblxuXHRAYmluZGFibGUgbmFtZSA9IG51bGw7XG5cdEBiaW5kYWJsZSBkZXNjcmlwdGlvbiA9IG51bGw7XG5cdEBiaW5kYWJsZSBjYXRlZ29yeSA9IFwiZWxlbWVudFwiO1xuXHRAYmluZGFibGUgc3RhdHVzID0gXCJpbmNvbXBsZXRlXCI7XG5cdEBiaW5kYWJsZSB0eXBlcztcblx0QGJpbmRhYmxlIHZhcmlhdGlvbnM7XG5cdEBiaW5kYWJsZSBkb2NzSHJlZiA9IG51bGw7XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
