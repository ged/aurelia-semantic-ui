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

			return _temp = super(...args), _initDefineProp(this, 'shown', _descriptor, this), _temp;
		}

		attached() {
			$(this.element).modal();
		}

		shownChanged(newValue, oldValue) {
			this.logger.debug("Shown attribute changed to: ", newValue);
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

		onShow(callback) {
			$(this.element).modal({ onShow: callback });
		}
		onVisible(callback) {
			$(this.element).modal({ onVisible: callback });
		}
		onHide(callback) {
			$(this.element).modal({ onHide: callback });
		}
		onHidden(callback) {
			$(this.element).modal({ onHidden: callback });
		}
		onApprove(callback) {
			$(this.element).modal({ onApprove: callback });
		}
		onDeny(callback) {
			$(this.element).modal({ onDeny: callback });
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'shown', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	})), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVNhLGdCLFdBQUEsZ0IsV0FEWix1Q0FBa0IsSUFBRSxxQkFBVSxlQUFnQixRQUE5QyxDLDJCQUNNLE1BQU0sZ0JBQU4sa0NBQTJDO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUtqRCxhQUFXO0FBQ1YsS0FBRyxLQUFLLE9BQVIsRUFBa0IsS0FBbEI7QUFDQTs7QUFHRCxlQUFjLFFBQWQsRUFBd0IsUUFBeEIsRUFBbUM7QUFDbEMsUUFBSyxNQUFMLENBQVksS0FBWixDQUFtQiw4QkFBbkIsRUFBbUQsUUFBbkQ7QUFDQSxPQUFLLFFBQUwsRUFBZ0I7QUFDZixTQUFLLElBQUw7QUFDQSxJQUZELE1BRU87QUFDTixTQUFLLElBQUw7QUFDQTtBQUNEOztBQUdELFNBQU87QUFDTixLQUFHLEtBQUssT0FBUixFQUFrQixLQUFsQixDQUF5QixNQUF6QjtBQUNBOztBQUdELFNBQU87QUFDTixLQUFHLEtBQUssT0FBUixFQUFrQixLQUFsQixDQUF5QixNQUF6QjtBQUNBOztBQUdELFNBQVEsUUFBUixFQUFtQjtBQUNsQixLQUFHLEtBQUssT0FBUixFQUFrQixLQUFsQixDQUF3QixFQUFFLFFBQVEsUUFBVixFQUF4QjtBQUNBO0FBQ0QsWUFBVyxRQUFYLEVBQXNCO0FBQ3JCLEtBQUcsS0FBSyxPQUFSLEVBQWtCLEtBQWxCLENBQXdCLEVBQUUsV0FBVyxRQUFiLEVBQXhCO0FBQ0E7QUFDRCxTQUFRLFFBQVIsRUFBbUI7QUFDbEIsS0FBRyxLQUFLLE9BQVIsRUFBa0IsS0FBbEIsQ0FBd0IsRUFBRSxRQUFRLFFBQVYsRUFBeEI7QUFDQTtBQUNELFdBQVUsUUFBVixFQUFxQjtBQUNwQixLQUFHLEtBQUssT0FBUixFQUFrQixLQUFsQixDQUF3QixFQUFFLFVBQVUsUUFBWixFQUF4QjtBQUNBO0FBQ0QsWUFBVyxRQUFYLEVBQXNCO0FBQ3JCLEtBQUcsS0FBSyxPQUFSLEVBQWtCLEtBQWxCLENBQXdCLEVBQUUsV0FBVyxRQUFiLEVBQXhCO0FBQ0E7QUFDRCxTQUFRLFFBQVIsRUFBbUI7QUFDbEIsS0FBRyxLQUFLLE9BQVIsRUFBa0IsS0FBbEIsQ0FBd0IsRUFBRSxRQUFRLFFBQVYsRUFBeEI7QUFDQTs7QUEvQ2dELEU7OztVQUUvQixLIiwiZmlsZSI6Im1vZHVsZXMvdWktbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIE1vZGFsIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL21vZGFsLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7YmluZGFibGUsIGN1c3RvbUF0dHJpYnV0ZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1tb2RhbGAgKVxuZXhwb3J0IGNsYXNzIFVJTW9kYWxBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlIHNob3duID0gZmFsc2U7XG5cblxuXHRhdHRhY2hlZCgpIHtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5tb2RhbCgpO1xuXHR9XG5cblxuXHRzaG93bkNoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJTaG93biBhdHRyaWJ1dGUgY2hhbmdlZCB0bzogXCIsIG5ld1ZhbHVlICk7XG5cdFx0aWYgKCBuZXdWYWx1ZSApIHtcblx0XHRcdHRoaXMuc2hvdygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmhpZGUoKTtcblx0XHR9XG5cdH1cblxuXG5cdHNob3coKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkubW9kYWwoICdzaG93JyApO1xuXHR9XG5cblxuXHRoaWRlKCkge1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLm1vZGFsKCAnaGlkZScgKTtcblx0fVxuXG5cblx0b25TaG93KCBjYWxsYmFjayApIHtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5tb2RhbCh7IG9uU2hvdzogY2FsbGJhY2sgfSk7XG5cdH1cblx0b25WaXNpYmxlKCBjYWxsYmFjayApIHtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5tb2RhbCh7IG9uVmlzaWJsZTogY2FsbGJhY2sgfSk7XG5cdH1cblx0b25IaWRlKCBjYWxsYmFjayApIHtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5tb2RhbCh7IG9uSGlkZTogY2FsbGJhY2sgfSk7XG5cdH1cblx0b25IaWRkZW4oIGNhbGxiYWNrICkge1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLm1vZGFsKHsgb25IaWRkZW46IGNhbGxiYWNrIH0pO1xuXHR9XG5cdG9uQXBwcm92ZSggY2FsbGJhY2sgKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkubW9kYWwoeyBvbkFwcHJvdmU6IGNhbGxiYWNrIH0pO1xuXHR9XG5cdG9uRGVueSggY2FsbGJhY2sgKSB7XG5cdFx0JCggdGhpcy5lbGVtZW50ICkubW9kYWwoeyBvbkRlbnk6IGNhbGxiYWNrIH0pO1xuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
