
"use strict";

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _constants = require('../constants');

var _uiAttribute = require('../ui-attribute');

var _aureliaFramework = require('aurelia-framework');

var UIStepAttribute = (function (_UIAttribute) {
	var _instanceInitializers = {};

	_inherits(UIStepAttribute, _UIAttribute);

	function UIStepAttribute() {
		_classCallCheck(this, _UIStepAttribute);

		_get(Object.getPrototypeOf(_UIStepAttribute.prototype), 'constructor', this).apply(this, arguments);

		_defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

		_defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

		_defineDecoratedPropertyDescriptor(this, 'completed', _instanceInitializers);

		_defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers);
	}

	_createDecoratedClass(UIStepAttribute, [{
		key: 'bind',
		value: function bind() {
			this.element.classList.add('step');
		}
	}, {
		key: 'active',
		decorators: [_uiAttribute.bindableToggle],
		initializer: function initializer() {
			return false;
		},
		enumerable: true
	}, {
		key: 'disabled',
		decorators: [_uiAttribute.bindableToggle],
		initializer: function initializer() {
			return false;
		},
		enumerable: true
	}, {
		key: 'completed',
		decorators: [_uiAttribute.bindableToggle],
		initializer: function initializer() {
			return false;
		},
		enumerable: true
	}, {
		key: 'color',
		decorators: [_uiAttribute.bindableEnum.apply(undefined, _toConsumableArray(_constants.constants.VALID_COLORS))],
		initializer: null,
		enumerable: true
	}], null, _instanceInitializers);

	var _UIStepAttribute = UIStepAttribute;
	UIStepAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'step')(UIStepAttribute) || UIStepAttribute;
	return UIStepAttribute;
})(_uiAttribute.UIAttribute);

exports.UIStepAttribute = UIStepAttribute;

var UIStepsAttribute = (function (_UIAttribute2) {
	_inherits(UIStepsAttribute, _UIAttribute2);

	function UIStepsAttribute() {
		_classCallCheck(this, _UIStepsAttribute);

		_get(Object.getPrototypeOf(_UIStepsAttribute.prototype), 'constructor', this).apply(this, arguments);
	}

	var _UIStepsAttribute = UIStepsAttribute;
	UIStepsAttribute = (0, _aureliaFramework.customAttribute)('ui-steps')(UIStepsAttribute) || UIStepsAttribute;
	return UIStepsAttribute;
})(_uiAttribute.UIAttribute);

exports.UIStepsAttribute = UIStepsAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXN0ZXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQU1XLGNBQWM7OzJCQUNrQixpQkFBaUI7O2dDQUNDLG1CQUFtQjs7SUFHaEYsZUFBZTs7O1dBQWYsZUFBZTs7VUFBZixlQUFlOzs7Ozs7Ozs7Ozs7Ozt1QkFBZixlQUFlOztTQVF2QixnQkFBWTtBQUVmLE9BQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxNQUFNLENBQUUsQ0FBQztHQUNyQzs7Ozs7VUFUd0IsS0FBSzs7Ozs7OztVQUNILEtBQUs7Ozs7Ozs7VUFDSixLQUFLOzs7OztlQUNoQyw4REFBaUIscUJBQVUsWUFBWSxFQUFFOzs7Ozt3QkFMOUIsZUFBZTtBQUFmLGdCQUFlLEdBRDNCLHVDQUFvQixxQkFBVSxlQUFlLFVBQVEsQ0FDekMsZUFBZSxLQUFmLGVBQWU7UUFBZixlQUFlOzs7OztJQWlCZixnQkFBZ0I7V0FBaEIsZ0JBQWdCOztVQUFoQixnQkFBZ0I7Ozs7Ozt5QkFBaEIsZ0JBQWdCO0FBQWhCLGlCQUFnQixHQUQ1Qix1Q0FBaUIsVUFBVSxDQUFFLENBQ2pCLGdCQUFnQixLQUFoQixnQkFBZ0I7UUFBaEIsZ0JBQWdCIiwiZmlsZSI6ImVsZW1lbnRzL3VpLXN0ZXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFN0ZXAgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL3N0ZXAuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBjb21wdXRlZEZyb20sIGJpbmRhYmxlLCBpbmplY3QsIExvZ01hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1zdGVwYCApXG5leHBvcnQgY2xhc3MgVUlTdGVwQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZVRvZ2dsZSBhY3RpdmUgPSBmYWxzZTtcblx0QGJpbmRhYmxlVG9nZ2xlIGRpc2FibGVkID0gZmFsc2U7XG5cdEBiaW5kYWJsZVRvZ2dsZSBjb21wbGV0ZWQgPSBmYWxzZTtcblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX0NPTE9SUyApIGNvbG9yO1xuXG5cblx0YmluZCggLi4uYXJncyApIHtcblx0XHQvLyBObyBzdXBlclxuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnc3RlcCcgKTtcblx0fVxuXG59XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggJ3VpLXN0ZXBzJyApXG5leHBvcnQgY2xhc3MgVUlTdGVwc0F0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
