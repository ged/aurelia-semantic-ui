
"use strict";

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _uiAttribute = require('../ui-attribute');

var _aureliaFramework = require('aurelia-framework');

var UIBreadcrumbAttribute = (function (_UIAttribute) {
	var _instanceInitializers = {};

	_inherits(UIBreadcrumbAttribute, _UIAttribute);

	function UIBreadcrumbAttribute() {
		_classCallCheck(this, _UIBreadcrumbAttribute);

		_get(Object.getPrototypeOf(_UIBreadcrumbAttribute.prototype), 'constructor', this).apply(this, arguments);

		_defineDecoratedPropertyDescriptor(this, 'divider', _instanceInitializers);

		_defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

		_defineDecoratedPropertyDescriptor(this, 'sections', _instanceInitializers);
	}

	_createDecoratedClass(UIBreadcrumbAttribute, [{
		key: 'bind',
		value: function bind() {
			_get(Object.getPrototypeOf(_UIBreadcrumbAttribute.prototype), 'bind', this).call(this);

			if (this.divider) {
				var dividerNode = null;

				if (this.divider.match(/\bicon\b/)) {
					var _dividerNode$classList;

					this.logger.debug('Icon divider (' + this.divider + ')');
					dividerNode = document.createElement('i');
					(_dividerNode$classList = dividerNode.classList).add.apply(_dividerNode$classList, _toConsumableArray(this.divider.split(/\s+/)));
					dividerNode.classList.add('divider');
				} else {
						this.logger.debug('Text divider (' + this.divider + ')');
						var content = document.createTextNode(this.divider);
						dividerNode = document.createElement('span');
						dividerNode.classList.add('divider');
						dividerNode.appendChild(content);
					}

				for (var i in this.sections) {
					if (i > 0) {
						var section = this.sections[i];
						this.element.insertBefore(dividerNode.cloneNode(true), section);
					}
				}
			}
		}
	}, {
		key: 'divider',
		decorators: [_aureliaFramework.bindable],
		initializer: null,
		enumerable: true
	}, {
		key: 'size',
		decorators: [(0, _uiAttribute.bindableEnum)('small', 'large', 'huge')],
		initializer: null,
		enumerable: true
	}, {
		key: 'sections',
		decorators: [(0, _aureliaFramework.children)('[ui-breadcrumb-section]')],
		initializer: null,
		enumerable: true
	}], null, _instanceInitializers);

	var _UIBreadcrumbAttribute = UIBreadcrumbAttribute;
	UIBreadcrumbAttribute = (0, _aureliaFramework.customAttribute)('ui-breadcrumb')(UIBreadcrumbAttribute) || UIBreadcrumbAttribute;
	return UIBreadcrumbAttribute;
})(_uiAttribute.UIAttribute);

exports.UIBreadcrumbAttribute = UIBreadcrumbAttribute;

var UIBreadcrumbSectionAttribute = (function (_UIAttribute2) {
	var _instanceInitializers2 = {};

	_inherits(UIBreadcrumbSectionAttribute, _UIAttribute2);

	function UIBreadcrumbSectionAttribute() {
		_classCallCheck(this, _UIBreadcrumbSectionAttribute);

		_get(Object.getPrototypeOf(_UIBreadcrumbSectionAttribute.prototype), 'constructor', this).apply(this, arguments);

		_defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers2);
	}

	_createDecoratedClass(UIBreadcrumbSectionAttribute, [{
		key: 'bind',
		value: function bind() {
			this.element.classList.add('section');
		}
	}, {
		key: 'active',
		decorators: [_uiAttribute.bindableToggle],
		initializer: function initializer() {
			return false;
		},
		enumerable: true
	}], null, _instanceInitializers2);

	var _UIBreadcrumbSectionAttribute = UIBreadcrumbSectionAttribute;
	UIBreadcrumbSectionAttribute = (0, _aureliaFramework.customAttribute)('ui-breadcrumb-section')(UIBreadcrumbSectionAttribute) || UIBreadcrumbSectionAttribute;
	return UIBreadcrumbSectionAttribute;
})(_uiAttribute.UIAttribute);

exports.UIBreadcrumbSectionAttribute = UIBreadcrumbSectionAttribute;

var UIBreadcrumbDividerAttribute = (function (_UIAttribute3) {
	_inherits(UIBreadcrumbDividerAttribute, _UIAttribute3);

	function UIBreadcrumbDividerAttribute() {
		_classCallCheck(this, _UIBreadcrumbDividerAttribute);

		_get(Object.getPrototypeOf(_UIBreadcrumbDividerAttribute.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(UIBreadcrumbDividerAttribute, [{
		key: 'bind',
		value: function bind() {
			if (this.element.classList) {
				this.element.classList.add('divider');
			}
		}
	}]);

	var _UIBreadcrumbDividerAttribute = UIBreadcrumbDividerAttribute;
	UIBreadcrumbDividerAttribute = (0, _aureliaFramework.customAttribute)('ui-breadcrumb-divider')(UIBreadcrumbDividerAttribute) || UIBreadcrumbDividerAttribute;
	return UIBreadcrumbDividerAttribute;
})(_uiAttribute.UIAttribute);

exports.UIBreadcrumbDividerAttribute = UIBreadcrumbDividerAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLWJyZWFkY3J1bWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBTTJDLGlCQUFpQjs7Z0NBQ0gsbUJBQW1COztJQUc1RSxxQkFBcUI7OztXQUFyQixxQkFBcUI7O1VBQXJCLHFCQUFxQjs7Ozs7Ozs7Ozs7O3VCQUFyQixxQkFBcUI7O1NBTzdCLGdCQUFHO0FBQ04sMEZBQWE7O0FBRWIsT0FBSyxJQUFJLENBQUMsT0FBTyxFQUFHO0FBQ25CLFFBQUksV0FBVyxHQUFHLElBQUksQ0FBQzs7QUFHdkIsUUFBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRzs7O0FBQ3JDLFNBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxvQkFBbUIsSUFBSSxDQUFDLE9BQU8sT0FBSyxDQUFDO0FBQ3RELGdCQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBRSxHQUFHLENBQUUsQ0FBQztBQUM1QywrQkFBQSxXQUFXLENBQUMsU0FBUyxFQUFDLEdBQUcsTUFBQSw0Q0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQzFELGdCQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxTQUFTLENBQUUsQ0FBQztLQUN2QyxNQUdJO0FBQ0osVUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLG9CQUFtQixJQUFJLENBQUMsT0FBTyxPQUFLLENBQUM7QUFDdEQsVUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7QUFDdEQsaUJBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFFLE1BQU0sQ0FBRSxDQUFDO0FBQy9DLGlCQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxTQUFTLENBQUUsQ0FBQztBQUN2QyxpQkFBVyxDQUFDLFdBQVcsQ0FBRSxPQUFPLENBQUUsQ0FBQztNQUNuQzs7QUFFRCxTQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUc7QUFDOUIsU0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFHO0FBQ1osVUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDLENBQUUsQ0FBQztBQUNqQyxVQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBRSxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBRSxDQUFDO01BQ2xFO0tBQ0Q7SUFDRDtHQUNEOzs7Ozs7OztlQWxDQSwrQkFBYSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQzs7Ozs7ZUFDdEMsZ0NBQVUseUJBQXlCLENBQUU7Ozs7OzhCQUoxQixxQkFBcUI7QUFBckIsc0JBQXFCLEdBRGpDLHVDQUFpQixlQUFlLENBQUUsQ0FDdEIscUJBQXFCLEtBQXJCLHFCQUFxQjtRQUFyQixxQkFBcUI7Ozs7O0lBOENyQiw0QkFBNEI7OztXQUE1Qiw0QkFBNEI7O1VBQTVCLDRCQUE0Qjs7Ozs7Ozs7dUJBQTVCLDRCQUE0Qjs7U0FJcEMsZ0JBQUc7QUFFTixPQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsU0FBUyxDQUFFLENBQUM7R0FDeEM7Ozs7O1VBTHdCLEtBQUs7Ozs7O3FDQUZsQiw0QkFBNEI7QUFBNUIsNkJBQTRCLEdBRHhDLHVDQUFpQix1QkFBdUIsQ0FBRSxDQUM5Qiw0QkFBNEIsS0FBNUIsNEJBQTRCO1FBQTVCLDRCQUE0Qjs7Ozs7SUFnQjVCLDRCQUE0QjtXQUE1Qiw0QkFBNEI7O1VBQTVCLDRCQUE0Qjs7Ozs7O2NBQTVCLDRCQUE0Qjs7U0FFcEMsZ0JBQUc7QUFFTixPQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFHO0FBQzdCLFFBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxTQUFTLENBQUUsQ0FBQztJQUN4QztHQUNEOzs7cUNBUFcsNEJBQTRCO0FBQTVCLDZCQUE0QixHQUR4Qyx1Q0FBaUIsdUJBQXVCLENBQUUsQ0FDOUIsNEJBQTRCLEtBQTVCLDRCQUE0QjtRQUE1Qiw0QkFBNEIiLCJmaWxlIjoiY29sbGVjdGlvbnMvdWktYnJlYWRjcnVtYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQnJlYWRjcnVtYiAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vY29sbGVjdGlvbnMvYnJlYWRjcnVtYi5odG1sXG4gKi9cblxuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7aW5qZWN0LCBjdXN0b21BdHRyaWJ1dGUsIGNoaWxkcmVuLCBiaW5kYWJsZSwgTG9nTWFuYWdlcn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCAndWktYnJlYWRjcnVtYicgKVxuZXhwb3J0IGNsYXNzIFVJQnJlYWRjcnVtYkF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGUgZGl2aWRlcjtcblx0QGJpbmRhYmxlRW51bSgnc21hbGwnLCAnbGFyZ2UnLCAnaHVnZScpIHNpemU7XG5cdEBjaGlsZHJlbiggJ1t1aS1icmVhZGNydW1iLXNlY3Rpb25dJyApIHNlY3Rpb25zO1xuXG5cblx0YmluZCgpIHtcblx0XHRzdXBlci5iaW5kKCk7XG5cblx0XHRpZiAoIHRoaXMuZGl2aWRlciApIHtcblx0XHRcdGxldCBkaXZpZGVyTm9kZSA9IG51bGw7XG5cblx0XHRcdC8vIEljb24gZGl2aWRlciAoPGk+KVxuXHRcdFx0aWYgKCB0aGlzLmRpdmlkZXIubWF0Y2goL1xcYmljb25cXGIvKSApIHtcblx0XHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBJY29uIGRpdmlkZXIgKCR7dGhpcy5kaXZpZGVyfSlgICk7XG5cdFx0XHRcdGRpdmlkZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2knICk7XG5cdFx0XHRcdGRpdmlkZXJOb2RlLmNsYXNzTGlzdC5hZGQoIC4uLnRoaXMuZGl2aWRlci5zcGxpdCgvXFxzKy8pICk7XG5cdFx0XHRcdGRpdmlkZXJOb2RlLmNsYXNzTGlzdC5hZGQoICdkaXZpZGVyJyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUZXh0IGRpdmlkZXIgKDxzcGFuPilcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYFRleHQgZGl2aWRlciAoJHt0aGlzLmRpdmlkZXJ9KWAgKTtcblx0XHRcdFx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggdGhpcy5kaXZpZGVyICk7XG5cdFx0XHRcdGRpdmlkZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG5cdFx0XHRcdGRpdmlkZXJOb2RlLmNsYXNzTGlzdC5hZGQoICdkaXZpZGVyJyApO1xuXHRcdFx0XHRkaXZpZGVyTm9kZS5hcHBlbmRDaGlsZCggY29udGVudCApO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKCBsZXQgaSBpbiB0aGlzLnNlY3Rpb25zICkge1xuXHRcdFx0XHRpZiAoIGkgPiAwICkge1xuXHRcdFx0XHRcdGxldCBzZWN0aW9uID0gdGhpcy5zZWN0aW9uc1sgaSBdO1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUoIGRpdmlkZXJOb2RlLmNsb25lTm9kZSh0cnVlKSwgc2VjdGlvbiApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cblxuXG4vKipcbiAqIHVpLWJyZWFkY3J1bWItc2VjdGlvblxuICovXG5AY3VzdG9tQXR0cmlidXRlKCAndWktYnJlYWRjcnVtYi1zZWN0aW9uJyApXG5leHBvcnQgY2xhc3MgVUlCcmVhZGNydW1iU2VjdGlvbkF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVUb2dnbGUgYWN0aXZlID0gZmFsc2U7XG5cblx0YmluZCgpIHtcblx0XHQvLyBObyBzdXBlclxuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnc2VjdGlvbicgKTtcblx0fVxuXG59XG5cblxuLyoqXG4gKiB1aS1icmVhZGNydW1iLWRpdmlkZXJcbiAqL1xuQGN1c3RvbUF0dHJpYnV0ZSggJ3VpLWJyZWFkY3J1bWItZGl2aWRlcicgKVxuZXhwb3J0IGNsYXNzIFVJQnJlYWRjcnVtYkRpdmlkZXJBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0YmluZCgpIHtcblx0XHQvLyBObyBzdXBlclxuXHRcdGlmICggdGhpcy5lbGVtZW50LmNsYXNzTGlzdCApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnZGl2aWRlcicgKTtcblx0XHR9XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
