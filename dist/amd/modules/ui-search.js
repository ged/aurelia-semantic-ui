define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Search - http://semantic-ui.com/modules/search.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUISearchAttribute = exports.SemanticUISearchElement = undefined;

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

	var _dec, _class, _dec2, _class2, _desc, _value, _class3, _descriptor;

	let SemanticUISearchElement = exports.SemanticUISearchElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }search`), _dec(_class = class SemanticUISearchElement extends _uiBase.SemanticUIElement {}) || _class);
	let SemanticUISearchAttribute = exports.SemanticUISearchAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }search`), _dec2(_class2 = (_class3 = class SemanticUISearchAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'options', _descriptor, this), _temp;
		}

		attached() {
			this.logger.debug("Activating search on ", this.element);
			$(this.element).search(this.options);
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'options', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return {};
		}
	})), _class3)) || _class2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktc2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FTYSx1QixXQUFBLHVCLFdBRFoscUNBQWdCLElBQUUscUJBQVUsYUFBYyxTQUExQyxDLGdCQUNNLE1BQU0sdUJBQU4sbUNBQXdELEU7S0FHbEQseUIsV0FBQSx5QixZQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLFNBQTlDLEMsNkJBQ00sTUFBTSx5QkFBTixxQ0FBNEQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBSWxFLGFBQVc7QUFDVixRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLHVCQUFuQixFQUE0QyxLQUFLLE9BQWpEO0FBQ0EsS0FBRyxLQUFLLE9BQVIsRUFBa0IsTUFBbEIsQ0FBMEIsS0FBSyxPQUEvQjtBQUNBOztBQVBpRSxFOzs7VUFFOUMsRSIsImZpbGUiOiJtb2R1bGVzL3VpLXNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogU2VhcmNoIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3NlYXJjaC5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1NlbWFudGljVUlFbGVtZW50LCBTZW1hbnRpY1VJQXR0cmlidXRlfSBmcm9tICcuLi91aS1iYXNlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tRWxlbWVudCggYCR7Y29uc3RhbnRzLmVsZW1lbnRQcmVmaXh9c2VhcmNoYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSVNlYXJjaEVsZW1lbnQgZXh0ZW5kcyBTZW1hbnRpY1VJRWxlbWVudCB7fVxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fXNlYXJjaGAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlTZWFyY2hBdHRyaWJ1dGUgZXh0ZW5kcyBTZW1hbnRpY1VJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgb3B0aW9ucyA9IHt9O1xuXG5cdGF0dGFjaGVkKCkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkFjdGl2YXRpbmcgc2VhcmNoIG9uIFwiLCB0aGlzLmVsZW1lbnQgKTtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5zZWFyY2goIHRoaXMub3B0aW9ucyApO1xuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
