System.register(["moment"], function (_export) {
  "use strict";

  var Moment, DEFAULT_FORMAT, DateFormatValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_moment) {
      Moment = _moment["default"];
    }],
    execute: function () {
      DEFAULT_FORMAT = "YYYY-MM-DD HH:mm a Z";

      DateFormatValueConverter = (function () {
        function DateFormatValueConverter() {
          _classCallCheck(this, DateFormatValueConverter);
        }

        _createClass(DateFormatValueConverter, [{
          key: "toView",
          value: function toView(value) {
            var format = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_FORMAT : arguments[1];

            var moment = Moment(value);
            return moment.format(format);
          }
        }]);

        return DateFormatValueConverter;
      })();

      _export("DateFormatValueConverter", DateFormatValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9kYXRlLWZvcm1hdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Y0FTTSxjQUFjLEVBR1Asd0JBQXdCOzs7Ozs7Ozs7OztBQUgvQixvQkFBYyxHQUFHLHNCQUFzQjs7QUFHaEMsOEJBQXdCO2lCQUF4Qix3QkFBd0I7Z0NBQXhCLHdCQUF3Qjs7O3FCQUF4Qix3QkFBd0I7O2lCQUM5QixnQkFBRSxLQUFLLEVBQTBCO2dCQUF4QixNQUFNLHlEQUFDLGNBQWM7O0FBQ25DLGdCQUFJLE1BQU0sR0FBRyxNQUFNLENBQUUsS0FBSyxDQUFFLENBQUM7QUFDN0IsbUJBQU8sTUFBTSxDQUFDLE1BQU0sQ0FBRSxNQUFNLENBQUUsQ0FBQztXQUMvQjs7O2VBSlcsd0JBQXdCIiwiZmlsZSI6InJlc291cmNlcy9kYXRlLWZvcm1hdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRGF0ZSBWYWx1ZUNvbnZlcnRlciBmb3IgdGhlIEFkbWluIEFwcFxuICpcbiAqIEhhbmRsZXMgYW55IHZhbHVlIHRoYXQgbW9tZW50KCkgYWNjZXB0cy5cbiAqXG4gKi9cblxuaW1wb3J0IE1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBERUZBVUxUX0ZPUk1BVCA9IFwiWVlZWS1NTS1ERCBISDptbSBhIFpcIjtcblxuXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdFZhbHVlQ29udmVydGVyIHtcblx0dG9WaWV3KCB2YWx1ZSwgZm9ybWF0PURFRkFVTFRfRk9STUFUICkge1xuXHRcdGxldCBtb21lbnQgPSBNb21lbnQoIHZhbHVlICk7XG5cdFx0cmV0dXJuIG1vbWVudC5mb3JtYXQoIGZvcm1hdCApO1xuXHR9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
