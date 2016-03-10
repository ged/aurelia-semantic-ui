define(['exports', '../ui-attribute', 'aurelia-framework'], function (exports, _uiAttribute, _aureliaFramework) {
  "use strict";

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3VpLWNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGNBQVksQ0FBQzs7Ozs7Ozs7Ozs7O01BVUEsZUFBZTtjQUFmLGVBQWU7O2FBQWYsZUFBZTs7Ozs7OzJCQUFmLGVBQWU7QUFBZixtQkFBZSxHQUQzQixzQkFGTyxlQUFlLEVBRUwsU0FBUyxDQUFFLENBQ2hCLGVBQWUsS0FBZixlQUFlO1dBQWYsZUFBZTtrQkFKcEIsV0FBVyIsImZpbGUiOiJ2aWV3cy91aS1jYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDYXJkIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS92aWV3cy9jYXJkLmh0bWxcbiAqL1xuXG5pbXBvcnQge1VJQXR0cmlidXRlfSBmcm9tICcuLi91aS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggJ3VpLWNhcmQnIClcbmV4cG9ydCBjbGFzcyBVSUNhcmRBdHRyaWJ1dGUgZXh0ZW5kcyBVSUF0dHJpYnV0ZSB7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
