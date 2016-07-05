define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Dimmer - http://semantic-ui.com/modules/dimmer.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUIDimmerAttribute = exports.SemanticUIDimmerElement = undefined;

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

	let SemanticUIDimmerElement = exports.SemanticUIDimmerElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }dimmer`), _dec(_class = class SemanticUIDimmerElement extends _uiBase.SemanticUIElement {}) || _class);
	let SemanticUIDimmerAttribute = exports.SemanticUIDimmerAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }dimmer`), _dec2(_class2 = (_class3 = class SemanticUIDimmerAttribute extends _uiBase.SemanticUIAttribute {
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

	}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'active', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, 'options', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return {};
		}
	})), _class3)) || _class2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktZGltbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FTYSx1QixXQUFBLHVCLFdBRFoscUNBQWdCLElBQUUscUJBQVUsYUFBYyxTQUExQyxDLGdCQUNNLE1BQU0sdUJBQU4sbUNBQXdELEU7S0FHbEQseUIsV0FBQSx5QixZQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLFNBQTlDLEMsNkJBQ00sTUFBTSx5QkFBTixxQ0FBNEQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBTWxFLE9BQU0sR0FBRyxJQUFULEVBQWdCO0FBQ2YsU0FBTSxJQUFOLENBQVksR0FBRyxJQUFmOztBQUVBLE9BQUssS0FBSyxNQUFWLEVBQW1CO0FBQ2xCLFNBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsZ0NBQW5CO0FBQ0EsU0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUE0QixRQUE1QjtBQUNBO0FBQ0Q7O0FBR0UsYUFBVztBQUNiLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsd0JBQW5CLEVBQTZDLEtBQUssT0FBbEQsRUFBMkQsaUJBQTNELEVBQThFLEtBQUssT0FBbkY7QUFDTSxLQUFHLEtBQUssT0FBUixFQUFrQixNQUFsQixDQUEwQixLQUFLLE9BQS9CO0FBQ0g7O0FBR0osU0FBTztBQUNOLEtBQUcsS0FBSyxPQUFSLEVBQWtCLE1BQWxCLENBQTBCLE1BQTFCO0FBQ0E7O0FBR0QsU0FBTztBQUNOLEtBQUcsS0FBSyxPQUFSLEVBQWtCLE1BQWxCLENBQTBCLE1BQTFCO0FBQ0E7O0FBN0JpRSxFOzs7VUFFL0MsSzs7Ozs7VUFDQyxFIiwiZmlsZSI6Im1vZHVsZXMvdWktZGltbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBEaW1tZXIgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvZGltbWVyLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7U2VtYW50aWNVSUVsZW1lbnQsIFNlbWFudGljVUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWJhc2UnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21FbGVtZW50KCBgJHtjb25zdGFudHMuZWxlbWVudFByZWZpeH1kaW1tZXJgIClcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1VJRGltbWVyRWxlbWVudCBleHRlbmRzIFNlbWFudGljVUlFbGVtZW50IHt9XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9ZGltbWVyYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSURpbW1lckF0dHJpYnV0ZSBleHRlbmRzIFNlbWFudGljVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSBhY3RpdmUgPSBmYWxzZTtcblx0QGJpbmRhYmxlIG9wdGlvbnMgPSB7fTtcblxuXG5cdGJpbmQoIC4uLmFyZ3MgKSB7XG5cdFx0c3VwZXIuYmluZCggLi4uYXJncyApO1xuXG5cdFx0aWYgKCB0aGlzLmFjdGl2ZSApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkRpbW1lciBpcyBzdGFydGluZyBvdXQgYWN0aXZlLlwiICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2FjdGl2ZScgKTtcblx0XHR9O1xuXHR9XG5cblxuICAgIGF0dGFjaGVkKCkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIlNldHRpbmcgdXAgZGltbWVyIGZvciBcIiwgdGhpcy5lbGVtZW50LCBcIiB3aXRoIG9wdGlvbnM6IFwiLCB0aGlzLm9wdGlvbnMgKTtcbiAgICAgICAgJCggdGhpcy5lbGVtZW50ICkuZGltbWVyKCB0aGlzLm9wdGlvbnMgKTtcbiAgICB9XG5cblxuXHRzaG93KCkge1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLmRpbW1lciggJ3Nob3cnICk7XG5cdH1cblxuXG5cdGhpZGUoKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkuZGltbWVyKCAnaGlkZScgKTtcblx0fVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
