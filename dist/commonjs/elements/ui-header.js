
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _constants = require('../constants');

var _uiAttribute = require('../ui-attribute');

var _aureliaFramework = require('aurelia-framework');

var UIHeaderAttribute = (function (_UIAttribute) {
  var _instanceInitializers = {};

  _inherits(UIHeaderAttribute, _UIAttribute);

  function UIHeaderAttribute() {
    _classCallCheck(this, _UIHeaderAttribute);

    _get(Object.getPrototypeOf(_UIHeaderAttribute.prototype), 'constructor', this).apply(this, arguments);

    _defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers);
  }

  _createDecoratedClass(UIHeaderAttribute, [{
    key: 'size',
    decorators: [_uiAttribute.bindableEnum.apply(undefined, _toConsumableArray(_constants.constants.VALID_SIZES))],
    initializer: null,
    enumerable: true
  }, {
    key: 'color',
    decorators: [_uiAttribute.bindableEnum.apply(undefined, _toConsumableArray(_constants.constants.VALID_COLORS))],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  var _UIHeaderAttribute = UIHeaderAttribute;
  UIHeaderAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'header')(UIHeaderAttribute) || UIHeaderAttribute;
  return UIHeaderAttribute;
})(_uiAttribute.UIAttribute);

exports.UIHeaderAttribute = UIHeaderAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBTVcsY0FBYzs7MkJBQ0UsaUJBQWlCOztnQ0FDM0IsbUJBQW1COztJQUdwQyxpQkFBaUI7OztZQUFqQixpQkFBaUI7O1dBQWpCLGlCQUFpQjs7Ozs7Ozs7Ozt3QkFBakIsaUJBQWlCOztpQkFFNUIsOERBQWlCLHFCQUFVLFdBQVcsRUFBRTs7Ozs7aUJBQ3hDLDhEQUFpQixxQkFBVSxZQUFZLEVBQUU7Ozs7OzJCQUg5QixpQkFBaUI7QUFBakIsbUJBQWlCLEdBRDdCLHVDQUFvQixxQkFBVSxlQUFlLFlBQVUsQ0FDM0MsaUJBQWlCLEtBQWpCLGlCQUFpQjtTQUFqQixpQkFBaUIiLCJmaWxlIjoiZWxlbWVudHMvdWktaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb250ZW50IEhlYWRlciAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvaGVhZGVyLmh0bWwjY29udGVudC1oZWFkZXJzXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWhlYWRlcmAgKVxuZXhwb3J0IGNsYXNzIFVJSGVhZGVyQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9DT0xPUlMgKSBjb2xvcjtcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
