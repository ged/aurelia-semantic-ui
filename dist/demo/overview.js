System.register(['prism', 'aurelia-framework'], function (_export) {
	"use strict";

	var Prism, inject, Overview;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_prism) {
			Prism = _prism['default'];
		}, function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}],
		execute: function () {
			Overview = (function () {
				function Overview(element) {
					_classCallCheck(this, _Overview);

					this.heading = 'Overview';

					this.element = element;
				}

				_createClass(Overview, [{
					key: 'attached',
					value: function attached() {
						var els = this.element.querySelectorAll('code[class^="language-"]');
						var _iteratorNormalCompletion = true;
						var _didIteratorError = false;
						var _iteratorError = undefined;

						try {
							for (var _iterator = els[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
								var el = _step.value;

								Prism.highlightElement(el);
							}
						} catch (err) {
							_didIteratorError = true;
							_iteratorError = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion && _iterator['return']) {
									_iterator['return']();
								}
							} finally {
								if (_didIteratorError) {
									throw _iteratorError;
								}
							}
						}
					}
				}]);

				var _Overview = Overview;
				Overview = inject(Element)(Overview) || Overview;
				return Overview;
			})();

			_export('Overview', Overview);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxhQUFZLENBQUM7O29CQU1BLFFBQVE7Ozs7Ozs7Ozs7OEJBSGIsTUFBTTs7O0FBR0QsV0FBUTtBQUlULGFBSkMsUUFBUSxDQUlQLE9BQU8sRUFBRzs7O1VBSHZCLE9BQU8sR0FBRyxVQUFVOztBQUluQixTQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN2Qjs7aUJBTlcsUUFBUTs7WUFRWixvQkFBRztBQUNWLFVBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUUsMEJBQTBCLENBQUUsQ0FBQzs7Ozs7O0FBQ3RFLDRCQUFnQixHQUFHLDhIQUFHO1lBQVosRUFBRTs7QUFDWCxhQUFLLENBQUMsZ0JBQWdCLENBQUUsRUFBRSxDQUFFLENBQUM7UUFDN0I7Ozs7Ozs7Ozs7Ozs7OztNQUNEOzs7b0JBYlcsUUFBUTtBQUFSLFlBQVEsR0FEcEIsTUFBTSxDQUFFLE9BQU8sQ0FBRSxDQUNMLFFBQVEsS0FBUixRQUFRO1dBQVIsUUFBUSIsImZpbGUiOiJvdmVydmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcmlzbSBmcm9tICdwcmlzbSc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KCBFbGVtZW50IClcbmV4cG9ydCBjbGFzcyBPdmVydmlldyB7XG5cdGhlYWRpbmcgPSAnT3ZlcnZpZXcnO1xuXG5cblx0Y29uc3RydWN0b3IoIGVsZW1lbnQgKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0fVxuXG5cdGF0dGFjaGVkKCkge1xuXHRcdGxldCBlbHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggJ2NvZGVbY2xhc3NePVwibGFuZ3VhZ2UtXCJdJyApO1xuXHRcdGZvciAoIGxldCBlbCBvZiBlbHMgKSB7XG5cdFx0XHRQcmlzbS5oaWdobGlnaHRFbGVtZW50KCBlbCApO1xuXHRcdH1cblx0fVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
