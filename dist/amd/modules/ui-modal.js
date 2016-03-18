define(['exports', '../constants', 'aurelia-framework', '../ui-attribute'], function (exports, _constants, _aureliaFramework, _uiAttribute) {
	"use strict";

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UIModalAttribute = (function (_UIAttribute) {
		var _instanceInitializers = {};

		_inherits(UIModalAttribute, _UIAttribute);

		function UIModalAttribute() {
			_classCallCheck(this, _UIModalAttribute);

			_get(Object.getPrototypeOf(_UIModalAttribute.prototype), 'constructor', this).apply(this, arguments);

			_defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);
		}

		_createDecoratedClass(UIModalAttribute, [{
			key: 'attached',
			value: function attached() {
				$(this.element).modal();
			}
		}, {
			key: 'activeChanged',
			value: function activeChanged(newValue) {
				if (newValue) {
					$(this.element).modal('show');
				} else {
					$(this.element).modal('hide');
				}
			}
		}, {
			key: 'active',
			decorators: [_uiAttribute.bindableToggle],
			initializer: function initializer() {
				return false;
			},
			enumerable: true
		}], null, _instanceInitializers);

		var _UIModalAttribute = UIModalAttribute;
		UIModalAttribute = (0, _aureliaFramework.customAttribute)('ui-modal')(UIModalAttribute) || UIModalAttribute;
		return UIModalAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UIModalAttribute = UIModalAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztLQVdBLGdCQUFnQjs7O1lBQWhCLGdCQUFnQjs7V0FBaEIsZ0JBQWdCOzs7Ozs7Ozt3QkFBaEIsZ0JBQWdCOztVQU1wQixvQkFBRztBQUNWLEtBQUMsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUI7OztVQUdZLHVCQUFFLFFBQVEsRUFBRztBQUN6QixRQUFLLFFBQVEsRUFBRztBQUNmLE1BQUMsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUMsS0FBSyxDQUFFLE1BQU0sQ0FBRSxDQUFDO0tBQ2xDLE1BQU07QUFDTixNQUFDLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLEtBQUssQ0FBRSxNQUFNLENBQUUsQ0FBQztLQUNsQztJQUNEOzs7NkJBcEJtQixjQUFjOztXQUtULEtBQUs7Ozs7OzBCQUZsQixnQkFBZ0I7QUFBaEIsa0JBQWdCLEdBRDVCLHNCQUhPLGVBQWUsRUFHTCxVQUFVLENBQUUsQ0FDakIsZ0JBQWdCLEtBQWhCLGdCQUFnQjtTQUFoQixnQkFBZ0I7aUJBSHJCLFdBQVciLCJmaWxlIjoibW9kdWxlcy91aS1tb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogTW9kYWwgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvbW9kYWwuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCAndWktbW9kYWwnIClcbmV4cG9ydCBjbGFzcyBVSU1vZGFsQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZVRvZ2dsZSBhY3RpdmUgPSBmYWxzZTtcblxuXG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkubW9kYWwoKTtcblx0fVxuXG5cblx0YWN0aXZlQ2hhbmdlZCggbmV3VmFsdWUgKSB7XG5cdFx0aWYgKCBuZXdWYWx1ZSApIHtcblx0XHRcdCQoIHRoaXMuZWxlbWVudCApLm1vZGFsKCAnc2hvdycgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCggdGhpcy5lbGVtZW50ICkubW9kYWwoICdoaWRlJyApO1xuXHRcdH1cblx0fVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
