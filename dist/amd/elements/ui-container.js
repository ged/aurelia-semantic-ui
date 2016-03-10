define(['exports', '../ui-attribute', 'aurelia-framework'], function (exports, _uiAttribute, _aureliaFramework) {
  "use strict";

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var UIContainerAttribute = (function (_UIAttribute) {
    _inherits(UIContainerAttribute, _UIAttribute);

    function UIContainerAttribute() {
      _classCallCheck(this, _UIContainerAttribute);

      _get(Object.getPrototypeOf(_UIContainerAttribute.prototype), 'constructor', this).apply(this, arguments);
    }

    var _UIContainerAttribute = UIContainerAttribute;
    UIContainerAttribute = (0, _aureliaFramework.customAttribute)('ui-container')(UIContainerAttribute) || UIContainerAttribute;
    return UIContainerAttribute;
  })(_uiAttribute.UIAttribute);

  exports.UIContainerAttribute = UIContainerAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsY0FBWSxDQUFDOzs7Ozs7Ozs7Ozs7TUFVQSxvQkFBb0I7Y0FBcEIsb0JBQW9COzthQUFwQixvQkFBb0I7Ozs7OztnQ0FBcEIsb0JBQW9CO0FBQXBCLHdCQUFvQixHQURoQyxzQkFGTyxlQUFlLEVBRUwsY0FBYyxDQUFFLENBQ3JCLG9CQUFvQixLQUFwQixvQkFBb0I7V0FBcEIsb0JBQW9CO2tCQUp6QixXQUFXIiwiZmlsZSI6ImVsZW1lbnRzL3VpLWNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29udGFpbmVyIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9jb250YWluZXIuaHRtbFxuICovXG5cbmltcG9ydCB7VUlBdHRyaWJ1dGV9IGZyb20gJy4uL3VpLWF0dHJpYnV0ZSc7XG5pbXBvcnQge2N1c3RvbUF0dHJpYnV0ZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tQXR0cmlidXRlKCAndWktY29udGFpbmVyJyApXG5leHBvcnQgY2xhc3MgVUlDb250YWluZXJBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
