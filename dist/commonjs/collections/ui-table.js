
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

var UITableAttribute = (function (_UIAttribute) {
  _inherits(UITableAttribute, _UIAttribute);

  function UITableAttribute() {
    _classCallCheck(this, _UITableAttribute);

    _get(Object.getPrototypeOf(_UITableAttribute.prototype), 'constructor', this).apply(this, arguments);
  }

  var _UITableAttribute = UITableAttribute;
  UITableAttribute = (0, _aureliaFramework.customAttribute)(_constants.constants.attributePrefix + 'table')(UITableAttribute) || UITableAttribute;
  return UITableAttribute;
})(_uiAttribute.UIAttribute);

exports.UITableAttribute = UITableAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLXRhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozt5QkFNVyxjQUFjOzsyQkFDa0IsaUJBQWlCOztnQ0FDUixtQkFBbUI7O0lBR3ZFLGdCQUFnQjtZQUFoQixnQkFBZ0I7O1dBQWhCLGdCQUFnQjs7Ozs7OzBCQUFoQixnQkFBZ0I7QUFBaEIsa0JBQWdCLEdBRDVCLHVDQUFvQixxQkFBVSxlQUFlLFdBQVMsQ0FDMUMsZ0JBQWdCLEtBQWhCLGdCQUFnQjtTQUFoQixnQkFBZ0IiLCJmaWxlIjoiY29sbGVjdGlvbnMvdWktdGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFRhYmxlIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy90YWJsZS5odG1sXG4gKi9cblxuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1VJQXR0cmlidXRlLCBiaW5kYWJsZVRvZ2dsZSwgYmluZGFibGVFbnVtfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtpbmplY3QsIGNoaWxkLCBjdXN0b21BdHRyaWJ1dGUsIGNoaWxkcmVuLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCBgJHtjb25zdGFudHMuYXR0cmlidXRlUHJlZml4fXRhYmxlYCApXG5leHBvcnQgY2xhc3MgVUlUYWJsZUF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
