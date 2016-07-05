define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Popup - http://semantic-ui.com/modules/popup.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUIPopupAttribute = exports.SemanticUIPopupElement = undefined;

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

	var _dec, _class, _dec2, _dec3, _class2, _desc, _value, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

	let SemanticUIPopupElement = exports.SemanticUIPopupElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }popup`), _dec(_class = class SemanticUIPopupElement extends _uiBase.SemanticUIElement {}) || _class);
	let SemanticUIPopupAttribute = exports.SemanticUIPopupAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }popup`), _dec3 = (0, _uiBase.bindableEnum)(..._constants.constants.VALID_SIZES), _dec2(_class2 = (_class3 = class SemanticUIPopupAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'title', _descriptor, this), _initDefineProp(this, 'content', _descriptor2, this), _initDefineProp(this, 'html', _descriptor3, this), _initDefineProp(this, 'variation', _descriptor4, this), _initDefineProp(this, 'selector', _descriptor5, this), _initDefineProp(this, 'position', _descriptor6, this), _initDefineProp(this, 'transition', _descriptor7, this), _initDefineProp(this, 'size', _descriptor8, this), _initDefineProp(this, 'inline', _descriptor9, this), _temp;
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

		positionChanged(newValue, oldValue) {
			this.logger.debug(`Position changed to: ${ this.position }`);
			this.configure();
		}

		transitionChanged(newValue, oldValue) {
			this.logger.debug(`Transition changed to: ${ this.transition }`);
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
			if (this.position) {
				options.position = this.position;
			}
			if (this.transition) {
				options.transition = this.transition;
			}

			options.variation = this.makeVariation();

			this.logger.debug("Configuring popup with options: ", options);
			$(this.element).popup(options);
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'title', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return null;
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, 'content', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return null;
		}
	}), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, 'html', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return null;
		}
	}), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, 'variation', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return null;
		}
	}), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, 'selector', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return null;
		}
	}), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, 'position', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return null;
		}
	}), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, 'transition', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return null;
		}
	}), _descriptor8 = _applyDecoratedDescriptor(_class3.prototype, 'size', [_dec3], {
		enumerable: true,
		initializer: null
	}), _descriptor9 = _applyDecoratedDescriptor(_class3.prototype, 'inline', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	})), _class3)) || _class2);
});
//# sourceMappingURL=data:application/json;base64,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QUFaOztBQUVBLE9BQUssS0FBSyxJQUFWLEVBQWlCO0FBQUUsWUFBUSxLQUFLLElBQUwsQ0FBVSxNQUFWLENBQWlCLEdBQWpCLENBQVI7QUFBZ0M7QUFDbkQsT0FBSyxLQUFLLFNBQVYsRUFBc0I7QUFBRSxZQUFRLFFBQVEsS0FBSyxTQUFMLENBQWUsTUFBZixDQUFzQixHQUF0QixDQUFoQjtBQUE0Qzs7QUFFcEUsVUFBTyxNQUFNLElBQU4sRUFBUDtBQUNBOztBQUdELGNBQVk7QUFDWCxPQUFJLFVBQVUsRUFBZDs7QUFFQSxPQUFLLEtBQUssS0FBVixFQUFrQjtBQUFFLFlBQVEsS0FBUixHQUFnQixLQUFLLEtBQXJCO0FBQTRCO0FBQ2hELE9BQUssS0FBSyxPQUFWLEVBQW9CO0FBQUUsWUFBUSxPQUFSLEdBQWtCLEtBQUssT0FBdkI7QUFBZ0M7QUFDdEQsT0FBSyxLQUFLLElBQVYsRUFBaUI7QUFBRSxZQUFRLElBQVIsR0FBZSxLQUFLLElBQXBCO0FBQTBCO0FBQzdDLE9BQUssS0FBSyxRQUFWLEVBQXFCO0FBQUUsWUFBUSxRQUFSLEdBQW1CLEtBQUssUUFBeEI7QUFBa0M7QUFDekQsT0FBSyxLQUFLLFVBQVYsRUFBdUI7QUFBRSxZQUFRLFVBQVIsR0FBcUIsS0FBSyxVQUExQjtBQUFzQzs7QUFFL0QsV0FBUSxTQUFSLEdBQW9CLEtBQUssYUFBTCxFQUFwQjs7QUFFQSxRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLGtDQUFuQixFQUF1RCxPQUF2RDtBQUNBLEtBQUcsS0FBSyxPQUFSLEVBQWtCLEtBQWxCLENBQXlCLE9BQXpCO0FBQ0E7O0FBaEdnRSxFOzs7VUFFL0MsSTs7Ozs7VUFDRSxJOzs7OztVQUNILEk7Ozs7O1VBQ0ssSTs7Ozs7VUFDRCxJOzs7OztVQUNBLEk7Ozs7O1VBQ0UsSTs7Ozs7Ozs7VUFHRSxLIiwiZmlsZSI6Im1vZHVsZXMvdWktcG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFBvcHVwIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3BvcHVwLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7U2VtYW50aWNVSUVsZW1lbnQsIFNlbWFudGljVUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWJhc2UnO1xuaW1wb3J0IHtpbmplY3QsIGN1c3RvbUF0dHJpYnV0ZSwgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGJpbmRpbmdNb2RlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21FbGVtZW50KCBgJHtjb25zdGFudHMuZWxlbWVudFByZWZpeH1wb3B1cGAgKVxuZXhwb3J0IGNsYXNzIFNlbWFudGljVUlQb3B1cEVsZW1lbnQgZXh0ZW5kcyBTZW1hbnRpY1VJRWxlbWVudCB7fVxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fXBvcHVwYCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSVBvcHVwQXR0cmlidXRlIGV4dGVuZHMgU2VtYW50aWNVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlIHRpdGxlID0gbnVsbDtcblx0QGJpbmRhYmxlIGNvbnRlbnQgPSBudWxsO1xuXHRAYmluZGFibGUgaHRtbCA9IG51bGw7XG5cdEBiaW5kYWJsZSB2YXJpYXRpb24gPSBudWxsO1xuXHRAYmluZGFibGUgc2VsZWN0b3IgPSBudWxsO1xuXHRAYmluZGFibGUgcG9zaXRpb24gPSBudWxsO1xuXHRAYmluZGFibGUgdHJhbnNpdGlvbiA9IG51bGw7XG5cblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX1NJWkVTICkgc2l6ZTtcblx0QGJpbmRhYmxlVG9nZ2xlIGlubGluZSA9IGZhbHNlO1xuXG5cblx0YmluZCggLi4uYXJncyApIHtcblx0XHQvLyBEb24ndCBhZGQgJ3VpIHBvcHVwJyB0byB0aGUgY2xhc3Mgb2YgdGhlIGVsZW1lbnQ7IGFkZCBhbiBlbGVtZW50IGZvciB0aGUgcG9wdXAgY29udGVudFxuXHRcdC8vIHN1cGVyLmJpbmQoIC4uLmFyZ3MgKTtcblx0fVxuXG5cdHRpdGxlQ2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgVGl0bGUgY2hhbmdlZCB0bzogJHt0aGlzLnRpdGxlfWAgKTtcblx0XHR0aGlzLmNvbmZpZ3VyZSgpO1xuXHR9XG5cblx0Y29udGVudENoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYENvbnRlbnQgY2hhbmdlZCB0bzogJHt0aGlzLmNvbnRlbnR9YCApO1xuXHRcdHRoaXMuY29uZmlndXJlKCk7XG5cdH1cblxuXHRodG1sQ2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgSFRNTCBjaGFuZ2VkIHRvOiAke3RoaXMuaHRtbH1gICk7XG5cdFx0dGhpcy5jb25maWd1cmUoKTtcblx0fVxuXG5cdHNpemVDaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBTaXplIGNoYW5nZWQgdG86ICR7dGhpcy5zaXplfWAgKTtcblx0XHR0aGlzLmNvbmZpZ3VyZSgpO1xuXHR9XG5cblx0cG9zaXRpb25DaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBQb3NpdGlvbiBjaGFuZ2VkIHRvOiAke3RoaXMucG9zaXRpb259YCApO1xuXHRcdHRoaXMuY29uZmlndXJlKCk7XG5cdH1cblxuXHR0cmFuc2l0aW9uQ2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgVHJhbnNpdGlvbiBjaGFuZ2VkIHRvOiAke3RoaXMudHJhbnNpdGlvbn1gICk7XG5cdFx0dGhpcy5jb25maWd1cmUoKTtcblx0fVxuXG4gICAgYXR0YWNoZWQoKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQWN0aXZhdGluZyBwb3B1cCBmb3IgXCIsIHRoaXMuZWxlbWVudCApO1xuXHRcdGxldCBwb3B1cEVsID0gbnVsbDtcblxuXHRcdC8vIEFkZCB0aGUgcG9wdXAgZWxlbWVudCBpZiBpdCdzIG5vdCBzcGVjaWZpZWQgb3IgbWFya2VkIGFzIGlubGluZVxuXHRcdGlmICggdGhpcy5zZWxlY3RvciApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIlNlbGVjdG9yIG1vZGUuXCIgKTtcblx0XHRcdHBvcHVwRWwgPSAkKCB0aGlzLnNlbGVjdG9yICkuZ2V0KCAwICk7XG5cdFx0XHRwb3B1cEVsLmNsYXNzTGlzdC5hZGQoICd1aScsICdwb3B1cCcgKVxuXHRcdFx0JCggdGhpcy5lbGVtZW50ICkucG9wdXAoeyBwb3B1cDogcG9wdXBFbCwgdGFyZ2V0OiB0aGlzLmVsZW1lbnQgfSk7XG5cdFx0fSBlbHNlIGlmICggdGhpcy5pbmxpbmUgKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJJbmxpbmUgbW9kZS5cIiApO1xuXHRcdFx0JCggdGhpcy5lbGVtZW50ICkucG9wdXAoeyBpbmxpbmU6IHRydWUgfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkFwcGVuZGluZyBhbiBlbGVtZW50IGZvciB0aGUgcG9wdXAuXCIgKTtcblx0XHRcdHBvcHVwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHRcdFx0cG9wdXBFbC5jbGFzc0xpc3QuYWRkKCAndWknLCAncG9wdXAnICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIHBvcHVwRWwsIHRoaXMuZWxlbWVudC5uZXh0U2libGluZyApO1xuXHQgICAgICAgIHRoaXMuY29uZmlndXJlKCk7XG5cdFx0fVxuXG4gICAgfVxuXG5cblx0bWFrZVZhcmlhdGlvbigpIHtcblx0XHRsZXQgdmFsdWUgPSAnJztcblxuXHRcdGlmICggdGhpcy5zaXplICkgeyB2YWx1ZSA9IHRoaXMuc2l6ZS5jb25jYXQoJyAnKSAgfVxuXHRcdGlmICggdGhpcy52YXJpYXRpb24gKSB7IHZhbHVlID0gdmFsdWUgKyB0aGlzLnZhcmlhdGlvbi5jb25jYXQoJyAnKSB9XG5cblx0XHRyZXR1cm4gdmFsdWUudHJpbSgpO1xuXHR9XG5cblxuXHRjb25maWd1cmUoKSB7XG5cdFx0bGV0IG9wdGlvbnMgPSB7fTtcblxuXHRcdGlmICggdGhpcy50aXRsZSApIHsgb3B0aW9ucy50aXRsZSA9IHRoaXMudGl0bGUgfVxuXHRcdGlmICggdGhpcy5jb250ZW50ICkgeyBvcHRpb25zLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQgfVxuXHRcdGlmICggdGhpcy5odG1sICkgeyBvcHRpb25zLmh0bWwgPSB0aGlzLmh0bWwgfVxuXHRcdGlmICggdGhpcy5wb3NpdGlvbiApIHsgb3B0aW9ucy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24gfVxuXHRcdGlmICggdGhpcy50cmFuc2l0aW9uICkgeyBvcHRpb25zLnRyYW5zaXRpb24gPSB0aGlzLnRyYW5zaXRpb24gfVxuXG5cdFx0b3B0aW9ucy52YXJpYXRpb24gPSB0aGlzLm1ha2VWYXJpYXRpb24oKTtcblxuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkNvbmZpZ3VyaW5nIHBvcHVwIHdpdGggb3B0aW9uczogXCIsIG9wdGlvbnMgKTtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5wb3B1cCggb3B0aW9ucyApO1xuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
