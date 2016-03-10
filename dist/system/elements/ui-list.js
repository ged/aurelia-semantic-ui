System.register(['../constants', 'aurelia-framework', '../ui-attribute'], function (_export) {
  "use strict";

  var constants, customAttribute, bindable, UIAttribute, bindableEnum, UIListAttribute;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_constants) {
      constants = _constants.constants;
    }, function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      bindable = _aureliaFramework.bindable;
    }, function (_uiAttribute) {
      UIAttribute = _uiAttribute.UIAttribute;
      bindableEnum = _uiAttribute.bindableEnum;
    }],
    execute: function () {
      UIListAttribute = (function (_UIAttribute) {
        var _instanceInitializers = {};

        _inherits(UIListAttribute, _UIAttribute);

        function UIListAttribute() {
          _classCallCheck(this, _UIListAttribute);

          _get(Object.getPrototypeOf(_UIListAttribute.prototype), 'constructor', this).apply(this, arguments);

          _defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);
        }

        _createDecoratedClass(UIListAttribute, [{
          key: 'size',
          decorators: [bindableEnum.apply(undefined, _toConsumableArray(constants.VALID_SIZES))],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        var _UIListAttribute = UIListAttribute;
        UIListAttribute = customAttribute(constants.attributePrefix + 'list')(UIListAttribute) || UIListAttribute;
        return UIListAttribute;
      })(UIAttribute);

      _export('UIListAttribute', UIListAttribute);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGNBQVksQ0FBQzs7dUVBV0EsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFMcEIsU0FBUzs7MENBQ1QsZUFBZTttQ0FBRSxRQUFROztpQ0FDekIsV0FBVztrQ0FBRSxZQUFZOzs7QUFHcEIscUJBQWU7OztrQkFBZixlQUFlOztpQkFBZixlQUFlOzs7Ozs7Ozs4QkFBZixlQUFlOzt1QkFFMUIsWUFBWSxxQ0FBSyxTQUFTLENBQUMsV0FBVyxFQUFFOzs7OzsrQkFGN0IsZUFBZTtBQUFmLHVCQUFlLEdBRDNCLGVBQWUsQ0FBSyxTQUFTLENBQUMsZUFBZSxVQUFRLENBQ3pDLGVBQWUsS0FBZixlQUFlO2VBQWYsZUFBZTtTQUFTLFdBQVciLCJmaWxlIjoiZWxlbWVudHMvdWktbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogTGlzdCAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvbGlzdC5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1saXN0YCApXG5leHBvcnQgY2xhc3MgVUlMaXN0QXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZUVudW0oIC4uLmNvbnN0YW50cy5WQUxJRF9TSVpFUyApIHNpemU7XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
