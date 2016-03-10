
"use strict";

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var UIModalElement = (function () {
	var _instanceInitializers = {};
	var _instanceInitializers = {};

	_createDecoratedClass(UIModalElement, [{
		key: 'active',
		decorators: [_aureliaFramework.bindable],
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
	UIModalElement = (0, _aureliaFramework.inject)(Element)(UIModalElement) || UIModalElement;
	UIModalElement = (0, _aureliaFramework.customAttribute)('ui-modal')(UIModalElement) || UIModalElement;
	return UIModalElement;
})();

exports.UIModalElement = UIModalElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7O2dDQU1tQyxtQkFBbUI7O0lBSXRELGNBQWM7Ozs7dUJBQWQsY0FBYzs7OztVQUVQLEtBQUs7Ozs7O0FBR2IsVUFMQyxjQUFjLENBS2IsT0FBTyxFQUFHOzs7OztBQUN0QixNQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztFQUN2Qjs7dUJBUFcsY0FBYzs7U0FVdEIsZ0JBQUc7QUFDTixPQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBRSxDQUFDO0dBQzVDOzs7U0FHWSx1QkFBRSxRQUFRLEVBQUc7QUFDekIsT0FBSyxRQUFRLEVBQUc7QUFDZixLQUFDLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEtBQUssQ0FBRSxNQUFNLENBQUUsQ0FBQztJQUNoQyxNQUFNO0FBQ04sS0FBQyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxLQUFLLENBQUUsTUFBTSxDQUFFLENBQUM7SUFDaEM7R0FDRDs7O3VCQXJCVyxjQUFjO0FBQWQsZUFBYyxHQUQxQiw4QkFBUSxPQUFPLENBQUUsQ0FDTCxjQUFjLEtBQWQsY0FBYztBQUFkLGVBQWMsR0FGMUIsdUNBQWlCLFVBQVUsQ0FBRSxDQUVqQixjQUFjLEtBQWQsY0FBYztRQUFkLGNBQWMiLCJmaWxlIjoibW9kdWxlcy91aS1tb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogTW9kYWwgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvbW9kYWwuaHRtbFxuICovXG5cbmltcG9ydCB7aW5qZWN0LCBjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoICd1aS1tb2RhbCcgKVxuQGluamVjdCggRWxlbWVudCApXG5leHBvcnQgY2xhc3MgVUlNb2RhbEVsZW1lbnQge1xuXG5cdEBiaW5kYWJsZSBhY3RpdmUgPSBmYWxzZTtcblxuXG5cdGNvbnN0cnVjdG9yKCBlbGVtZW50ICkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdH1cblxuXG5cdGJpbmQoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICd1aScsICdtb2RhbCcgKTtcblx0fVxuXG5cblx0YWN0aXZlQ2hhbmdlZCggbmV3VmFsdWUgKSB7XG5cdFx0aWYgKCBuZXdWYWx1ZSApIHtcblx0XHRcdCQoIHRoaXMubW9kYWwgKS5tb2RhbCggJ3Nob3cnICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoIHRoaXMubW9kYWwgKS5tb2RhbCggJ2hpZGUnICk7XG5cdFx0fVxuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
