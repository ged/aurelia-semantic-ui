define(['exports', '../ui-attribute', 'aurelia-framework'], function (exports, _uiAttribute, _aureliaFramework) {
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

	var UIFormAttribute = (function (_UIAttribute) {
		var _instanceInitializers = {};

		_inherits(UIFormAttribute, _UIAttribute);

		function UIFormAttribute() {
			_classCallCheck(this, _UIFormAttribute);

			_get(Object.getPrototypeOf(_UIFormAttribute.prototype), 'constructor', this).apply(this, arguments);

			_defineDecoratedPropertyDescriptor(this, 'loading', _instanceInitializers);

			_defineDecoratedPropertyDescriptor(this, 'state', _instanceInitializers);

			_defineDecoratedPropertyDescriptor(this, 'fields', _instanceInitializers);
		}

		_createDecoratedClass(UIFormAttribute, [{
			key: 'loading',
			decorators: [_uiAttribute.bindableToggle],
			initializer: function initializer() {
				return false;
			},
			enumerable: true
		}, {
			key: 'state',
			decorators: [(0, _uiAttribute.bindableEnum)('error', 'success', 'warning')],
			initializer: null,
			enumerable: true
		}, {
			key: 'fields',
			decorators: [(0, _aureliaFramework.children)('.field')],
			initializer: null,
			enumerable: true
		}], null, _instanceInitializers);

		var _UIFormAttribute = UIFormAttribute;
		UIFormAttribute = (0, _aureliaFramework.customAttribute)('ui-form')(UIFormAttribute) || UIFormAttribute;
		return UIFormAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UIFormAttribute = UIFormAttribute;

	var UICheckboxAttribute = (function (_UIAttribute2) {
		_inherits(UICheckboxAttribute, _UIAttribute2);

		function UICheckboxAttribute() {
			_classCallCheck(this, _UICheckboxAttribute);

			_get(Object.getPrototypeOf(_UICheckboxAttribute.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(UICheckboxAttribute, [{
			key: 'attached',
			value: function attached() {
				this.logger.debug("Activating a ui-checkbox");
				$(this.element).checkbox();
			}
		}]);

		var _UICheckboxAttribute = UICheckboxAttribute;
		UICheckboxAttribute = (0, _aureliaFramework.customAttribute)('ui-checkbox')(UICheckboxAttribute) || UICheckboxAttribute;
		return UICheckboxAttribute;
	})(_uiAttribute.UIAttribute);

	exports.UICheckboxAttribute = UICheckboxAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBVUEsZUFBZTs7O1lBQWYsZUFBZTs7V0FBZixlQUFlOzs7Ozs7Ozs7Ozs7d0JBQWYsZUFBZTs7NkJBSlAsY0FBYzs7V0FNUixLQUFLOzs7OztnQkFDOUIsaUJBUG1DLFlBQVksRUFPbEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7Ozs7O2dCQUMzQyxzQkFQK0IsUUFBUSxFQU83QixRQUFRLENBQUU7Ozs7O3lCQUpULGVBQWU7QUFBZixpQkFBZSxHQUQzQixzQkFGZSxlQUFlLEVBRWIsU0FBUyxDQUFFLENBQ2hCLGVBQWUsS0FBZixlQUFlO1NBQWYsZUFBZTtpQkFKcEIsV0FBVzs7OztLQWNOLG1CQUFtQjtZQUFuQixtQkFBbUI7O1dBQW5CLG1CQUFtQjs7Ozs7O2VBQW5CLG1CQUFtQjs7VUFFdkIsb0JBQUc7QUFDVixRQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSwwQkFBMEIsQ0FBRSxDQUFDO0FBQ2hELEtBQUMsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0I7Ozs2QkFMVyxtQkFBbUI7QUFBbkIscUJBQW1CLEdBRC9CLHNCQVplLGVBQWUsRUFZYixhQUFhLENBQUUsQ0FDcEIsbUJBQW1CLEtBQW5CLG1CQUFtQjtTQUFuQixtQkFBbUI7aUJBZHhCLFdBQVciLCJmaWxlIjoiY29sbGVjdGlvbnMvdWktZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogRm9ybSAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvZm9ybS5odG1sXG4gKi9cblxuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7aW5qZWN0LCBjdXN0b21BdHRyaWJ1dGUsIGNoaWxkcmVuLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCAndWktZm9ybScgKVxuZXhwb3J0IGNsYXNzIFVJRm9ybUF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVUb2dnbGUgbG9hZGluZyA9IGZhbHNlO1xuXHRAYmluZGFibGVFbnVtKCdlcnJvcicsICdzdWNjZXNzJywgJ3dhcm5pbmcnKSBzdGF0ZTtcblx0QGNoaWxkcmVuKCAnLmZpZWxkJyApIGZpZWxkcztcblxufVxuXG5cbkBjdXN0b21BdHRyaWJ1dGUoICd1aS1jaGVja2JveCcgKVxuZXhwb3J0IGNsYXNzIFVJQ2hlY2tib3hBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0YXR0YWNoZWQoKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiQWN0aXZhdGluZyBhIHVpLWNoZWNrYm94XCIgKTtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5jaGVja2JveCgpO1xuXHR9XG5cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
