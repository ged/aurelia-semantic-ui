System.register(['../constants', '../ui-attribute', 'aurelia-framework'], function (_export) {
  "use strict";

  var constants, UIAttribute, bindableEnum, customAttribute, UIHeaderAttribute;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_constants) {
      constants = _constants.constants;
    }, function (_uiAttribute) {
      UIAttribute = _uiAttribute.UIAttribute;
      bindableEnum = _uiAttribute.bindableEnum;
    }, function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
    }],
    execute: function () {
      UIHeaderAttribute = (function (_UIAttribute) {
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
          decorators: [bindableEnum.apply(undefined, _toConsumableArray(constants.VALID_SIZES))],
          initializer: null,
          enumerable: true
        }, {
          key: 'color',
          decorators: [bindableEnum.apply(undefined, _toConsumableArray(constants.VALID_COLORS))],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        var _UIHeaderAttribute = UIHeaderAttribute;
        UIHeaderAttribute = customAttribute(constants.attributePrefix + 'header')(UIHeaderAttribute) || UIHeaderAttribute;
        return UIHeaderAttribute;
      })(UIAttribute);

      _export('UIHeaderAttribute', UIHeaderAttribute);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsY0FBWSxDQUFDOzs2REFXQSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBTHRCLFNBQVM7O2lDQUNULFdBQVc7a0NBQUUsWUFBWTs7MENBQ3pCLGVBQWU7OztBQUdWLHVCQUFpQjs7O2tCQUFqQixpQkFBaUI7O2lCQUFqQixpQkFBaUI7Ozs7Ozs7Ozs7OEJBQWpCLGlCQUFpQjs7dUJBRTVCLFlBQVkscUNBQUssU0FBUyxDQUFDLFdBQVcsRUFBRTs7Ozs7dUJBQ3hDLFlBQVkscUNBQUssU0FBUyxDQUFDLFlBQVksRUFBRTs7Ozs7aUNBSDlCLGlCQUFpQjtBQUFqQix5QkFBaUIsR0FEN0IsZUFBZSxDQUFLLFNBQVMsQ0FBQyxlQUFlLFlBQVUsQ0FDM0MsaUJBQWlCLEtBQWpCLGlCQUFpQjtlQUFqQixpQkFBaUI7U0FBUyxXQUFXIiwiZmlsZSI6ImVsZW1lbnRzL3VpLWhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29udGVudCBIZWFkZXIgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2hlYWRlci5odG1sI2NvbnRlbnQtaGVhZGVyc1xuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1oZWFkZXJgIClcbmV4cG9ydCBjbGFzcyBVSUhlYWRlckF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcblxuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfU0laRVMgKSBzaXplO1xuXHRAYmluZGFibGVFbnVtKCAuLi5jb25zdGFudHMuVkFMSURfQ09MT1JTICkgY29sb3I7XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
