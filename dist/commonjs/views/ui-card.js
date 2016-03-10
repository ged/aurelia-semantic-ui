
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _uiAttribute = require('../ui-attribute');

var _aureliaFramework = require('aurelia-framework');

var UICardAttribute = (function (_UIAttribute) {
  _inherits(UICardAttribute, _UIAttribute);

  function UICardAttribute() {
    _classCallCheck(this, _UICardAttribute);

    _get(Object.getPrototypeOf(_UICardAttribute.prototype), 'constructor', this).apply(this, arguments);
  }

  var _UICardAttribute = UICardAttribute;
  UICardAttribute = (0, _aureliaFramework.customAttribute)('ui-card')(UICardAttribute) || UICardAttribute;
  return UICardAttribute;
})(_uiAttribute.UIAttribute);

exports.UICardAttribute = UICardAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3VpLWNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7OzJCQU1hLGlCQUFpQjs7Z0NBQ2IsbUJBQW1COztJQUdwQyxlQUFlO1lBQWYsZUFBZTs7V0FBZixlQUFlOzs7Ozs7eUJBQWYsZUFBZTtBQUFmLGlCQUFlLEdBRDNCLHVDQUFpQixTQUFTLENBQUUsQ0FDaEIsZUFBZSxLQUFmLGVBQWU7U0FBZixlQUFlIiwiZmlsZSI6InZpZXdzL3VpLWNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENhcmQgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL3ZpZXdzL2NhcmQuaHRtbFxuICovXG5cbmltcG9ydCB7VUlBdHRyaWJ1dGV9IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCAndWktY2FyZCcgKVxuZXhwb3J0IGNsYXNzIFVJQ2FyZEF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
