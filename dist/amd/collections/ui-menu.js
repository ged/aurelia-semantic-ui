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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLW1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVNhLGUsV0FBQSxlLFdBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsT0FBOUMsQyxVQUlDLGdDQUFVLGdCQUFWLEMsMkJBSEssTUFBTSxlQUFOLGtDQUEwQztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFNaEQsY0FBWTtBQUNYLE9BQUksU0FBUyxLQUFLLE9BQUwsQ0FBYSxhQUExQjtBQUNBLE9BQUssQ0FBQyxNQUFOLEVBQWU7QUFBRSxXQUFPLEtBQVA7QUFBZTs7QUFFaEMsT0FBSSxVQUFVLE9BQU8sU0FBckI7QUFDQSxPQUFLLENBQUMsT0FBTixFQUFnQjtBQUFFLFdBQU8sS0FBUDtBQUFlOztBQUVqQyxVQUFRLFFBQVEsUUFBUixDQUFpQixNQUFqQixLQUE0QixRQUFRLFFBQVIsQ0FBaUIsTUFBakIsQ0FBcEM7QUFDQTs7QUFHRCxTQUFPO0FBQ047QUFDQSxPQUFLLEtBQUssU0FBTCxFQUFMLEVBQXdCO0FBQ3ZCLFNBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBNEIsTUFBNUI7QUFDQSxJQUZELE1BRU87QUFDTixVQUFNLElBQU47QUFDQTtBQUNEOztBQXhCK0MsRTs7Ozs7OztLQWlDcEMsbUIsV0FBQSxtQixZQURaLHVDQUFrQixJQUFFLHFCQUFVLGVBQWdCLFlBQTlDLEMsNkJBQ00sTUFBTSxtQkFBTixrQ0FBOEM7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBSXBELFNBQU87QUFDTjtBQUNBLFFBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBNEIsTUFBNUI7QUFDQTs7QUFQbUQsRTs7O1VBRTNCLEsiLCJmaWxlIjoiY29sbGVjdGlvbnMvdWktbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogTWVudSAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvbWVudS5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtpbmplY3QsIGN1c3RvbUF0dHJpYnV0ZSwgY2hpbGRyZW4sIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9bWVudWAgKVxuZXhwb3J0IGNsYXNzIFVJTWVudUF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgcm91dGVyO1xuXHRAY2hpbGRyZW4oICdbdWktbWVudS1pdGVtXScgKSBpdGVtcztcblxuXG5cdGlzU3VibWVudSgpIHtcblx0XHRsZXQgcGFyZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0aWYgKCAhcGFyZW50ICkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRcdGxldCBjbGFzc2VzID0gcGFyZW50LmNsYXNzTGlzdFxuXHRcdGlmICggIWNsYXNzZXMgKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdFx0cmV0dXJuIChjbGFzc2VzLmNvbnRhaW5zKCdpdGVtJykgfHwgY2xhc3Nlcy5jb250YWlucygnbWVudScpKVxuXHR9XG5cblxuXHRiaW5kKCkge1xuXHRcdC8vIERvbid0IHN1cGVyIGZvciBzdWItbWVudXMgYmVjYXVzZSB0aGV5IHNob3VsZG4ndCBnZXQgdGhlICd1aSdcblx0XHRpZiAoIHRoaXMuaXNTdWJtZW51KCkgKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ21lbnUnICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1cGVyLmJpbmQoKTtcblx0XHR9XG5cdH1cblxufVxuXG5cbi8qKlxuICogdWktbWVudS1pdGVtXG4gKi9cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9bWVudS1pdGVtYCApXG5leHBvcnQgY2xhc3MgVUlNZW51SXRlbUF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVUb2dnbGUgYWN0aXZlID0gZmFsc2U7XG5cblx0YmluZCgpIHtcblx0XHQvLyBubyBzdXBlclxuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnaXRlbScgKTtcblx0fVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
