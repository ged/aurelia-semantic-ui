define(['exports', '../constants', '../ui-base', 'aurelia-framework'], function (exports, _constants, _uiBase, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Menu - http://semantic-ui.com/collections/menu.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SemanticUIMenuItemAttribute = exports.SemanticUIMenuItemElement = exports.SemanticUIMenuAttribute = exports.SemanticUIMenuElement = undefined;

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

	var _dec, _class, _dec2, _dec3, _class2, _desc, _value, _class3, _descriptor, _descriptor2, _dec4, _class5, _dec5, _class6, _desc2, _value2, _class7, _descriptor3;

	let SemanticUIMenuElement = exports.SemanticUIMenuElement = (_dec = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }menu`), _dec(_class = class SemanticUIMenuElement extends _uiBase.SemanticUIElement {}) || _class);
	let SemanticUIMenuAttribute = exports.SemanticUIMenuAttribute = (_dec2 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }menu`), _dec3 = (0, _aureliaFramework.children)('[ui-menu-item]'), _dec2(_class2 = (_class3 = class SemanticUIMenuAttribute extends _uiBase.SemanticUIAttribute {
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

	}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'router', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, 'items', [_dec3], {
		enumerable: true,
		initializer: null
	})), _class3)) || _class2);
	let SemanticUIMenuItemElement = exports.SemanticUIMenuItemElement = (_dec4 = (0, _aureliaFramework.customElement)(`${ _constants.constants.elementPrefix }menu-item`), _dec4(_class5 = class SemanticUIMenuItemElement extends _uiBase.SemanticUIElement {}) || _class5);
	let SemanticUIMenuItemAttribute = exports.SemanticUIMenuItemAttribute = (_dec5 = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }menu-item`), _dec5(_class6 = (_class7 = class SemanticUIMenuItemAttribute extends _uiBase.SemanticUIAttribute {
		constructor(...args) {
			var _temp2;

			return _temp2 = super(...args), _initDefineProp(this, 'active', _descriptor3, this), _temp2;
		}

		bind() {
			// no super
			this.element.classList.add('item');
		}

	}, (_descriptor3 = _applyDecoratedDescriptor(_class7.prototype, 'active', [_uiBase.bindableToggle], {
		enumerable: true,
		initializer: function () {
			return false;
		}
	})), _class7)) || _class6);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLW1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVNhLHFCLFdBQUEscUIsV0FEWixxQ0FBZ0IsSUFBRSxxQkFBVSxhQUFjLE9BQTFDLEMsZ0JBQ00sTUFBTSxxQkFBTixtQ0FBc0QsRTtLQUdoRCx1QixXQUFBLHVCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsT0FBOUMsQyxVQUlDLGdDQUFVLGdCQUFWLEMsNkJBSEssTUFBTSx1QkFBTixxQ0FBMEQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBTWhFLGNBQVk7QUFDWCxPQUFJLFNBQVMsS0FBSyxPQUFMLENBQWEsYUFBMUI7QUFDQSxPQUFLLENBQUMsTUFBTixFQUFlO0FBQUUsV0FBTyxLQUFQO0FBQWU7O0FBRWhDLE9BQUksVUFBVSxPQUFPLFNBQXJCO0FBQ0EsT0FBSyxDQUFDLE9BQU4sRUFBZ0I7QUFBRSxXQUFPLEtBQVA7QUFBZTs7QUFFakMsVUFBUSxRQUFRLFFBQVIsQ0FBaUIsTUFBakIsS0FBNEIsUUFBUSxRQUFSLENBQWlCLE1BQWpCLENBQXBDO0FBQ0E7O0FBR0QsU0FBTztBQUNOO0FBQ0EsT0FBSyxLQUFLLFNBQUwsRUFBTCxFQUF3QjtBQUN2QixTQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTRCLE1BQTVCO0FBQ0EsSUFGRCxNQUVPO0FBQ04sVUFBTSxJQUFOO0FBQ0E7QUFDRDs7QUF4QitELEU7Ozs7Ozs7S0FpQ3BELHlCLFdBQUEseUIsWUFEWixxQ0FBZ0IsSUFBRSxxQkFBVSxhQUFjLFlBQTFDLEMsa0JBQ00sTUFBTSx5QkFBTixtQ0FBMEQsRTtLQUdwRCwyQixXQUFBLDJCLFlBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsWUFBOUMsQyw2QkFDTSxNQUFNLDJCQUFOLHFDQUE4RDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFJcEUsU0FBTztBQUNOO0FBQ0EsUUFBSyxPQUFMLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUE0QixNQUE1QjtBQUNBOztBQVBtRSxFOzs7VUFFM0MsSyIsImZpbGUiOiJjb2xsZWN0aW9ucy91aS1tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBNZW51IC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9tZW51Lmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7U2VtYW50aWNVSUVsZW1lbnQsIFNlbWFudGljVUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWJhc2UnO1xuaW1wb3J0IHtpbmplY3QsIGN1c3RvbUF0dHJpYnV0ZSwgY3VzdG9tRWxlbWVudCwgY2hpbGRyZW4sIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21FbGVtZW50KCBgJHtjb25zdGFudHMuZWxlbWVudFByZWZpeH1tZW51YCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSU1lbnVFbGVtZW50IGV4dGVuZHMgU2VtYW50aWNVSUVsZW1lbnQge31cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1tZW51YCApXG5leHBvcnQgY2xhc3MgU2VtYW50aWNVSU1lbnVBdHRyaWJ1dGUgZXh0ZW5kcyBTZW1hbnRpY1VJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgcm91dGVyO1xuXHRAY2hpbGRyZW4oICdbdWktbWVudS1pdGVtXScgKSBpdGVtcztcblxuXG5cdGlzU3VibWVudSgpIHtcblx0XHRsZXQgcGFyZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0aWYgKCAhcGFyZW50ICkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRcdGxldCBjbGFzc2VzID0gcGFyZW50LmNsYXNzTGlzdFxuXHRcdGlmICggIWNsYXNzZXMgKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdFx0cmV0dXJuIChjbGFzc2VzLmNvbnRhaW5zKCdpdGVtJykgfHwgY2xhc3Nlcy5jb250YWlucygnbWVudScpKVxuXHR9XG5cblxuXHRiaW5kKCkge1xuXHRcdC8vIERvbid0IHN1cGVyIGZvciBzdWItbWVudXMgYmVjYXVzZSB0aGV5IHNob3VsZG4ndCBnZXQgdGhlICd1aSdcblx0XHRpZiAoIHRoaXMuaXNTdWJtZW51KCkgKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ21lbnUnICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1cGVyLmJpbmQoKTtcblx0XHR9XG5cdH1cblxufVxuXG5cbi8qKlxuICogdWktbWVudS1pdGVtXG4gKi9cbkBjdXN0b21FbGVtZW50KCBgJHtjb25zdGFudHMuZWxlbWVudFByZWZpeH1tZW51LWl0ZW1gIClcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1VJTWVudUl0ZW1FbGVtZW50IGV4dGVuZHMgU2VtYW50aWNVSUVsZW1lbnQge31cblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1tZW51LWl0ZW1gIClcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY1VJTWVudUl0ZW1BdHRyaWJ1dGUgZXh0ZW5kcyBTZW1hbnRpY1VJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVUb2dnbGUgYWN0aXZlID0gZmFsc2U7XG5cblx0YmluZCgpIHtcblx0XHQvLyBubyBzdXBlclxuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnaXRlbScgKTtcblx0fVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
