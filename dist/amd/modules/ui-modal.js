define(['exports', '../constants', 'aurelia-framework', '../ui-attribute'], function (exports, _constants, _aureliaFramework, _uiAttribute) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Modal - http://semantic-ui.com/modules/modal.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIModalAttribute = undefined;

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

	var _dec, _class, _desc, _value, _class2, _descriptor;

	let UIModalAttribute = exports.UIModalAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }modal`), _dec(_class = (_class2 = class UIModalAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'active', _descriptor, this), _temp;
		}

		attached() {
			$(this.element).modal();
		}

		activeChanged(newValue) {
			if (newValue) {
				this.show();
			} else {
				this.hide();
			}
		}

		show() {
			$(this.element).modal('show');
		}

		hide() {
			$(this.element).modal('hide');
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'active', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	})), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXYSxnQixXQUFBLGdCLFdBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsUUFBOUMsQywyQkFDTSxNQUFNLGdCQUFOLGtDQUEyQztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFNakQsYUFBVztBQUNWLEtBQUcsS0FBSyxPQUFSLEVBQWtCLEtBQWxCO0FBQ0E7O0FBR0QsZ0JBQWUsUUFBZixFQUEwQjtBQUN6QixPQUFLLFFBQUwsRUFBZ0I7QUFDZixTQUFLLElBQUw7QUFDQSxJQUZELE1BRU87QUFDTixTQUFLLElBQUw7QUFDQTtBQUNEOztBQUdELFNBQU87QUFDTixLQUFHLEtBQUssT0FBUixFQUFrQixLQUFsQixDQUF5QixNQUF6QjtBQUNBOztBQUdELFNBQU87QUFDTixLQUFHLEtBQUssT0FBUixFQUFrQixLQUFsQixDQUF5QixNQUF6QjtBQUNBOztBQTNCZ0QsRTs7O1VBRXhCLEsiLCJmaWxlIjoibW9kdWxlcy91aS1tb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogTW9kYWwgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvbW9kYWwuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fW1vZGFsYCApXG5leHBvcnQgY2xhc3MgVUlNb2RhbEF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVUb2dnbGUgYWN0aXZlID0gZmFsc2U7XG5cblxuXG5cdGF0dGFjaGVkKCkge1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLm1vZGFsKCk7XG5cdH1cblxuXG5cdGFjdGl2ZUNoYW5nZWQoIG5ld1ZhbHVlICkge1xuXHRcdGlmICggbmV3VmFsdWUgKSB7XG5cdFx0XHR0aGlzLnNob3coKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0fVxuXHR9XG5cblxuXHRzaG93KCkge1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLm1vZGFsKCAnc2hvdycgKTtcblx0fVxuXG5cblx0aGlkZSgpIHtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5tb2RhbCggJ2hpZGUnICk7XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
