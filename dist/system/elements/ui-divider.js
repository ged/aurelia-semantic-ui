System.register(['../constants', '../ui-attribute', 'aurelia-framework'], function (_export) {
  "use strict";

  var constants, UIAttribute, customAttribute, UIDividerAttribute;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_constants) {
      constants = _constants.constants;
    }, function (_uiAttribute) {
      UIAttribute = _uiAttribute.UIAttribute;
    }, function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
    }],
    execute: function () {
      UIDividerAttribute = (function (_UIAttribute) {
        _inherits(UIDividerAttribute, _UIAttribute);

        function UIDividerAttribute() {
          _classCallCheck(this, _UIDividerAttribute);

          _get(Object.getPrototypeOf(_UIDividerAttribute.prototype), 'constructor', this).apply(this, arguments);
        }

        var _UIDividerAttribute = UIDividerAttribute;
        UIDividerAttribute = customAttribute(constants.attributePrefix + 'divider')(UIDividerAttribute) || UIDividerAttribute;
        return UIDividerAttribute;
      })(UIAttribute);

      _export('UIDividerAttribute', UIDividerAttribute);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWRpdmlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGNBQVksQ0FBQzs7K0NBV0Esa0JBQWtCOzs7Ozs7Ozs7OzZCQUx2QixTQUFTOztpQ0FDVCxXQUFXOzswQ0FDWCxlQUFlOzs7QUFHVix3QkFBa0I7a0JBQWxCLGtCQUFrQjs7aUJBQWxCLGtCQUFrQjs7Ozs7O2tDQUFsQixrQkFBa0I7QUFBbEIsMEJBQWtCLEdBRDlCLGVBQWUsQ0FBSyxTQUFTLENBQUMsZUFBZSxhQUFXLENBQzVDLGtCQUFrQixLQUFsQixrQkFBa0I7ZUFBbEIsa0JBQWtCO1NBQVMsV0FBVyIsImZpbGUiOiJlbGVtZW50cy91aS1kaXZpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBEaXZpZGVyIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9kaXZpZGVyLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGV9IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWRpdmlkZXJgIClcbmV4cG9ydCBjbGFzcyBVSURpdmlkZXJBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
