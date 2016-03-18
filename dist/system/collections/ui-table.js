System.register(['../constants', '../ui-attribute', 'aurelia-framework'], function (_export) {
  "use strict";

  var constants, UIAttribute, bindableToggle, bindableEnum, inject, child, customAttribute, children, bindable, UITableAttribute;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_constants) {
      constants = _constants.constants;
    }, function (_uiAttribute) {
      UIAttribute = _uiAttribute.UIAttribute;
      bindableToggle = _uiAttribute.bindableToggle;
      bindableEnum = _uiAttribute.bindableEnum;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      child = _aureliaFramework.child;
      customAttribute = _aureliaFramework.customAttribute;
      children = _aureliaFramework.children;
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      UITableAttribute = (function (_UIAttribute) {
        _inherits(UITableAttribute, _UIAttribute);

        function UITableAttribute() {
          _classCallCheck(this, _UITableAttribute);

          _get(Object.getPrototypeOf(_UITableAttribute.prototype), 'constructor', this).apply(this, arguments);
        }

        var _UITableAttribute = UITableAttribute;
        UITableAttribute = customAttribute(constants.attributePrefix + 'table')(UITableAttribute) || UITableAttribute;
        return UITableAttribute;
      })(UIAttribute);

      _export('UITableAttribute', UITableAttribute);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLXRhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxjQUFZLENBQUM7O2dIQVdBLGdCQUFnQjs7Ozs7Ozs7Ozs2QkFMckIsU0FBUzs7aUNBQ1QsV0FBVztvQ0FBRSxjQUFjO2tDQUFFLFlBQVk7O2lDQUN6QyxNQUFNO2dDQUFFLEtBQUs7MENBQUUsZUFBZTttQ0FBRSxRQUFRO21DQUFFLFFBQVE7OztBQUc3QyxzQkFBZ0I7a0JBQWhCLGdCQUFnQjs7aUJBQWhCLGdCQUFnQjs7Ozs7O2dDQUFoQixnQkFBZ0I7QUFBaEIsd0JBQWdCLEdBRDVCLGVBQWUsQ0FBSyxTQUFTLENBQUMsZUFBZSxXQUFTLENBQzFDLGdCQUFnQixLQUFoQixnQkFBZ0I7ZUFBaEIsZ0JBQWdCO1NBQVMsV0FBVyIsImZpbGUiOiJjb2xsZWN0aW9ucy91aS10YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogVGFibGUgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2NvbGxlY3Rpb25zL3RhYmxlLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGUsIGJpbmRhYmxlVG9nZ2xlLCBiaW5kYWJsZUVudW19IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2luamVjdCwgY2hpbGQsIGN1c3RvbUF0dHJpYnV0ZSwgY2hpbGRyZW4sIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9dGFibGVgIClcbmV4cG9ydCBjbGFzcyBVSVRhYmxlQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
