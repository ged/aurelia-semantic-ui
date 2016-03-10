define(['exports', '../ui-attribute', 'aurelia-framework'], function (exports, _uiAttribute, _aureliaFramework) {
	"use strict";

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UIMenuAttribute = (function (_UIAttribute) {
		var _instanceInitializers = {};

		_inherits(UIMenuAttribute, _UIAttribute);

		function UIMenuAttribute() {
			_classCallCheck(this, _UIMenuAttribute);

			_get(Object.getPrototypeOf(_UIMenuAttribute.prototype), 'constructor', this).apply(this, arguments);

			_defineDecoratedPropertyDescriptor(this, 'router', _instanceInitializers);

			_defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);
		}

		_createDecoratedClass(UIMenuAttribute, [{
			key: 'isSubmenu',
			value: function isSubmenu() {
				var parent = this.element.parentElement;
				if (!parent) {
					return false;
				}

				var classes = parent.classList;
				if (!classes) {
					return false;
				}

				return classes.contains('item') || classes.contains('menu');
			}
		}, {
			key: 'bind',
			value: function bind() {
				if (this.isSubmenu()) {
					this.element.classList.add('menu');
				} else {
					_get(Object.getPrototypeOf(_UIMenuAttribute.prototype), 'bind', this).call(this);
				}
			}
		}, {
			key: 'router',
			decorators: [_aureliaFramework.bindable],
			initializer: null,
			enumerable: true
		}, {
			key: 'items',
			decorators: [(0, _aureliaFramework.children)('[ui-menu-item]')],
			initializer: null,
			enumerable: true
		}], null, _instanceInitializers);

		var _UIMenuAttribute = UIMenuAttribute;
		UIMenuAttribute = (0, _aureliaFramework.customAttribute)('ui-menu')(UIMenuAttribute) || UIMenuAttribute;
		return UIMenuAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UIMenuAttribute = UIMenuAttribute;

	var UIMenuItemAttribute = (function (_UIAttribute2) {
		var _instanceInitializers2 = {};

		_inherits(UIMenuItemAttribute, _UIAttribute2);

		function UIMenuItemAttribute() {
			_classCallCheck(this, _UIMenuItemAttribute);

			_get(Object.getPrototypeOf(_UIMenuItemAttribute.prototype), 'constructor', this).apply(this, arguments);

			_defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers2);
		}

		_createDecoratedClass(UIMenuItemAttribute, [{
			key: 'bind',
			value: function bind() {
				this.element.classList.add('item');
			}
		}, {
			key: 'active',
			decorators: [_uiAttribute.bindableToggle],
			initializer: function initializer() {
				return false;
			},
			enumerable: true
		}], null, _instanceInitializers2);

		var _UIMenuItemAttribute = UIMenuItemAttribute;
		UIMenuItemAttribute = (0, _aureliaFramework.customAttribute)('ui-menu-item')(UIMenuItemAttribute) || UIMenuItemAttribute;
		return UIMenuItemAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UIMenuItemAttribute = UIMenuItemAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLW1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztLQVVBLGVBQWU7OztZQUFmLGVBQWU7O1dBQWYsZUFBZTs7Ozs7Ozs7Ozt3QkFBZixlQUFlOztVQU1sQixxQkFBRztBQUNYLFFBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ3hDLFFBQUssQ0FBQyxNQUFNLEVBQUc7QUFBRSxZQUFPLEtBQUssQ0FBQztLQUFFOztBQUVoQyxRQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFBO0FBQzlCLFFBQUssQ0FBQyxPQUFPLEVBQUc7QUFBRSxZQUFPLEtBQUssQ0FBQztLQUFFOztBQUVqQyxXQUFRLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3RDs7O1VBR0csZ0JBQUc7QUFFTixRQUFLLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRztBQUN2QixTQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFFLENBQUM7S0FDckMsTUFBTTtBQUNOLHNGQUFhO0tBQ2I7SUFDRDs7O2tDQTNCeUMsUUFBUTs7Ozs7Z0JBTWpELHNCQU4rQixRQUFRLEVBTTdCLGdCQUFnQixDQUFFOzs7Ozt5QkFIakIsZUFBZTtBQUFmLGlCQUFlLEdBRDNCLHNCQUZlLGVBQWUsRUFFYixTQUFTLENBQUUsQ0FDaEIsZUFBZSxLQUFmLGVBQWU7U0FBZixlQUFlO2lCQUpwQixXQUFXOzs7O0tBcUNOLG1CQUFtQjs7O1lBQW5CLG1CQUFtQjs7V0FBbkIsbUJBQW1COzs7Ozs7Ozt3QkFBbkIsbUJBQW1COztVQUkzQixnQkFBRztBQUVOLFFBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxNQUFNLENBQUUsQ0FBQztJQUNyQzs7OzZCQTVDbUIsY0FBYzs7V0F1Q1QsS0FBSzs7Ozs7NkJBRmxCLG1CQUFtQjtBQUFuQixxQkFBbUIsR0FEL0Isc0JBbkNlLGVBQWUsRUFtQ2IsY0FBYyxDQUFFLENBQ3JCLG1CQUFtQixLQUFuQixtQkFBbUI7U0FBbkIsbUJBQW1CO2lCQXJDeEIsV0FBVyIsImZpbGUiOiJjb2xsZWN0aW9ucy91aS1tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBNZW51IC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9tZW51Lmh0bWxcbiAqL1xuXG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtpbmplY3QsIGN1c3RvbUF0dHJpYnV0ZSwgY2hpbGRyZW4sIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoICd1aS1tZW51JyApXG5leHBvcnQgY2xhc3MgVUlNZW51QXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSByb3V0ZXI7XG5cdEBjaGlsZHJlbiggJ1t1aS1tZW51LWl0ZW1dJyApIGl0ZW1zO1xuXG5cblx0aXNTdWJtZW51KCkge1xuXHRcdGxldCBwYXJlbnQgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRpZiAoICFwYXJlbnQgKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdFx0bGV0IGNsYXNzZXMgPSBwYXJlbnQuY2xhc3NMaXN0XG5cdFx0aWYgKCAhY2xhc3NlcyApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0XHRyZXR1cm4gKGNsYXNzZXMuY29udGFpbnMoJ2l0ZW0nKSB8fCBjbGFzc2VzLmNvbnRhaW5zKCdtZW51JykpXG5cdH1cblxuXG5cdGJpbmQoKSB7XG5cdFx0Ly8gRG9uJ3Qgc3VwZXIgZm9yIHN1Yi1tZW51cyBiZWNhdXNlIHRoZXkgc2hvdWxkbid0IGdldCB0aGUgJ3VpJ1xuXHRcdGlmICggdGhpcy5pc1N1Ym1lbnUoKSApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnbWVudScgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3VwZXIuYmluZCgpO1xuXHRcdH1cblx0fVxuXG59XG5cblxuLyoqXG4gKiB1aS1tZW51LWl0ZW1cbiAqL1xuQGN1c3RvbUF0dHJpYnV0ZSggJ3VpLW1lbnUtaXRlbScgKVxuZXhwb3J0IGNsYXNzIFVJTWVudUl0ZW1BdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlVG9nZ2xlIGFjdGl2ZSA9IGZhbHNlO1xuXG5cdGJpbmQoKSB7XG5cdFx0Ly8gbm8gc3VwZXJcblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2l0ZW0nICk7XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
