define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Search - http://semantic-ui.com/modules/search.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UISearchAttribute = undefined;

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

	let UISearchAttribute = exports.UISearchAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }search`), _dec(_class = (_class2 = class UISearchAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'options', _descriptor, this), _temp;
		}

		attached() {
			this.logger.debug("Activating search on ", this.element);
			$(this.element).search(this.options);
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'options', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return {};
		}
	})), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktc2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FTYSxpQixXQUFBLGlCLFdBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsU0FBOUMsQywyQkFDTSxNQUFNLGlCQUFOLGtDQUE0QztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFJbEQsYUFBVztBQUNWLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsdUJBQW5CLEVBQTRDLEtBQUssT0FBakQ7QUFDQSxLQUFHLEtBQUssT0FBUixFQUFrQixNQUFsQixDQUEwQixLQUFLLE9BQS9CO0FBQ0E7O0FBUGlELEU7OztVQUU5QixFIiwiZmlsZSI6Im1vZHVsZXMvdWktc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBTZWFyY2ggLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvc2VhcmNoLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGV9IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1zZWFyY2hgIClcbmV4cG9ydCBjbGFzcyBVSVNlYXJjaEF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgb3B0aW9ucyA9IHt9O1xuXG5cdGF0dGFjaGVkKCkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkFjdGl2YXRpbmcgc2VhcmNoIG9uIFwiLCB0aGlzLmVsZW1lbnQgKTtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5zZWFyY2goIHRoaXMub3B0aW9ucyApO1xuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
