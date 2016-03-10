System.register(['../ui-attribute', 'aurelia-framework'], function (_export) {
  "use strict";

  var UIAttribute, customAttribute, UICardAttribute;

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
      UICardAttribute = (function (_UIAttribute) {
        _inherits(UICardAttribute, _UIAttribute);

        function UICardAttribute() {
          _classCallCheck(this, _UICardAttribute);

          _get(Object.getPrototypeOf(_UICardAttribute.prototype), 'constructor', this).apply(this, arguments);
        }

        var _UICardAttribute = UICardAttribute;
        UICardAttribute = customAttribute('ui-card')(UICardAttribute) || UICardAttribute;
        return UICardAttribute;
      })(UIAttribute);

      _export('UICardAttribute', UICardAttribute);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3VpLWNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGNBQVksQ0FBQzs7b0NBVUEsZUFBZTs7Ozs7Ozs7OztpQ0FKcEIsV0FBVzs7MENBQ1gsZUFBZTs7O0FBR1YscUJBQWU7a0JBQWYsZUFBZTs7aUJBQWYsZUFBZTs7Ozs7OytCQUFmLGVBQWU7QUFBZix1QkFBZSxHQUQzQixlQUFlLENBQUUsU0FBUyxDQUFFLENBQ2hCLGVBQWUsS0FBZixlQUFlO2VBQWYsZUFBZTtTQUFTLFdBQVciLCJmaWxlIjoidmlld3MvdWktY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ2FyZCAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vdmlld3MvY2FyZC5odG1sXG4gKi9cblxuaW1wb3J0IHtVSUF0dHJpYnV0ZX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7Y3VzdG9tQXR0cmlidXRlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21BdHRyaWJ1dGUoICd1aS1jYXJkJyApXG5leHBvcnQgY2xhc3MgVUlDYXJkQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
