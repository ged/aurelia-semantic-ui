
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

var _aureliaFramework = require('aurelia-framework');

var _uiAttribute = require('../ui-attribute');

var UIListAttribute = (function (_UIAttribute) {
  var _instanceInitializers = {};

  _inherits(UIListAttribute, _UIAttribute);

  function UIListAttribute() {
    _classCallCheck(this, _UIListAttribute);

    _get(Object.getPrototypeOf(_UIListAttribute.prototype), 'constructor', this).apply(this, arguments);

    _defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);
  }

  _createDecoratedClass(UIListAttribute, [{
    key: 'size',
    decorators: [_uiAttribute.bindableEnum.apply(undefined, _toConsumableArray(_constants.constants.VALID_SIZES))],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  var _UIListAttribute = UIListAttribute;
  UIListAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'list')(UIListAttribute) || UIListAttribute;
  return UIListAttribute;
})(_uiAttribute.UIAttribute);

exports.UIListAttribute = UIListAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQU1XLGNBQWM7O2dDQUNFLG1CQUFtQjs7MkJBQ25CLGlCQUFpQjs7SUFHNUMsZUFBZTs7O1lBQWYsZUFBZTs7V0FBZixlQUFlOzs7Ozs7Ozt3QkFBZixlQUFlOztpQkFFMUIsOERBQWlCLHFCQUFVLFdBQVcsRUFBRTs7Ozs7eUJBRjdCLGVBQWU7QUFBZixpQkFBZSxHQUQzQix1Q0FBb0IscUJBQVUsZUFBZSxVQUFRLENBQ3pDLGVBQWUsS0FBZixlQUFlO1NBQWYsZUFBZSIsImZpbGUiOiJlbGVtZW50cy91aS1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBMaXN0IC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9saXN0Lmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWxpc3RgIClcbmV4cG9ydCBjbGFzcyBVSUxpc3RBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlRW51bSggLi4uY29uc3RhbnRzLlZBTElEX1NJWkVTICkgc2l6ZTtcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
