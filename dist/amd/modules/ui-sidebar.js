define(['exports', '../constants', 'aurelia-framework', '../ui-attribute'], function (exports, _constants, _aureliaFramework, _uiAttribute) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Sidebar - http://semantic-ui.com/modules/sidebar.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UISidebarAttribute = undefined;

	function _initDefineProp(target, property, descriptor, context) {
		if (!descriptor) return;
		Object.defineProperty(target, property, {
			enumerable: descriptor.enumerable,
			configurable: descriptor.configurable,
			writable: descriptor.writable,
			value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
		});
	}

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
		var desc = {};
		Object['ke' + 'ys'](descriptor).forEach(function (key) {
			desc[key] = descriptor[key];
		});
		desc.enumerable = !!desc.enumerable;
		desc.configurable = !!desc.configurable;

		if ('value' in desc || desc.initializer) {
			desc.writable = true;
		}

		desc = decorators.slice().reverse().reduce(function (desc, decorator) {
			return decorator(target, property, desc) || desc;
		}, desc);

		if (context && desc.initializer !== void 0) {
			desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
			desc.initializer = undefined;
		}

		if (desc.initializer === void 0) {
			Object['define' + 'Property'](target, property, desc);
			desc = null;
		}

		return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
		throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2;

	let UISidebarAttribute = exports.UISidebarAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }sidebar`), _dec(_class = (_class2 = class UISidebarAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'context', _descriptor, this), _initDefineProp(this, 'events', _descriptor2, this), _temp;
		}

		attached() {
			this.logger.debug("Sidebar attached: ", this.element);
			if (this.context) {
				let contextEl = $(this.element).parent(this.context).first();
				$(this.element).sidebar({ context: contextEl });
			}

			if (this.events) {
				let contextEl = $(this.element).parent(this.events).first();
				$(this.element).sidebar('attach events', contextEl);
			}
		}

		toggle() {
			$(this.element).sidebar('toggle');
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'context', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'events', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktc2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBVWEsa0IsV0FBQSxrQixXQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLFVBQTlDLEMsMkJBQ00sTUFBTSxrQkFBTixrQ0FBNkM7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBTW5ELGFBQVc7QUFDVixRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLG9CQUFuQixFQUF5QyxLQUFLLE9BQTlDO0FBQ0EsT0FBSyxLQUFLLE9BQVYsRUFBb0I7QUFDbkIsUUFBSSxZQUFZLEVBQUcsS0FBSyxPQUFSLEVBQWtCLE1BQWxCLENBQTBCLEtBQUssT0FBL0IsRUFBeUMsS0FBekMsRUFBaEI7QUFDQSxNQUFHLEtBQUssT0FBUixFQUFrQixPQUFsQixDQUEwQixFQUFFLFNBQVMsU0FBWCxFQUExQjtBQUNBOztBQUVELE9BQUssS0FBSyxNQUFWLEVBQW1CO0FBQ2xCLFFBQUksWUFBWSxFQUFHLEtBQUssT0FBUixFQUFrQixNQUFsQixDQUEwQixLQUFLLE1BQS9CLEVBQXdDLEtBQXhDLEVBQWhCO0FBQ0EsTUFBRyxLQUFLLE9BQVIsRUFBa0IsT0FBbEIsQ0FBMkIsZUFBM0IsRUFBNEMsU0FBNUM7QUFDQTtBQUNEOztBQUdELFdBQVM7QUFDUixLQUFHLEtBQUssT0FBUixFQUFrQixPQUFsQixDQUEyQixRQUEzQjtBQUNBOztBQXRCa0QsRSIsImZpbGUiOiJtb2R1bGVzL3VpLXNpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFNpZGViYXIgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvc2lkZWJhci5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7VUlBdHRyaWJ1dGV9IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1zaWRlYmFyYCApXG5leHBvcnQgY2xhc3MgVUlTaWRlYmFyQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSBjb250ZXh0O1xuXHRAYmluZGFibGUgZXZlbnRzO1xuXG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiU2lkZWJhciBhdHRhY2hlZDogXCIsIHRoaXMuZWxlbWVudCApO1xuXHRcdGlmICggdGhpcy5jb250ZXh0ICkge1xuXHRcdFx0bGV0IGNvbnRleHRFbCA9ICQoIHRoaXMuZWxlbWVudCApLnBhcmVudCggdGhpcy5jb250ZXh0ICkuZmlyc3QoKTtcblx0XHRcdCQoIHRoaXMuZWxlbWVudCApLnNpZGViYXIoeyBjb250ZXh0OiBjb250ZXh0RWwgfSk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLmV2ZW50cyApIHtcblx0XHRcdGxldCBjb250ZXh0RWwgPSAkKCB0aGlzLmVsZW1lbnQgKS5wYXJlbnQoIHRoaXMuZXZlbnRzICkuZmlyc3QoKTtcblx0XHRcdCQoIHRoaXMuZWxlbWVudCApLnNpZGViYXIoICdhdHRhY2ggZXZlbnRzJywgY29udGV4dEVsICk7XG5cdFx0fVxuXHR9XG5cblxuXHR0b2dnbGUoKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkuc2lkZWJhciggJ3RvZ2dsZScgKTtcblx0fVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
