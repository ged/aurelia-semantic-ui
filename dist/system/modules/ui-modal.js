System.register(['aurelia-framework'], function (_export) {
	"use strict";

	var inject, customAttribute, bindable, UIModalElement;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			customAttribute = _aureliaFramework.customAttribute;
			bindable = _aureliaFramework.bindable;
		}],
		execute: function () {
			UIModalElement = (function () {
				var _instanceInitializers = {};
				var _instanceInitializers = {};

				_createDecoratedClass(UIModalElement, [{
					key: 'active',
					decorators: [bindable],
					initializer: function initializer() {
						return false;
					},
					enumerable: true
				}], null, _instanceInitializers);

				function UIModalElement(element) {
					_classCallCheck(this, _UIModalElement);

					_defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

					this.element = element;
				}

				_createDecoratedClass(UIModalElement, [{
					key: 'bind',
					value: function bind() {
						this.element.classList.add('ui', 'modal');
					}
				}, {
					key: 'activeChanged',
					value: function activeChanged(newValue) {
						if (newValue) {
							$(this.modal).modal('show');
						} else {
							$(this.modal).modal('hide');
						}
					}
				}], null, _instanceInitializers);

				var _UIModalElement = UIModalElement;
				UIModalElement = inject(Element)(UIModalElement) || UIModalElement;
				UIModalElement = customAttribute('ui-modal')(UIModalElement) || UIModalElement;
				return UIModalElement;
			})();

			_export('UIModalElement', UIModalElement);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7d0NBVUEsY0FBYzs7Ozs7Ozs7Ozs4QkFKbkIsTUFBTTt1Q0FBRSxlQUFlO2dDQUFFLFFBQVE7OztBQUk1QixpQkFBYzs7OzswQkFBZCxjQUFjOztrQkFFekIsUUFBUTs7YUFBVSxLQUFLOzs7OztBQUdiLGFBTEMsY0FBYyxDQUtiLE9BQU8sRUFBRzs7Ozs7QUFDdEIsU0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDdkI7OzBCQVBXLGNBQWM7O1lBVXRCLGdCQUFHO0FBQ04sVUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFFLElBQUksRUFBRSxPQUFPLENBQUUsQ0FBQztNQUM1Qzs7O1lBR1ksdUJBQUUsUUFBUSxFQUFHO0FBQ3pCLFVBQUssUUFBUSxFQUFHO0FBQ2YsUUFBQyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxLQUFLLENBQUUsTUFBTSxDQUFFLENBQUM7T0FDaEMsTUFBTTtBQUNOLFFBQUMsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsS0FBSyxDQUFFLE1BQU0sQ0FBRSxDQUFDO09BQ2hDO01BQ0Q7OzswQkFyQlcsY0FBYztBQUFkLGtCQUFjLEdBRDFCLE1BQU0sQ0FBRSxPQUFPLENBQUUsQ0FDTCxjQUFjLEtBQWQsY0FBYztBQUFkLGtCQUFjLEdBRjFCLGVBQWUsQ0FBRSxVQUFVLENBQUUsQ0FFakIsY0FBYyxLQUFkLGNBQWM7V0FBZCxjQUFjIiwiZmlsZSI6Im1vZHVsZXMvdWktbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIE1vZGFsIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL21vZGFsLmh0bWxcbiAqL1xuXG5pbXBvcnQge2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCAndWktbW9kYWwnIClcbkBpbmplY3QoIEVsZW1lbnQgKVxuZXhwb3J0IGNsYXNzIFVJTW9kYWxFbGVtZW50IHtcblxuXHRAYmluZGFibGUgYWN0aXZlID0gZmFsc2U7XG5cblxuXHRjb25zdHJ1Y3RvciggZWxlbWVudCApIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXHR9XG5cblxuXHRiaW5kKCkge1xuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAndWknLCAnbW9kYWwnICk7XG5cdH1cblxuXG5cdGFjdGl2ZUNoYW5nZWQoIG5ld1ZhbHVlICkge1xuXHRcdGlmICggbmV3VmFsdWUgKSB7XG5cdFx0XHQkKCB0aGlzLm1vZGFsICkubW9kYWwoICdzaG93JyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCB0aGlzLm1vZGFsICkubW9kYWwoICdoaWRlJyApO1xuXHRcdH1cblx0fVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
