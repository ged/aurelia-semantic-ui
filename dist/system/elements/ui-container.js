System.register(['../ui-attribute', 'aurelia-framework'], function (_export) {
  "use strict";

  var UIAttribute, customAttribute, UIContainerAttribute;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_uiAttribute) {
      UIAttribute = _uiAttribute.UIAttribute;
    }, function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
    }],
    execute: function () {
      UIContainerAttribute = (function (_UIAttribute) {
        _inherits(UIContainerAttribute, _UIAttribute);

        function UIContainerAttribute() {
          _classCallCheck(this, _UIContainerAttribute);

          _get(Object.getPrototypeOf(_UIContainerAttribute.prototype), 'constructor', this).apply(this, arguments);
        }

        var _UIContainerAttribute = UIContainerAttribute;
        UIContainerAttribute = customAttribute('ui-container')(UIContainerAttribute) || UIContainerAttribute;
        return UIContainerAttribute;
      })(UIAttribute);

      _export('UIContainerAttribute', UIContainerAttribute);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsY0FBWSxDQUFDOztvQ0FVQSxvQkFBb0I7Ozs7Ozs7Ozs7aUNBSnpCLFdBQVc7OzBDQUNYLGVBQWU7OztBQUdWLDBCQUFvQjtrQkFBcEIsb0JBQW9COztpQkFBcEIsb0JBQW9COzs7Ozs7b0NBQXBCLG9CQUFvQjtBQUFwQiw0QkFBb0IsR0FEaEMsZUFBZSxDQUFFLGNBQWMsQ0FBRSxDQUNyQixvQkFBb0IsS0FBcEIsb0JBQW9CO2VBQXBCLG9CQUFvQjtTQUFTLFdBQVciLCJmaWxlIjoiZWxlbWVudHMvdWktY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb250YWluZXIgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2NvbnRhaW5lci5odG1sXG4gKi9cblxuaW1wb3J0IHtVSUF0dHJpYnV0ZX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoICd1aS1jb250YWluZXInIClcbmV4cG9ydCBjbGFzcyBVSUNvbnRhaW5lckF0dHJpYnV0ZSBleHRlbmRzIFVJQXR0cmlidXRlIHtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
