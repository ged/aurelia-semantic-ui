System.register(['../constants', '../ui-attribute', 'aurelia-framework'], function (_export) {
  "use strict";

  var constants, UIAttribute, bindableEnum, customAttribute, bindable, UIRailAttribute;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

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
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      UIRailAttribute = (function (_UIAttribute) {
        var _instanceInitializers = {};

        _inherits(UIRailAttribute, _UIAttribute);

        function UIRailAttribute() {
          _classCallCheck(this, _UIRailAttribute);

          _get(Object.getPrototypeOf(_UIRailAttribute.prototype), 'constructor', this).apply(this, arguments);

          _defineDecoratedPropertyDescriptor(this, 'side', _instanceInitializers);
        }

        _createDecoratedClass(UIRailAttribute, [{
          key: 'side',
          decorators: [bindableEnum('left', 'right')],
          initializer: function initializer() {
            return 'left';
          },
          enumerable: true
        }], null, _instanceInitializers);

        var _UIRailAttribute = UIRailAttribute;
        UIRailAttribute = customAttribute(constants.attributePrefix + 'rail')(UIRailAttribute) || UIRailAttribute;
        return UIRailAttribute;
      })(UIAttribute);

      _export('UIRailAttribute', UIRailAttribute);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXJhaWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGNBQVksQ0FBQzs7dUVBV0EsZUFBZTs7Ozs7Ozs7Ozs7Ozs7NkJBTHBCLFNBQVM7O2lDQUNULFdBQVc7a0NBQUUsWUFBWTs7MENBQ3pCLGVBQWU7bUNBQUUsUUFBUTs7O0FBR3BCLHFCQUFlOzs7a0JBQWYsZUFBZTs7aUJBQWYsZUFBZTs7Ozs7Ozs7OEJBQWYsZUFBZTs7dUJBRTFCLFlBQVksQ0FBRSxNQUFNLEVBQUUsT0FBTyxDQUFFOzttQkFBUSxNQUFNOzs7OzsrQkFGbEMsZUFBZTtBQUFmLHVCQUFlLEdBRDNCLGVBQWUsQ0FBSyxTQUFTLENBQUMsZUFBZSxVQUFRLENBQ3pDLGVBQWUsS0FBZixlQUFlO2VBQWYsZUFBZTtTQUFTLFdBQVciLCJmaWxlIjoiZWxlbWVudHMvdWktcmFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29udGVudCBSYWlsIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9yYWlsLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fXJhaWxgIClcbmV4cG9ydCBjbGFzcyBVSVJhaWxBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG5cblx0QGJpbmRhYmxlRW51bSggJ2xlZnQnLCAncmlnaHQnICkgc2lkZSA9ICdsZWZ0JztcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
