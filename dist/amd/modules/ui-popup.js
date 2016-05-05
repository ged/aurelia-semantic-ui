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
//# sourceMappingURL=data:application/json;base64,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QUssU0FBTCxDQUFlLE1BQWYsQ0FBc0IsR0FBdEIsQ0FBUixDQUFWO0lBQXRCOztBQUVBLFVBQU8sTUFBTSxJQUFOLEVBQVAsQ0FOZTtHQUFoQjs7QUFTQSxjQUFZO0FBQ1gsT0FBSSxVQUFVLEVBQVYsQ0FETzs7QUFHWCxPQUFLLEtBQUssS0FBTCxFQUFhO0FBQUUsWUFBUSxLQUFSLEdBQWdCLEtBQUssS0FBTCxDQUFsQjtJQUFsQjtBQUNBLE9BQUssS0FBSyxPQUFMLEVBQWU7QUFBRSxZQUFRLE9BQVIsR0FBa0IsS0FBSyxPQUFMLENBQXBCO0lBQXBCO0FBQ0EsT0FBSyxLQUFLLElBQUwsRUFBWTtBQUFFLFlBQVEsSUFBUixHQUFlLEtBQUssSUFBTCxDQUFqQjtJQUFqQjs7QUFFQSxXQUFRLFNBQVIsR0FBb0IsS0FBSyxhQUFMLEVBQXBCLENBUFc7O0FBU1gsS0FBRyxLQUFLLE9BQUwsQ0FBSCxDQUFrQixLQUFsQixDQUF5QixPQUF6QixFQVRXO0dBQVo7O0VBckVNOzs7VUFFWTs7Ozs7VUFDRTs7Ozs7VUFDSDs7Ozs7VUFDSzs7Ozs7VUFDRDs7Ozs7Ozs7VUFHSSIsImZpbGUiOiJtb2R1bGVzL3VpLXBvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBQb3B1cCAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9wb3B1cC5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtpbmplY3QsIGN1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGUsIGJpbmRpbmdNb2RlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9cG9wdXBgIClcbmV4cG9ydCBjbGFzcyBVSVBvcHVwQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSB0aXRsZSA9IG51bGw7XG5cdEBiaW5kYWJsZSBjb250ZW50ID0gbnVsbDtcblx0QGJpbmRhYmxlIGh0bWwgPSBudWxsO1xuXHRAYmluZGFibGUgdmFyaWF0aW9uID0gbnVsbDtcblx0QGJpbmRhYmxlIHNlbGVjdG9yID0gbnVsbDtcblxuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfU0laRVMgKSBzaXplO1xuXHRAYmluZGFibGVUb2dnbGUgaW5saW5lID0gZmFsc2U7XG5cblxuXHRiaW5kKCAuLi5hcmdzICkge1xuXHRcdC8vIERvbid0IGFkZCAndWkgcG9wdXAnIHRvIHRoZSBjbGFzcyBvZiB0aGUgZWxlbWVudDsgYWRkIGFuIGVsZW1lbnQgZm9yIHRoZSBwb3B1cCBjb250ZW50XG5cdFx0Ly8gc3VwZXIuYmluZCggLi4uYXJncyApO1xuXHR9XG5cblx0dGl0bGVDaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBUaXRsZSBjaGFuZ2VkIHRvOiAke3RoaXMudGl0bGV9YCApO1xuXHRcdHRoaXMuY29uZmlndXJlKCk7XG5cdH1cblxuXHRjb250ZW50Q2hhbmdlZCggbmV3VmFsdWUsIG9sZFZhbHVlICkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgQ29udGVudCBjaGFuZ2VkIHRvOiAke3RoaXMuY29udGVudH1gICk7XG5cdFx0dGhpcy5jb25maWd1cmUoKTtcblx0fVxuXG5cdGh0bWxDaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBIVE1MIGNoYW5nZWQgdG86ICR7dGhpcy5odG1sfWAgKTtcblx0XHR0aGlzLmNvbmZpZ3VyZSgpO1xuXHR9XG5cblx0c2l6ZUNoYW5nZWQoIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYFNpemUgY2hhbmdlZCB0bzogJHt0aGlzLnNpemV9YCApO1xuXHRcdHRoaXMuY29uZmlndXJlKCk7XG5cdH1cblxuICAgIGF0dGFjaGVkKCkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBcIkFjdGl2YXRpbmcgcG9wdXAgZm9yIFwiLCB0aGlzLmVsZW1lbnQgKTtcblx0XHRsZXQgcG9wdXBFbCA9IG51bGw7XG5cblx0XHQvLyBBZGQgdGhlIHBvcHVwIGVsZW1lbnQgaWYgaXQncyBub3Qgc3BlY2lmaWVkIG9yIG1hcmtlZCBhcyBpbmxpbmVcblx0XHRpZiAoIHRoaXMuc2VsZWN0b3IgKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJTZWxlY3RvciBtb2RlLlwiICk7XG5cdFx0XHRwb3B1cEVsID0gJCggdGhpcy5zZWxlY3RvciApLmdldCggMCApO1xuXHRcdFx0cG9wdXBFbC5jbGFzc0xpc3QuYWRkKCAndWknLCAncG9wdXAnIClcblx0XHRcdCQoIHRoaXMuZWxlbWVudCApLnBvcHVwKHsgcG9wdXA6IHBvcHVwRWwsIHRhcmdldDogdGhpcy5lbGVtZW50IH0pO1xuXHRcdH0gZWxzZSBpZiAoIHRoaXMuaW5saW5lICkge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiSW5saW5lIG1vZGUuXCIgKTtcblx0XHRcdCQoIHRoaXMuZWxlbWVudCApLnBvcHVwKHsgaW5saW5lOiB0cnVlIH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJBcHBlbmRpbmcgYW4gZWxlbWVudCBmb3IgdGhlIHBvcHVwLlwiICk7XG5cdFx0XHRwb3B1cEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblx0XHRcdHBvcHVwRWwuY2xhc3NMaXN0LmFkZCggJ3VpJywgJ3BvcHVwJyApO1xuXHRcdFx0dGhpcy5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBwb3B1cEVsLCB0aGlzLmVsZW1lbnQubmV4dFNpYmxpbmcgKTtcblx0ICAgICAgICB0aGlzLmNvbmZpZ3VyZSgpO1xuXHRcdH1cblxuICAgIH1cblxuXHRtYWtlVmFyaWF0aW9uKCkge1xuXHRcdGxldCB2YWx1ZSA9ICcnO1xuXG5cdFx0aWYgKCB0aGlzLnNpemUgKSB7IHZhbHVlID0gdGhpcy5zaXplLmNvbmNhdCgnICcpICB9XG5cdFx0aWYgKCB0aGlzLnZhcmlhdGlvbiApIHsgdmFsdWUgPSB2YWx1ZSArIHRoaXMudmFyaWF0aW9uLmNvbmNhdCgnICcpIH1cblxuXHRcdHJldHVybiB2YWx1ZS50cmltKCk7XG5cdH1cblxuXHRjb25maWd1cmUoKSB7XG5cdFx0bGV0IG9wdGlvbnMgPSB7fTtcblxuXHRcdGlmICggdGhpcy50aXRsZSApIHsgb3B0aW9ucy50aXRsZSA9IHRoaXMudGl0bGUgfVxuXHRcdGlmICggdGhpcy5jb250ZW50ICkgeyBvcHRpb25zLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQgfVxuXHRcdGlmICggdGhpcy5odG1sICkgeyBvcHRpb25zLmh0bWwgPSB0aGlzLmh0bWwgfVxuXG5cdFx0b3B0aW9ucy52YXJpYXRpb24gPSB0aGlzLm1ha2VWYXJpYXRpb24oKTtcblxuXHRcdCQoIHRoaXMuZWxlbWVudCApLnBvcHVwKCBvcHRpb25zICk7XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
