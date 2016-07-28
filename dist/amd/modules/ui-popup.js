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

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

	let UIPopupAttribute = exports.UIPopupAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }popup`), _dec2 = (0, _uiAttribute.bindableEnum)(..._constants.constants.VALID_SIZES), _dec(_class = (_class2 = class UIPopupAttribute extends _uiAttribute.UIAttribute {
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
	}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'position', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return null;
		}
	}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'transition', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function () {
			return null;
		}
	}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'size', [_dec2], {
		enumerable: true,
		initializer: null
	}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'inline', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	})), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,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QUFnQztBQUNuRCxPQUFLLEtBQUssU0FBVixFQUFzQjtBQUFFLFlBQVEsUUFBUSxLQUFLLFNBQUwsQ0FBZSxNQUFmLENBQXNCLEdBQXRCLENBQWhCO0FBQTRDOztBQUVwRSxVQUFPLE1BQU0sSUFBTixFQUFQO0FBQ0E7O0FBR0QsY0FBWTtBQUNYLE9BQUksVUFBVSxFQUFkOztBQUVBLE9BQUssS0FBSyxLQUFWLEVBQWtCO0FBQUUsWUFBUSxLQUFSLEdBQWdCLEtBQUssS0FBckI7QUFBNEI7QUFDaEQsT0FBSyxLQUFLLE9BQVYsRUFBb0I7QUFBRSxZQUFRLE9BQVIsR0FBa0IsS0FBSyxPQUF2QjtBQUFnQztBQUN0RCxPQUFLLEtBQUssSUFBVixFQUFpQjtBQUFFLFlBQVEsSUFBUixHQUFlLEtBQUssSUFBcEI7QUFBMEI7QUFDN0MsT0FBSyxLQUFLLFFBQVYsRUFBcUI7QUFBRSxZQUFRLFFBQVIsR0FBbUIsS0FBSyxRQUF4QjtBQUFrQztBQUN6RCxPQUFLLEtBQUssVUFBVixFQUF1QjtBQUFFLFlBQVEsVUFBUixHQUFxQixLQUFLLFVBQTFCO0FBQXNDOztBQUUvRCxXQUFRLFNBQVIsR0FBb0IsS0FBSyxhQUFMLEVBQXBCOztBQUVBLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBbUIsa0NBQW5CLEVBQXVELE9BQXZEO0FBQ0EsS0FBRyxLQUFLLE9BQVIsRUFBa0IsS0FBbEIsQ0FBeUIsT0FBekI7QUFDQTs7QUFoR2dELEU7OztVQUUvQixJOzs7OztVQUNFLEk7Ozs7O1VBQ0gsSTs7Ozs7VUFDSyxJOzs7OztVQUNELEk7Ozs7O1VBQ0EsSTs7Ozs7VUFDRSxJOzs7Ozs7OztVQUdFLEsiLCJmaWxlIjoibW9kdWxlcy91aS1wb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogUG9wdXAgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL21vZHVsZXMvcG9wdXAuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7aW5qZWN0LCBjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fXBvcHVwYCApXG5leHBvcnQgY2xhc3MgVUlQb3B1cEF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgdGl0bGUgPSBudWxsO1xuXHRAYmluZGFibGUgY29udGVudCA9IG51bGw7XG5cdEBiaW5kYWJsZSBodG1sID0gbnVsbDtcblx0QGJpbmRhYmxlIHZhcmlhdGlvbiA9IG51bGw7XG5cdEBiaW5kYWJsZSBzZWxlY3RvciA9IG51bGw7XG5cdEBiaW5kYWJsZSBwb3NpdGlvbiA9IG51bGw7XG5cdEBiaW5kYWJsZSB0cmFuc2l0aW9uID0gbnVsbDtcblxuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfU0laRVMgKSBzaXplO1xuXHRAYmluZGFibGVUb2dnbGUgaW5saW5lID0gZmFsc2U7XG5cblxuXHRiaW5kKCAuLi5hcmdzICkge1xuXHRcdC8vIERvbid0IGFkZCAndWkgcG9wdXAnIHRvIHRoZSBjbGFzcyBvZiB0aGUgZWxlbWVudDsgYWRkIGFuIGVsZW1lbnQgZm9yIHRoZSBwb3B1cCBjb250ZW50XG5cdFx0Ly8gc3VwZXIuYmluZCggLi4uYXJncyApO1xuXHR9XG5cblx0dGl0bGVDaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBUaXRsZSBjaGFuZ2VkIHRvOiAke3RoaXMudGl0bGV9YCApO1xuXHRcdHRoaXMuY29uZmlndXJlKCk7XG5cdH1cblxuXHRjb250ZW50Q2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgQ29udGVudCBjaGFuZ2VkIHRvOiAke3RoaXMuY29udGVudH1gICk7XG5cdFx0dGhpcy5jb25maWd1cmUoKTtcblx0fVxuXG5cdGh0bWxDaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBIVE1MIGNoYW5nZWQgdG86ICR7dGhpcy5odG1sfWAgKTtcblx0XHR0aGlzLmNvbmZpZ3VyZSgpO1xuXHR9XG5cblx0c2l6ZUNoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYFNpemUgY2hhbmdlZCB0bzogJHt0aGlzLnNpemV9YCApO1xuXHRcdHRoaXMuY29uZmlndXJlKCk7XG5cdH1cblxuXHRwb3NpdGlvbkNoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYFBvc2l0aW9uIGNoYW5nZWQgdG86ICR7dGhpcy5wb3NpdGlvbn1gICk7XG5cdFx0dGhpcy5jb25maWd1cmUoKTtcblx0fVxuXG5cdHRyYW5zaXRpb25DaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBUcmFuc2l0aW9uIGNoYW5nZWQgdG86ICR7dGhpcy50cmFuc2l0aW9ufWAgKTtcblx0XHR0aGlzLmNvbmZpZ3VyZSgpO1xuXHR9XG5cbiAgICBhdHRhY2hlZCgpIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJBY3RpdmF0aW5nIHBvcHVwIGZvciBcIiwgdGhpcy5lbGVtZW50ICk7XG5cdFx0bGV0IHBvcHVwRWwgPSBudWxsO1xuXG5cdFx0Ly8gQWRkIHRoZSBwb3B1cCBlbGVtZW50IGlmIGl0J3Mgbm90IHNwZWNpZmllZCBvciBtYXJrZWQgYXMgaW5saW5lXG5cdFx0aWYgKCB0aGlzLnNlbGVjdG9yICkge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiU2VsZWN0b3IgbW9kZS5cIiApO1xuXHRcdFx0cG9wdXBFbCA9ICQoIHRoaXMuc2VsZWN0b3IgKS5nZXQoIDAgKTtcblx0XHRcdHBvcHVwRWwuY2xhc3NMaXN0LmFkZCggJ3VpJywgJ3BvcHVwJyApXG5cdFx0XHQkKCB0aGlzLmVsZW1lbnQgKS5wb3B1cCh7IHBvcHVwOiBwb3B1cEVsLCB0YXJnZXQ6IHRoaXMuZWxlbWVudCB9KTtcblx0XHR9IGVsc2UgaWYgKCB0aGlzLmlubGluZSApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIklubGluZSBtb2RlLlwiICk7XG5cdFx0XHQkKCB0aGlzLmVsZW1lbnQgKS5wb3B1cCh7IGlubGluZTogdHJ1ZSB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQXBwZW5kaW5nIGFuIGVsZW1lbnQgZm9yIHRoZSBwb3B1cC5cIiApO1xuXHRcdFx0cG9wdXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdFx0XHRwb3B1cEVsLmNsYXNzTGlzdC5hZGQoICd1aScsICdwb3B1cCcgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSggcG9wdXBFbCwgdGhpcy5lbGVtZW50Lm5leHRTaWJsaW5nICk7XG5cdCAgICAgICAgdGhpcy5jb25maWd1cmUoKTtcblx0XHR9XG5cbiAgICB9XG5cblxuXHRtYWtlVmFyaWF0aW9uKCkge1xuXHRcdGxldCB2YWx1ZSA9ICcnO1xuXG5cdFx0aWYgKCB0aGlzLnNpemUgKSB7IHZhbHVlID0gdGhpcy5zaXplLmNvbmNhdCgnICcpICB9XG5cdFx0aWYgKCB0aGlzLnZhcmlhdGlvbiApIHsgdmFsdWUgPSB2YWx1ZSArIHRoaXMudmFyaWF0aW9uLmNvbmNhdCgnICcpIH1cblxuXHRcdHJldHVybiB2YWx1ZS50cmltKCk7XG5cdH1cblxuXG5cdGNvbmZpZ3VyZSgpIHtcblx0XHRsZXQgb3B0aW9ucyA9IHt9O1xuXG5cdFx0aWYgKCB0aGlzLnRpdGxlICkgeyBvcHRpb25zLnRpdGxlID0gdGhpcy50aXRsZSB9XG5cdFx0aWYgKCB0aGlzLmNvbnRlbnQgKSB7IG9wdGlvbnMuY29udGVudCA9IHRoaXMuY29udGVudCB9XG5cdFx0aWYgKCB0aGlzLmh0bWwgKSB7IG9wdGlvbnMuaHRtbCA9IHRoaXMuaHRtbCB9XG5cdFx0aWYgKCB0aGlzLnBvc2l0aW9uICkgeyBvcHRpb25zLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiB9XG5cdFx0aWYgKCB0aGlzLnRyYW5zaXRpb24gKSB7IG9wdGlvbnMudHJhbnNpdGlvbiA9IHRoaXMudHJhbnNpdGlvbiB9XG5cblx0XHRvcHRpb25zLnZhcmlhdGlvbiA9IHRoaXMubWFrZVZhcmlhdGlvbigpO1xuXG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQ29uZmlndXJpbmcgcG9wdXAgd2l0aCBvcHRpb25zOiBcIiwgb3B0aW9ucyApO1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLnBvcHVwKCBvcHRpb25zICk7XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
