
"use strict";

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _constants = require('../constants');

var _aureliaFramework = require('aurelia-framework');

var _uiAttribute = require('../ui-attribute');

var UISidebarAttribute = (function (_UIAttribute) {
	var _instanceInitializers = {};

	_inherits(UISidebarAttribute, _UIAttribute);

	function UISidebarAttribute() {
		_classCallCheck(this, _UISidebarAttribute);

		_get(Object.getPrototypeOf(_UISidebarAttribute.prototype), 'constructor', this).apply(this, arguments);

		_defineDecoratedPropertyDescriptor(this, 'context', _instanceInitializers);

		_defineDecoratedPropertyDescriptor(this, 'events', _instanceInitializers);
	}

	_createDecoratedClass(UISidebarAttribute, [{
		key: 'attached',
		value: function attached() {
			this.logger.debug("Sidebar attached: ", this.element);
			if (this.context) {
				var contextEl = $(this.element).parent(this.context).first();
				$(this.element).sidebar({ context: contextEl });
			}

			if (this.events) {
				var contextEl = $(this.element).parent(this.events).first();
				$(this.element).sidebar('attach events', contextEl);
			}
		}
	}, {
		key: 'toggle',
		value: function toggle() {
			$(this.element).sidebar('toggle');
		}
	}, {
		key: 'context',
		decorators: [_aureliaFramework.bindable],
		initializer: null,
		enumerable: true
	}, {
		key: 'events',
		decorators: [_aureliaFramework.bindable],
		initializer: null,
		enumerable: true
	}], null, _instanceInitializers);

	var _UISidebarAttribute = UISidebarAttribute;
	UISidebarAttribute = (0, _aureliaFramework.customAttribute)('ui-sidebar')(UISidebarAttribute) || UISidebarAttribute;
	return UISidebarAttribute;
})(_uiAttribute.UIAttribute);

exports.UISidebarAttribute = UISidebarAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktc2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O3lCQU1XLGNBQWM7O2dDQUNFLG1CQUFtQjs7MkJBQ2pDLGlCQUFpQjs7SUFJOUIsa0JBQWtCOzs7V0FBbEIsa0JBQWtCOztVQUFsQixrQkFBa0I7Ozs7Ozs7Ozs7dUJBQWxCLGtCQUFrQjs7U0FNdEIsb0JBQUc7QUFDVixPQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7QUFDeEQsT0FBSyxJQUFJLENBQUMsT0FBTyxFQUFHO0FBQ25CLFFBQUksU0FBUyxHQUFHLENBQUMsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNqRSxLQUFDLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ2xEOztBQUVELE9BQUssSUFBSSxDQUFDLE1BQU0sRUFBRztBQUNsQixRQUFJLFNBQVMsR0FBRyxDQUFDLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDaEUsS0FBQyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxPQUFPLENBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBRSxDQUFDO0lBQ3hEO0dBQ0Q7OztTQUdLLGtCQUFHO0FBQ1IsSUFBQyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxPQUFPLENBQUUsUUFBUSxDQUFFLENBQUM7R0FDdEM7Ozs7Ozs7Ozs7Ozs7MkJBdEJXLGtCQUFrQjtBQUFsQixtQkFBa0IsR0FEOUIsdUNBQWlCLFlBQVksQ0FBRSxDQUNuQixrQkFBa0IsS0FBbEIsa0JBQWtCO1FBQWxCLGtCQUFrQiIsImZpbGUiOiJtb2R1bGVzL3VpLXNpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFNpZGViYXIgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvc2lkZWJhci5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7VUlBdHRyaWJ1dGV9IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggJ3VpLXNpZGViYXInIClcbmV4cG9ydCBjbGFzcyBVSVNpZGViYXJBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlIGNvbnRleHQ7XG5cdEBiaW5kYWJsZSBldmVudHM7XG5cblxuXHRhdHRhY2hlZCgpIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJTaWRlYmFyIGF0dGFjaGVkOiBcIiwgdGhpcy5lbGVtZW50ICk7XG5cdFx0aWYgKCB0aGlzLmNvbnRleHQgKSB7XG5cdFx0XHRsZXQgY29udGV4dEVsID0gJCggdGhpcy5lbGVtZW50ICkucGFyZW50KCB0aGlzLmNvbnRleHQgKS5maXJzdCgpO1xuXHRcdFx0JCggdGhpcy5lbGVtZW50ICkuc2lkZWJhcih7IGNvbnRleHQ6IGNvbnRleHRFbCB9KTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuZXZlbnRzICkge1xuXHRcdFx0bGV0IGNvbnRleHRFbCA9ICQoIHRoaXMuZWxlbWVudCApLnBhcmVudCggdGhpcy5ldmVudHMgKS5maXJzdCgpO1xuXHRcdFx0JCggdGhpcy5lbGVtZW50ICkuc2lkZWJhciggJ2F0dGFjaCBldmVudHMnLCBjb250ZXh0RWwgKTtcblx0XHR9XG5cdH1cblxuXG5cdHRvZ2dsZSgpIHtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5zaWRlYmFyKCAndG9nZ2xlJyApO1xuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
