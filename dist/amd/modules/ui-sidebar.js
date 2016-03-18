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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktc2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsYUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0tBWUEsa0JBQWtCOzs7WUFBbEIsa0JBQWtCOztXQUFsQixrQkFBa0I7Ozs7Ozs7Ozs7d0JBQWxCLGtCQUFrQjs7VUFNdEIsb0JBQUc7QUFDVixRQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7QUFDeEQsUUFBSyxJQUFJLENBQUMsT0FBTyxFQUFHO0FBQ25CLFNBQUksU0FBUyxHQUFHLENBQUMsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNqRSxNQUFDLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBQ2xEOztBQUVELFFBQUssSUFBSSxDQUFDLE1BQU0sRUFBRztBQUNsQixTQUFJLFNBQVMsR0FBRyxDQUFDLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDaEUsTUFBQyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxPQUFPLENBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBRSxDQUFDO0tBQ3hEO0lBQ0Q7OztVQUdLLGtCQUFHO0FBQ1IsS0FBQyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxPQUFPLENBQUUsUUFBUSxDQUFFLENBQUM7SUFDdEM7OztrQ0EzQnVCLFFBQVE7Ozs7O2tDQUFSLFFBQVE7Ozs7OzRCQUtwQixrQkFBa0I7QUFBbEIsb0JBQWtCLEdBRDlCLHNCQUpPLGVBQWUsRUFJTCxZQUFZLENBQUUsQ0FDbkIsa0JBQWtCLEtBQWxCLGtCQUFrQjtTQUFsQixrQkFBa0I7aUJBSnZCLFdBQVciLCJmaWxlIjoibW9kdWxlcy91aS1zaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBTaWRlYmFyIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3NpZGViYXIuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1VJQXR0cmlidXRlfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuXG5cbkBjdXN0b21BdHRyaWJ1dGUoICd1aS1zaWRlYmFyJyApXG5leHBvcnQgY2xhc3MgVUlTaWRlYmFyQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSBjb250ZXh0O1xuXHRAYmluZGFibGUgZXZlbnRzO1xuXG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiU2lkZWJhciBhdHRhY2hlZDogXCIsIHRoaXMuZWxlbWVudCApO1xuXHRcdGlmICggdGhpcy5jb250ZXh0ICkge1xuXHRcdFx0bGV0IGNvbnRleHRFbCA9ICQoIHRoaXMuZWxlbWVudCApLnBhcmVudCggdGhpcy5jb250ZXh0ICkuZmlyc3QoKTtcblx0XHRcdCQoIHRoaXMuZWxlbWVudCApLnNpZGViYXIoeyBjb250ZXh0OiBjb250ZXh0RWwgfSk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLmV2ZW50cyApIHtcblx0XHRcdGxldCBjb250ZXh0RWwgPSAkKCB0aGlzLmVsZW1lbnQgKS5wYXJlbnQoIHRoaXMuZXZlbnRzICkuZmlyc3QoKTtcblx0XHRcdCQoIHRoaXMuZWxlbWVudCApLnNpZGViYXIoICdhdHRhY2ggZXZlbnRzJywgY29udGV4dEVsICk7XG5cdFx0fVxuXHR9XG5cblxuXHR0b2dnbGUoKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkuc2lkZWJhciggJ3RvZ2dsZScgKTtcblx0fVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
