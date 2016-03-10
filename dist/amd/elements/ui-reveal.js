define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	"use strict";

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UIRevealAttribute = (function (_UIAttribute) {
		var _instanceInitializers = {};

		_inherits(UIRevealAttribute, _UIAttribute);

		function UIRevealAttribute() {
			_classCallCheck(this, _UIRevealAttribute);

			_get(Object.getPrototypeOf(_UIRevealAttribute.prototype), 'constructor', this).apply(this, arguments);

			_defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);
		}

		_createDecoratedClass(UIRevealAttribute, [{
			key: 'active',
			decorators: [_uiAttribute.bindableToggle],
			initializer: null,
			enumerable: true
		}], null, _instanceInitializers);

		var _UIRevealAttribute = UIRevealAttribute;
		UIRevealAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'reveal')(UIRevealAttribute) || UIRevealAttribute;
		return UIRevealAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UIRevealAttribute = UIRevealAttribute;

	var UIRevealVisibleAttribute = (function (_UIAttribute2) {
		_inherits(UIRevealVisibleAttribute, _UIAttribute2);

		function UIRevealVisibleAttribute() {
			_classCallCheck(this, _UIRevealVisibleAttribute);

			_get(Object.getPrototypeOf(_UIRevealVisibleAttribute.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(UIRevealVisibleAttribute, [{
			key: 'bind',
			value: function bind() {
				this.element.classList.add('visible', 'content');
			}
		}]);

		var _UIRevealVisibleAttribute = UIRevealVisibleAttribute;
		UIRevealVisibleAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'reveal-visible')(UIRevealVisibleAttribute) || UIRevealVisibleAttribute;
		return UIRevealVisibleAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UIRevealVisibleAttribute = UIRevealVisibleAttribute;

	var UIRevealHiddenAttribute = (function (_UIAttribute3) {
		_inherits(UIRevealHiddenAttribute, _UIAttribute3);

		function UIRevealHiddenAttribute() {
			_classCallCheck(this, _UIRevealHiddenAttribute);

			_get(Object.getPrototypeOf(_UIRevealHiddenAttribute.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(UIRevealHiddenAttribute, [{
			key: 'bind',
			value: function bind() {
				this.element.classList.add('hidden', 'content');
			}
		}]);

		var _UIRevealHiddenAttribute = UIRevealHiddenAttribute;
		UIRevealHiddenAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'reveal-hidden')(UIRevealHiddenAttribute) || UIRevealHiddenAttribute;
		return UIRevealHiddenAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UIRevealHiddenAttribute = UIRevealHiddenAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXJldmVhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsYUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXQSxpQkFBaUI7OztZQUFqQixpQkFBaUI7O1dBQWpCLGlCQUFpQjs7Ozs7Ozs7d0JBQWpCLGlCQUFpQjs7NkJBSlQsY0FBYzs7Ozs7MkJBSXRCLGlCQUFpQjtBQUFqQixtQkFBaUIsR0FEN0Isc0JBRk8sZUFBZSxFQUVGLFdBSmIsU0FBUyxDQUljLGVBQWUsWUFBVSxDQUMzQyxpQkFBaUIsS0FBakIsaUJBQWlCO1NBQWpCLGlCQUFpQjtpQkFKdEIsV0FBVzs7OztLQVlOLHdCQUF3QjtZQUF4Qix3QkFBd0I7O1dBQXhCLHdCQUF3Qjs7Ozs7O2VBQXhCLHdCQUF3Qjs7VUFFaEMsZ0JBQUc7QUFFTixRQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBRSxDQUFDO0lBQ25EOzs7a0NBTFcsd0JBQXdCO0FBQXhCLDBCQUF3QixHQURwQyxzQkFWTyxlQUFlLEVBVUYsV0FaYixTQUFTLENBWWMsZUFBZSxvQkFBa0IsQ0FDbkQsd0JBQXdCLEtBQXhCLHdCQUF3QjtTQUF4Qix3QkFBd0I7aUJBWjdCLFdBQVc7Ozs7S0FzQk4sdUJBQXVCO1lBQXZCLHVCQUF1Qjs7V0FBdkIsdUJBQXVCOzs7Ozs7ZUFBdkIsdUJBQXVCOztVQUUvQixnQkFBRztBQUVOLFFBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxRQUFRLEVBQUUsU0FBUyxDQUFFLENBQUM7SUFDbEQ7OztpQ0FMVyx1QkFBdUI7QUFBdkIseUJBQXVCLEdBRG5DLHNCQXBCTyxlQUFlLEVBb0JGLFdBdEJiLFNBQVMsQ0FzQmMsZUFBZSxtQkFBaUIsQ0FDbEQsdUJBQXVCLEtBQXZCLHVCQUF1QjtTQUF2Qix1QkFBdUI7aUJBdEI1QixXQUFXIiwiZmlsZSI6ImVsZW1lbnRzL3VpLXJldmVhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29udGVudCBSZXZlYWwgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL3JldmVhbC5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fXJldmVhbGAgKVxuZXhwb3J0IGNsYXNzIFVJUmV2ZWFsQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZVRvZ2dsZSBhY3RpdmU7XG5cbn1cblxuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fXJldmVhbC12aXNpYmxlYCApXG5leHBvcnQgY2xhc3MgVUlSZXZlYWxWaXNpYmxlQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdGJpbmQoKSB7XG5cdFx0Ly8gTm8gc3VwZXJcblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3Zpc2libGUnLCAnY29udGVudCcgKTtcblx0fVxuXG59XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9cmV2ZWFsLWhpZGRlbmAgKVxuZXhwb3J0IGNsYXNzIFVJUmV2ZWFsSGlkZGVuQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdGJpbmQoKSB7XG5cdFx0Ly8gTm8gc3VwZXJcblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2hpZGRlbicsICdjb250ZW50JyApO1xuXHR9XG5cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
