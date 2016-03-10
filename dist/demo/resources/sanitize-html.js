System.register(['dompurify'], function (_export) {
  'use strict';

  var DOMPurify, SanitizeHtmlValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_dompurify) {
      DOMPurify = _dompurify['default'];
    }],
    execute: function () {
      SanitizeHtmlValueConverter = (function () {
        function SanitizeHtmlValueConverter() {
          _classCallCheck(this, SanitizeHtmlValueConverter);
        }

        _createClass(SanitizeHtmlValueConverter, [{
          key: 'toView',
          value: function toView(untrustedHtml) {
            return DOMPurify.sanitize(untrustedHtml);
          }
        }]);

        return SanitizeHtmlValueConverter;
      })();

      _export('SanitizeHtmlValueConverter', SanitizeHtmlValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9zYW5pdGl6ZS1odG1sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztpQkFPYSwwQkFBMEI7Ozs7Ozs7Ozs7O0FBQTFCLGdDQUEwQjtpQkFBMUIsMEJBQTBCO2dDQUExQiwwQkFBMEI7OztxQkFBMUIsMEJBQTBCOztpQkFDaEMsZ0JBQUUsYUFBYSxFQUFHO0FBQ3ZCLG1CQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUUsYUFBYSxDQUFFLENBQUM7V0FDM0M7OztlQUhXLDBCQUEwQiIsImZpbGUiOiJyZXNvdXJjZXMvc2FuaXRpemUtaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSFRNTCBzYW5pdGl6ZXIgVmFsdWVDb252ZXJ0ZXIuIEJhc2ljYWxseSBqdXN0IHJpcHBlZCBvZmYgZnJvbSB0aGVcbiAqIEF1cmVsaWEgZG9jcy5cbiAqL1xuXG5pbXBvcnQgRE9NUHVyaWZ5IGZyb20gJ2RvbXB1cmlmeSc7XG5cbmV4cG9ydCBjbGFzcyBTYW5pdGl6ZUh0bWxWYWx1ZUNvbnZlcnRlciB7XG5cdHRvVmlldyggdW50cnVzdGVkSHRtbCApIHtcblx0XHRyZXR1cm4gRE9NUHVyaWZ5LnNhbml0aXplKCB1bnRydXN0ZWRIdG1sICk7XG5cdH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
