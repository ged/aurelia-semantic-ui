define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Dimmer - http://semantic-ui.com/modules/dimmer.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIDimmerAttribute = undefined;

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

	let UIDimmerAttribute = exports.UIDimmerAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }dimmer`), _dec(_class = (_class2 = class UIDimmerAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'active', _descriptor, this), _initDefineProp(this, 'options', _descriptor2, this), _temp;
		}

		bind(...args) {
			super.bind(...args);

			if (this.active) {
				this.logger.debug("Dimmer is starting out active.");
				this.element.classList.add('active');
			};
		}

		attached() {
			this.logger.debug("Setting up dimmer for ", this.element, " with options: ", this.options);
			$(this.element).dimmer(this.options);
		}

		show() {
			$(this.element).dimmer('show');
		}

		hide() {
			$(this.element).dimmer('hide');
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'active', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'options', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return {};
		}
	})), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktZGltbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBV2EsaUIsV0FBQSxpQixXQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLFNBQTlDLEMsMkJBQ00sTUFBTSxpQkFBTixrQ0FBNEM7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBTWxELE9BQU0sR0FBRyxJQUFULEVBQWdCO0FBQ2YsU0FBTSxJQUFOLENBQVksR0FBRyxJQUFmOztBQUVBLE9BQUssS0FBSyxNQUFWLEVBQW1CO0FBQ2xCLFNBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsZ0NBQW5CO0FBQ0EsU0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUE0QixRQUE1QjtBQUNBO0FBQ0Q7O0FBR0UsYUFBVztBQUNiLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsd0JBQW5CLEVBQTZDLEtBQUssT0FBbEQsRUFBMkQsaUJBQTNELEVBQThFLEtBQUssT0FBbkY7QUFDTSxLQUFHLEtBQUssT0FBUixFQUFrQixNQUFsQixDQUEwQixLQUFLLE9BQS9CO0FBQ0g7O0FBR0osU0FBTztBQUNOLEtBQUcsS0FBSyxPQUFSLEVBQWtCLE1BQWxCLENBQTBCLE1BQTFCO0FBQ0E7O0FBR0QsU0FBTztBQUNOLEtBQUcsS0FBSyxPQUFSLEVBQWtCLE1BQWxCLENBQTBCLE1BQTFCO0FBQ0E7O0FBN0JpRCxFOzs7VUFFL0IsSzs7Ozs7VUFDQyxFIiwiZmlsZSI6Im1vZHVsZXMvdWktZGltbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBEaW1tZXIgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvZGltbWVyLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGUsIGJpbmRpbmdNb2RlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9ZGltbWVyYCApXG5leHBvcnQgY2xhc3MgVUlEaW1tZXJBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlIGFjdGl2ZSA9IGZhbHNlO1xuXHRAYmluZGFibGUgb3B0aW9ucyA9IHt9O1xuXG5cblx0YmluZCggLi4uYXJncyApIHtcblx0XHRzdXBlci5iaW5kKCAuLi5hcmdzICk7XG5cblx0XHRpZiAoIHRoaXMuYWN0aXZlICkge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiRGltbWVyIGlzIHN0YXJ0aW5nIG91dCBhY3RpdmUuXCIgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnYWN0aXZlJyApO1xuXHRcdH07XG5cdH1cblxuXG4gICAgYXR0YWNoZWQoKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiU2V0dGluZyB1cCBkaW1tZXIgZm9yIFwiLCB0aGlzLmVsZW1lbnQsIFwiIHdpdGggb3B0aW9uczogXCIsIHRoaXMub3B0aW9ucyApO1xuICAgICAgICAkKCB0aGlzLmVsZW1lbnQgKS5kaW1tZXIoIHRoaXMub3B0aW9ucyApO1xuICAgIH1cblxuXG5cdHNob3coKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkuZGltbWVyKCAnc2hvdycgKTtcblx0fVxuXG5cblx0aGlkZSgpIHtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5kaW1tZXIoICdoaWRlJyApO1xuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
