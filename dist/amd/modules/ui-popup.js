define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Popup - http://semantic-ui.com/modules/popup.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIPopupAttribute = undefined;

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

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

	let UIPopupAttribute = exports.UIPopupAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }popup`), _dec2 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_SIZES), _dec(_class = (_class2 = class UIPopupAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'title', _descriptor, this), _initDefineProp(this, 'content', _descriptor2, this), _initDefineProp(this, 'html', _descriptor3, this), _initDefineProp(this, 'variation', _descriptor4, this), _initDefineProp(this, 'selector', _descriptor5, this), _initDefineProp(this, 'size', _descriptor6, this), _initDefineProp(this, 'inline', _descriptor7, this), _temp;
		}

		bind(...args) {
			// Don't add 'ui popup' to the class of the element; add an element for the popup content
			// super.bind( ...args );
		}

		titleChanged(newValue, oldValue) {
			this.logger.debug(`Title changed to: ${ this.title }`);
			this.configure();
		}

		contentChanged(newValue, oldValue) {
			this.logger.debug(`Content changed to: ${ this.content }`);
			this.configure();
		}

		htmlChanged(newValue, oldValue) {
			this.logger.debug(`HTML changed to: ${ this.html }`);
			this.configure();
		}

		sizeChanged(newValue, oldValue) {
			this.logger.debug(`Size changed to: ${ this.size }`);
			this.configure();
		}

		attached() {
			this.logger.debug("Activating popup for ", this.element);
			let popupEl = null;

			// Add the popup element if it's not specified or marked as inline
			if (this.selector) {
				this.logger.debug("Selector mode.");
				popupEl = $(this.selector).get(0);
				popupEl.classList.add('ui', 'popup');
				$(this.element).popup({ popup: popupEl, target: this.element });
			} else if (this.inline) {
				this.logger.debug("Inline mode.");
				$(this.element).popup({ inline: true });
			} else {
				this.logger.debug("Appending an element for the popup.");
				popupEl = document.createElement('div');
				popupEl.classList.add('ui', 'popup');
				this.element.parentNode.insertBefore(popupEl, this.element.nextSibling);
				this.configure();
			}
		}

		makeVariation() {
			let value = '';

			if (this.size) {
				value = this.size.concat(' ');
			}
			if (this.variation) {
				value = value + this.variation.concat(' ');
			}

			return value.trim();
		}

		configure() {
			let options = {};

			if (this.title) {
				options.title = this.title;
			}
			if (this.content) {
				options.content = this.content;
			}
			if (this.html) {
				options.html = this.html;
			}

			options.variation = this.makeVariation();

			$(this.element).popup(options);
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'title', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return null;
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'content', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return null;
		}
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'html', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return null;
		}
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'variation', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return null;
		}
	}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'selector', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return null;
		}
	}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'size', [_dec2], {
		enumerable: true,
		initializer: null
	}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'inline', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	})), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWktcG9wdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXYSxnQixXQUFBLGdCLFdBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsUUFBOUMsQyxVQVNDLCtCQUFjLEdBQUcscUJBQVUsV0FBM0IsQywyQkFSSyxNQUFNLGdCQUFOLGtDQUEyQztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFZakQsT0FBTSxHQUFHLElBQVQsRUFBZ0I7OztBQUdmOztBQUVELGVBQWMsUUFBZCxFQUF3QixRQUF4QixFQUFtQztBQUNsQyxRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW9CLHNCQUFvQixLQUFLLEtBQU0sR0FBbkQ7QUFDQSxRQUFLLFNBQUw7QUFDQTs7QUFFRCxpQkFBZ0IsUUFBaEIsRUFBMEIsUUFBMUIsRUFBcUM7QUFDcEMsUUFBSyxNQUFMLENBQVksS0FBWixDQUFvQix3QkFBc0IsS0FBSyxPQUFRLEdBQXZEO0FBQ0EsUUFBSyxTQUFMO0FBQ0E7O0FBRUQsY0FBYSxRQUFiLEVBQXVCLFFBQXZCLEVBQWtDO0FBQ2pDLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBb0IscUJBQW1CLEtBQUssSUFBSyxHQUFqRDtBQUNBLFFBQUssU0FBTDtBQUNBOztBQUVELGNBQWEsUUFBYixFQUF1QixRQUF2QixFQUFrQztBQUNqQyxRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW9CLHFCQUFtQixLQUFLLElBQUssR0FBakQ7QUFDQSxRQUFLLFNBQUw7QUFDQTs7QUFFRSxhQUFXO0FBQ2IsUUFBSyxNQUFMLENBQVksS0FBWixDQUFtQix1QkFBbkIsRUFBNEMsS0FBSyxPQUFqRDtBQUNBLE9BQUksVUFBVSxJQUFkOzs7QUFHQSxPQUFLLEtBQUssUUFBVixFQUFxQjtBQUNwQixTQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLGdCQUFuQjtBQUNBLGNBQVUsRUFBRyxLQUFLLFFBQVIsRUFBbUIsR0FBbkIsQ0FBd0IsQ0FBeEIsQ0FBVjtBQUNBLFlBQVEsU0FBUixDQUFrQixHQUFsQixDQUF1QixJQUF2QixFQUE2QixPQUE3QjtBQUNBLE1BQUcsS0FBSyxPQUFSLEVBQWtCLEtBQWxCLENBQXdCLEVBQUUsT0FBTyxPQUFULEVBQWtCLFFBQVEsS0FBSyxPQUEvQixFQUF4QjtBQUNBLElBTEQsTUFLTyxJQUFLLEtBQUssTUFBVixFQUFtQjtBQUN6QixTQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLGNBQW5CO0FBQ0EsTUFBRyxLQUFLLE9BQVIsRUFBa0IsS0FBbEIsQ0FBd0IsRUFBRSxRQUFRLElBQVYsRUFBeEI7QUFDQSxJQUhNLE1BR0E7QUFDTixTQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLHFDQUFuQjtBQUNBLGNBQVUsU0FBUyxhQUFULENBQXdCLEtBQXhCLENBQVY7QUFDQSxZQUFRLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBdUIsSUFBdkIsRUFBNkIsT0FBN0I7QUFDQSxTQUFLLE9BQUwsQ0FBYSxVQUFiLENBQXdCLFlBQXhCLENBQXNDLE9BQXRDLEVBQStDLEtBQUssT0FBTCxDQUFhLFdBQTVEO0FBQ00sU0FBSyxTQUFMO0FBQ047QUFFRTs7QUFFSixrQkFBZ0I7QUFDZixPQUFJLFFBQVEsRUFBWjs7QUFFQSxPQUFLLEtBQUssSUFBVixFQUFpQjtBQUFFLFlBQVEsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixHQUFqQixDQUFSO0FBQWdDO0FBQ25ELE9BQUssS0FBSyxTQUFWLEVBQXNCO0FBQUUsWUFBUSxRQUFRLEtBQUssU0FBTCxDQUFlLE1BQWYsQ0FBc0IsR0FBdEIsQ0FBaEI7QUFBNEM7O0FBRXBFLFVBQU8sTUFBTSxJQUFOLEVBQVA7QUFDQTs7QUFFRCxjQUFZO0FBQ1gsT0FBSSxVQUFVLEVBQWQ7O0FBRUEsT0FBSyxLQUFLLEtBQVYsRUFBa0I7QUFBRSxZQUFRLEtBQVIsR0FBZ0IsS0FBSyxLQUFyQjtBQUE0QjtBQUNoRCxPQUFLLEtBQUssT0FBVixFQUFvQjtBQUFFLFlBQVEsT0FBUixHQUFrQixLQUFLLE9BQXZCO0FBQWdDO0FBQ3RELE9BQUssS0FBSyxJQUFWLEVBQWlCO0FBQUUsWUFBUSxJQUFSLEdBQWUsS0FBSyxJQUFwQjtBQUEwQjs7QUFFN0MsV0FBUSxTQUFSLEdBQW9CLEtBQUssYUFBTCxFQUFwQjs7QUFFQSxLQUFHLEtBQUssT0FBUixFQUFrQixLQUFsQixDQUF5QixPQUF6QjtBQUNBOztBQS9FZ0QsRTs7O1VBRS9CLEk7Ozs7O1VBQ0UsSTs7Ozs7VUFDSCxJOzs7OztVQUNLLEk7Ozs7O1VBQ0QsSTs7Ozs7Ozs7VUFHSSxLIiwiZmlsZSI6Im1vZHVsZXMvdWktcG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFBvcHVwIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3BvcHVwLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZSwgYmluZGluZ01vZGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1wb3B1cGAgKVxuZXhwb3J0IGNsYXNzIFVJUG9wdXBBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlIHRpdGxlID0gbnVsbDtcblx0QGJpbmRhYmxlIGNvbnRlbnQgPSBudWxsO1xuXHRAYmluZGFibGUgaHRtbCA9IG51bGw7XG5cdEBiaW5kYWJsZSB2YXJpYXRpb24gPSBudWxsO1xuXHRAYmluZGFibGUgc2VsZWN0b3IgPSBudWxsO1xuXG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cdEBiaW5kYWJsZVRvZ2dsZSBpbmxpbmUgPSBmYWxzZTtcblxuXG5cdGJpbmQoIC4uLmFyZ3MgKSB7XG5cdFx0Ly8gRG9uJ3QgYWRkICd1aSBwb3B1cCcgdG8gdGhlIGNsYXNzIG9mIHRoZSBlbGVtZW50OyBhZGQgYW4gZWxlbWVudCBmb3IgdGhlIHBvcHVwIGNvbnRlbnRcblx0XHQvLyBzdXBlci5iaW5kKCAuLi5hcmdzICk7XG5cdH1cblxuXHR0aXRsZUNoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYFRpdGxlIGNoYW5nZWQgdG86ICR7dGhpcy50aXRsZX1gICk7XG5cdFx0dGhpcy5jb25maWd1cmUoKTtcblx0fVxuXG5cdGNvbnRlbnRDaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBDb250ZW50IGNoYW5nZWQgdG86ICR7dGhpcy5jb250ZW50fWAgKTtcblx0XHR0aGlzLmNvbmZpZ3VyZSgpO1xuXHR9XG5cblx0aHRtbENoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYEhUTUwgY2hhbmdlZCB0bzogJHt0aGlzLmh0bWx9YCApO1xuXHRcdHRoaXMuY29uZmlndXJlKCk7XG5cdH1cblxuXHRzaXplQ2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgU2l6ZSBjaGFuZ2VkIHRvOiAke3RoaXMuc2l6ZX1gICk7XG5cdFx0dGhpcy5jb25maWd1cmUoKTtcblx0fVxuXG4gICAgYXR0YWNoZWQoKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQWN0aXZhdGluZyBwb3B1cCBmb3IgXCIsIHRoaXMuZWxlbWVudCApO1xuXHRcdGxldCBwb3B1cEVsID0gbnVsbDtcblxuXHRcdC8vIEFkZCB0aGUgcG9wdXAgZWxlbWVudCBpZiBpdCdzIG5vdCBzcGVjaWZpZWQgb3IgbWFya2VkIGFzIGlubGluZVxuXHRcdGlmICggdGhpcy5zZWxlY3RvciApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIlNlbGVjdG9yIG1vZGUuXCIgKTtcblx0XHRcdHBvcHVwRWwgPSAkKCB0aGlzLnNlbGVjdG9yICkuZ2V0KCAwICk7XG5cdFx0XHRwb3B1cEVsLmNsYXNzTGlzdC5hZGQoICd1aScsICdwb3B1cCcgKVxuXHRcdFx0JCggdGhpcy5lbGVtZW50ICkucG9wdXAoeyBwb3B1cDogcG9wdXBFbCwgdGFyZ2V0OiB0aGlzLmVsZW1lbnQgfSk7XG5cdFx0fSBlbHNlIGlmICggdGhpcy5pbmxpbmUgKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJJbmxpbmUgbW9kZS5cIiApO1xuXHRcdFx0JCggdGhpcy5lbGVtZW50ICkucG9wdXAoeyBpbmxpbmU6IHRydWUgfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkFwcGVuZGluZyBhbiBlbGVtZW50IGZvciB0aGUgcG9wdXAuXCIgKTtcblx0XHRcdHBvcHVwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHRcdFx0cG9wdXBFbC5jbGFzc0xpc3QuYWRkKCAndWknLCAncG9wdXAnICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIHBvcHVwRWwsIHRoaXMuZWxlbWVudC5uZXh0U2libGluZyApO1xuXHQgICAgICAgIHRoaXMuY29uZmlndXJlKCk7XG5cdFx0fVxuXG4gICAgfVxuXG5cdG1ha2VWYXJpYXRpb24oKSB7XG5cdFx0bGV0IHZhbHVlID0gJyc7XG5cblx0XHRpZiAoIHRoaXMuc2l6ZSApIHsgdmFsdWUgPSB0aGlzLnNpemUuY29uY2F0KCcgJykgIH1cblx0XHRpZiAoIHRoaXMudmFyaWF0aW9uICkgeyB2YWx1ZSA9IHZhbHVlICsgdGhpcy52YXJpYXRpb24uY29uY2F0KCcgJykgfVxuXG5cdFx0cmV0dXJuIHZhbHVlLnRyaW0oKTtcblx0fVxuXG5cdGNvbmZpZ3VyZSgpIHtcblx0XHRsZXQgb3B0aW9ucyA9IHt9O1xuXG5cdFx0aWYgKCB0aGlzLnRpdGxlICkgeyBvcHRpb25zLnRpdGxlID0gdGhpcy50aXRsZSB9XG5cdFx0aWYgKCB0aGlzLmNvbnRlbnQgKSB7IG9wdGlvbnMuY29udGVudCA9IHRoaXMuY29udGVudCB9XG5cdFx0aWYgKCB0aGlzLmh0bWwgKSB7IG9wdGlvbnMuaHRtbCA9IHRoaXMuaHRtbCB9XG5cblx0XHRvcHRpb25zLnZhcmlhdGlvbiA9IHRoaXMubWFrZVZhcmlhdGlvbigpO1xuXG5cdFx0JCggdGhpcy5lbGVtZW50ICkucG9wdXAoIG9wdGlvbnMgKTtcblx0fVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
