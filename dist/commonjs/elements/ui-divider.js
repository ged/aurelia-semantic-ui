
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _constants = require('../constants');

var _uiAttribute = require('../ui-attribute');

var _aureliaFramework = require('aurelia-framework');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWRpdmlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7O3lCQU1XLGNBQWM7OzJCQUNaLGlCQUFpQjs7Z0NBQ2IsbUJBQW1COztJQUdwQyxrQkFBa0I7WUFBbEIsa0JBQWtCOztXQUFsQixrQkFBa0I7Ozs7Ozs0QkFBbEIsa0JBQWtCO0FBQWxCLG9CQUFrQixHQUQ5Qix1Q0FBb0IscUJBQVUsZUFBZSxhQUFXLENBQzVDLGtCQUFrQixLQUFsQixrQkFBa0I7U0FBbEIsa0JBQWtCIiwiZmlsZSI6ImVsZW1lbnRzL3VpLWRpdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIERpdmlkZXIgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2RpdmlkZXIuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoIGAke2NvbnN0YW50cy5hdHRyaWJ1dGVQcmVmaXh9ZGl2aWRlcmAgKVxuZXhwb3J0IGNsYXNzIFVJRGl2aWRlckF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
