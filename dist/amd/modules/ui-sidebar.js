define(['exports', '../constants', 'aurelia-framework', '../ui-base'], function (exports, _constants, _aureliaFramework, _uiBase) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Sidebar - http://semantic-ui.com/modules/sidebar.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUISidebarAttribute = exports.SemanticUISidebarElement = undefined;

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

	var _dec, _class, _dec2, _class2, _desc, _value, _class3, _descriptor, _descriptor2;

	let SemanticUISidebarElement = exports.SemanticUISidebarElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }sidebar`), _dec(_class = class SemanticUISidebarElement extends _uiBase.SemanticUIElement {}) || _class);
	let SemanticUISidebarAttribute = exports.SemanticUISidebarAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }sidebar`), _dec2(_class2 = (_class3 = class SemanticUISidebarAttribute extends _uiBase.SemanticUIAttribute {
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

	}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'context', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, 'events', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	})), _class3)) || _class2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktc2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBVWEsd0IsV0FBQSx3QixXQURaLHFDQUFnQixJQUFFLHFCQUFVLGFBQWMsVUFBMUMsQyxnQkFDTSxNQUFNLHdCQUFOLG1DQUF5RCxFO0tBR25ELDBCLFdBQUEsMEIsWUFEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixVQUE5QyxDLDZCQUNNLE1BQU0sMEJBQU4scUNBQTZEO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQU1uRSxhQUFXO0FBQ1YsUUFBSyxNQUFMLENBQVksS0FBWixDQUFtQixvQkFBbkIsRUFBeUMsS0FBSyxPQUE5QztBQUNBLE9BQUssS0FBSyxPQUFWLEVBQW9CO0FBQ25CLFFBQUksWUFBWSxFQUFHLEtBQUssT0FBUixFQUFrQixNQUFsQixDQUEwQixLQUFLLE9BQS9CLEVBQXlDLEtBQXpDLEVBQWhCO0FBQ0EsTUFBRyxLQUFLLE9BQVIsRUFBa0IsT0FBbEIsQ0FBMEIsRUFBRSxTQUFTLFNBQVgsRUFBMUI7QUFDQTs7QUFFRCxPQUFLLEtBQUssTUFBVixFQUFtQjtBQUNsQixRQUFJLFlBQVksRUFBRyxLQUFLLE9BQVIsRUFBa0IsTUFBbEIsQ0FBMEIsS0FBSyxNQUEvQixFQUF3QyxLQUF4QyxFQUFoQjtBQUNBLE1BQUcsS0FBSyxPQUFSLEVBQWtCLE9BQWxCLENBQTJCLGVBQTNCLEVBQTRDLFNBQTVDO0FBQ0E7QUFDRDs7QUFHRCxXQUFTO0FBQ1IsS0FBRyxLQUFLLE9BQVIsRUFBa0IsT0FBbEIsQ0FBMkIsUUFBM0I7QUFDQTs7QUF0QmtFLEUiLCJmaWxlIjoibW9kdWxlcy91aS1zaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBTaWRlYmFyIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3NpZGViYXIuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1NlbWFudGljVUlFbGVtZW50LCBTZW1hbnRpY1VJQXR0cmlidXRlfSBmcm9tICcuLi91aS1iYXNlJztcblxuXG5AY3VzdG9tRWxlbWVudCggYCR7Y29uc3RhbnRzLmVsZW1lbnRQcmVmaXh9c2lkZWJhcmAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlTaWRlYmFyRWxlbWVudCBleHRlbmRzIFNlbWFudGljVUlFbGVtZW50IHt9XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9c2lkZWJhcmAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlTaWRlYmFyQXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlIGNvbnRleHQ7XG5cdEBiaW5kYWJsZSBldmVudHM7XG5cblxuXHRhdHRhY2hlZCgpIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJTaWRlYmFyIGF0dGFjaGVkOiBcIiwgdGhpcy5lbGVtZW50ICk7XG5cdFx0aWYgKCB0aGlzLmNvbnRleHQgKSB7XG5cdFx0XHRsZXQgY29udGV4dEVsID0gJCggdGhpcy5lbGVtZW50ICkucGFyZW50KCB0aGlzLmNvbnRleHQgKS5maXJzdCgpO1xuXHRcdFx0JCggdGhpcy5lbGVtZW50ICkuc2lkZWJhcih7IGNvbnRleHQ6IGNvbnRleHRFbCB9KTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuZXZlbnRzICkge1xuXHRcdFx0bGV0IGNvbnRleHRFbCA9ICQoIHRoaXMuZWxlbWVudCApLnBhcmVudCggdGhpcy5ldmVudHMgKS5maXJzdCgpO1xuXHRcdFx0JCggdGhpcy5lbGVtZW50ICkuc2lkZWJhciggJ2F0dGFjaCBldmVudHMnLCBjb250ZXh0RWwgKTtcblx0XHR9XG5cdH1cblxuXG5cdHRvZ2dsZSgpIHtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5zaWRlYmFyKCAndG9nZ2xlJyApO1xuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
