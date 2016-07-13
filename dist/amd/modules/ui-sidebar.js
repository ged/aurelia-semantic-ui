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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktc2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVlhLGtCLFdBQUEsa0IsV0FEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixVQUE5QyxDLDJCQUNNLE1BQU0sa0JBQU4sa0NBQTZDO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQU1uRCxhQUFXO0FBQ1YsUUFBSyxNQUFMLENBQVksS0FBWixDQUFtQixvQkFBbkIsRUFBeUMsS0FBSyxPQUE5QztBQUNBLE9BQUssS0FBSyxPQUFWLEVBQW9CO0FBQ25CLFFBQUksWUFBWSxFQUFHLEtBQUssT0FBUixFQUFrQixNQUFsQixDQUEwQixLQUFLLE9BQS9CLEVBQXlDLEtBQXpDLEVBQWhCO0FBQ0EsTUFBRyxLQUFLLE9BQVIsRUFBa0IsT0FBbEIsQ0FBMEIsRUFBRSxTQUFTLFNBQVgsRUFBMUI7QUFDQTs7QUFFRCxPQUFLLEtBQUssTUFBVixFQUFtQjtBQUNsQixRQUFJLFlBQVksRUFBRyxLQUFLLE9BQVIsRUFBa0IsTUFBbEIsQ0FBMEIsS0FBSyxNQUEvQixFQUF3QyxLQUF4QyxFQUFoQjtBQUNBLE1BQUcsS0FBSyxPQUFSLEVBQWtCLE9BQWxCLENBQTJCLGVBQTNCLEVBQTRDLFNBQTVDO0FBQ0E7QUFDRDs7QUFHRCxXQUFTO0FBQ1IsS0FBRyxLQUFLLE9BQVIsRUFBa0IsT0FBbEIsQ0FBMkIsUUFBM0I7QUFDQTs7QUF0QmtELEUiLCJmaWxlIjoibW9kdWxlcy91aS1zaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBTaWRlYmFyIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3NpZGViYXIuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1VJQXR0cmlidXRlfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuXG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9c2lkZWJhcmAgKVxuZXhwb3J0IGNsYXNzIFVJU2lkZWJhckF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgY29udGV4dDtcblx0QGJpbmRhYmxlIGV2ZW50cztcblxuXG5cdGF0dGFjaGVkKCkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIlNpZGViYXIgYXR0YWNoZWQ6IFwiLCB0aGlzLmVsZW1lbnQgKTtcblx0XHRpZiAoIHRoaXMuY29udGV4dCApIHtcblx0XHRcdGxldCBjb250ZXh0RWwgPSAkKCB0aGlzLmVsZW1lbnQgKS5wYXJlbnQoIHRoaXMuY29udGV4dCApLmZpcnN0KCk7XG5cdFx0XHQkKCB0aGlzLmVsZW1lbnQgKS5zaWRlYmFyKHsgY29udGV4dDogY29udGV4dEVsIH0pO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5ldmVudHMgKSB7XG5cdFx0XHRsZXQgY29udGV4dEVsID0gJCggdGhpcy5lbGVtZW50ICkucGFyZW50KCB0aGlzLmV2ZW50cyApLmZpcnN0KCk7XG5cdFx0XHQkKCB0aGlzLmVsZW1lbnQgKS5zaWRlYmFyKCAnYXR0YWNoIGV2ZW50cycsIGNvbnRleHRFbCApO1xuXHRcdH1cblx0fVxuXG5cblx0dG9nZ2xlKCkge1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLnNpZGViYXIoICd0b2dnbGUnICk7XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
