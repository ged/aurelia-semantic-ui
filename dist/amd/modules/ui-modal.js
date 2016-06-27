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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXYSxzREFEWix1Q0FBaUIsQ0FBQyxHQUFFLHFCQUFVLGVBQVYsRUFBMEIsS0FBN0IsQ0FBakIsNEJBQ00sTUFBTSxnQkFBTixrQ0FBMkM7Ozs7Ozs7QUFNakQsYUFBVztBQUNWLEtBQUcsS0FBSyxPQUFMLENBQUgsQ0FBa0IsS0FBbEIsR0FEVTtHQUFYOztBQUtBLGdCQUFlLFFBQWYsRUFBMEI7QUFDekIsT0FBSyxRQUFMLEVBQWdCO0FBQ2YsU0FBSyxJQUFMLEdBRGU7SUFBaEIsTUFFTztBQUNOLFNBQUssSUFBTCxHQURNO0lBRlA7R0FERDs7QUFTQSxTQUFPO0FBQ04sS0FBRyxLQUFLLE9BQUwsQ0FBSCxDQUFrQixLQUFsQixDQUF5QixNQUF6QixFQURNO0dBQVA7O0FBS0EsU0FBTztBQUNOLEtBQUcsS0FBSyxPQUFMLENBQUgsQ0FBa0IsS0FBbEIsQ0FBeUIsTUFBekIsRUFETTtHQUFQOztFQXpCTTs7O1VBRW1CIiwiZmlsZSI6Im1vZHVsZXMvdWktbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIE1vZGFsIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL21vZGFsLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1tb2RhbGAgKVxuZXhwb3J0IGNsYXNzIFVJTW9kYWxBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlVG9nZ2xlIGFjdGl2ZSA9IGZhbHNlO1xuXG5cblxuXHRhdHRhY2hlZCgpIHtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5tb2RhbCgpO1xuXHR9XG5cblxuXHRhY3RpdmVDaGFuZ2VkKCBuZXdWYWx1ZSApIHtcblx0XHRpZiAoIG5ld1ZhbHVlICkge1xuXHRcdFx0dGhpcy5zaG93KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaGlkZSgpO1xuXHRcdH1cblx0fVxuXG5cblx0c2hvdygpIHtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5tb2RhbCggJ3Nob3cnICk7XG5cdH1cblxuXG5cdGhpZGUoKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkubW9kYWwoICdoaWRlJyApO1xuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
