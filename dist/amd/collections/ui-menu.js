define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Menu - http://semantic-ui.com/collections/menu.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIMenuItemAttribute = exports.UIMenuAttribute = undefined;

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

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _dec3, _class4, _desc2, _value2, _class5, _descriptor3;

	let UIMenuAttribute = exports.UIMenuAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }menu`), _dec2 = (0, _aureliaFramework.children)('[ui-menu-item]'), _dec(_class = (_class2 = class UIMenuAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'router', _descriptor, this), _initDefineProp(this, 'items', _descriptor2, this), _temp;
		}

		isSubmenu() {
			let parent = this.element.parentElement;
			if (!parent) {
				return false;
			}

			let classes = parent.classList;
			if (!classes) {
				return false;
			}

			return classes.contains('item') || classes.contains('menu');
		}

		bind() {
			// Don't super for sub-menus because they shouldn't get the 'ui'
			if (this.isSubmenu()) {
				this.element.classList.add('menu');
			} else {
				super.bind();
			}
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'router', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'items', [_dec2], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
	let UIMenuItemAttribute = exports.UIMenuItemAttribute = (_dec3 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }menu-item`), _dec3(_class4 = (_class5 = class UIMenuItemAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp2;

			return _temp2 = super(...args), _initDefineProp(this, 'active', _descriptor3, this), _temp2;
		}

		bind() {
			// no super
			this.element.classList.add('item');
		}

	}, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, 'active', [_uiAttribute.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	})), _class5)) || _class4);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLW1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXYSxlLFdBQUEsZSxXQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLE9BQTlDLEMsVUFJQyxnQ0FBVSxnQkFBVixDLDJCQUhLLE1BQU0sZUFBTixrQ0FBMEM7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBTWhELGNBQVk7QUFDWCxPQUFJLFNBQVMsS0FBSyxPQUFMLENBQWEsYUFBMUI7QUFDQSxPQUFLLENBQUMsTUFBTixFQUFlO0FBQUUsV0FBTyxLQUFQO0FBQWU7O0FBRWhDLE9BQUksVUFBVSxPQUFPLFNBQXJCO0FBQ0EsT0FBSyxDQUFDLE9BQU4sRUFBZ0I7QUFBRSxXQUFPLEtBQVA7QUFBZTs7QUFFakMsVUFBUSxRQUFRLFFBQVIsQ0FBaUIsTUFBakIsS0FBNEIsUUFBUSxRQUFSLENBQWlCLE1BQWpCLENBQXBDO0FBQ0E7O0FBR0QsU0FBTzs7QUFFTixPQUFLLEtBQUssU0FBTCxFQUFMLEVBQXdCO0FBQ3ZCLFNBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBNEIsTUFBNUI7QUFDQSxJQUZELE1BRU87QUFDTixVQUFNLElBQU47QUFDQTtBQUNEOztBQXhCK0MsRTs7Ozs7OztLQWlDcEMsbUIsV0FBQSxtQixZQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLFlBQTlDLEMsNkJBQ00sTUFBTSxtQkFBTixrQ0FBOEM7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBSXBELFNBQU87O0FBRU4sUUFBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUE0QixNQUE1QjtBQUNBOztBQVBtRCxFOzs7VUFFM0IsSyIsImZpbGUiOiJjb2xsZWN0aW9ucy91aS1tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBNZW51IC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9tZW51Lmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2luamVjdCwgY3VzdG9tQXR0cmlidXRlLCBjaGlsZHJlbiwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1tZW51YCApXG5leHBvcnQgY2xhc3MgVUlNZW51QXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSByb3V0ZXI7XG5cdEBjaGlsZHJlbiggJ1t1aS1tZW51LWl0ZW1dJyApIGl0ZW1zO1xuXG5cblx0aXNTdWJtZW51KCkge1xuXHRcdGxldCBwYXJlbnQgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRpZiAoICFwYXJlbnQgKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdFx0bGV0IGNsYXNzZXMgPSBwYXJlbnQuY2xhc3NMaXN0XG5cdFx0aWYgKCAhY2xhc3NlcyApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0XHRyZXR1cm4gKGNsYXNzZXMuY29udGFpbnMoJ2l0ZW0nKSB8fCBjbGFzc2VzLmNvbnRhaW5zKCdtZW51JykpXG5cdH1cblxuXG5cdGJpbmQoKSB7XG5cdFx0Ly8gRG9uJ3Qgc3VwZXIgZm9yIHN1Yi1tZW51cyBiZWNhdXNlIHRoZXkgc2hvdWxkbid0IGdldCB0aGUgJ3VpJ1xuXHRcdGlmICggdGhpcy5pc1N1Ym1lbnUoKSApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnbWVudScgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3VwZXIuYmluZCgpO1xuXHRcdH1cblx0fVxuXG59XG5cblxuLyoqXG4gKiB1aS1tZW51LWl0ZW1cbiAqL1xuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1tZW51LWl0ZW1gIClcbmV4cG9ydCBjbGFzcyBVSU1lbnVJdGVtQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZVRvZ2dsZSBhY3RpdmUgPSBmYWxzZTtcblxuXHRiaW5kKCkge1xuXHRcdC8vIG5vIHN1cGVyXG5cdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdpdGVtJyApO1xuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
