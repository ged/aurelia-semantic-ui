define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
  "use strict";

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var UIDividerAttribute = (function (_UIAttribute) {
    _inherits(UIDividerAttribute, _UIAttribute);

    function UIDividerAttribute() {
      _classCallCheck(this, _UIDividerAttribute);

      _get(Object.getPrototypeOf(_UIDividerAttribute.prototype), 'constructor', this).apply(this, arguments);
    }

    var _UIDividerAttribute = UIDividerAttribute;
    UIDividerAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'divider')(UIDividerAttribute) || UIDividerAttribute;
    return UIDividerAttribute;
  })(_uiAttribute.UIAttribute);

  exports.UIDividerAttribute = UIDividerAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWRpdmlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGNBQVksQ0FBQzs7Ozs7Ozs7Ozs7O01BV0Esa0JBQWtCO2NBQWxCLGtCQUFrQjs7YUFBbEIsa0JBQWtCOzs7Ozs7OEJBQWxCLGtCQUFrQjtBQUFsQixzQkFBa0IsR0FEOUIsc0JBRk8sZUFBZSxFQUVGLFdBSmIsU0FBUyxDQUljLGVBQWUsYUFBVyxDQUM1QyxrQkFBa0IsS0FBbEIsa0JBQWtCO1dBQWxCLGtCQUFrQjtrQkFKdkIsV0FBVyIsImZpbGUiOiJlbGVtZW50cy91aS1kaXZpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBEaXZpZGVyIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9kaXZpZGVyLmh0bWxcbiAqL1xuXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7VUlBdHRyaWJ1dGV9IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fWRpdmlkZXJgIClcbmV4cG9ydCBjbGFzcyBVSURpdmlkZXJBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
