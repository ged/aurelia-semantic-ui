System.register(['semantic'], function (_export) {
	"use strict";

	var Elements;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_semantic) {}],
		execute: function () {
			Elements = (function () {
				function Elements() {
					_classCallCheck(this, Elements);

					this.heading = 'Elements';
					this.buttonIcon = 'cloud';
					this.buttonColor = 'black';
					this.userIcon = 'user';
					this.loaderIsLoading = false;
					this.currentStep = 1;
				}

				_createClass(Elements, [{
					key: 'attached',
					value: function attached() {
						$('.ui.checkbox').checkbox();
						$('select.dropdox').dropdown();
					}
				}]);

				return Elements;
			})();

			_export('Elements', Elements);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvZWxlbWVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7S0FLQSxRQUFROzs7Ozs7Ozs7QUFBUixXQUFRO2FBQVIsUUFBUTsyQkFBUixRQUFROztVQUNwQixPQUFPLEdBQUcsVUFBVTtVQUNwQixVQUFVLEdBQUcsT0FBTztVQUNwQixXQUFXLEdBQUcsT0FBTztVQUNyQixRQUFRLEdBQUcsTUFBTTtVQUNqQixlQUFlLEdBQUcsS0FBSztVQUN2QixXQUFXLEdBQUcsQ0FBQzs7O2lCQU5ILFFBQVE7O1lBUVosb0JBQUc7QUFDVixPQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDN0IsT0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7TUFDL0I7OztXQVhXLFFBQVEiLCJmaWxlIjoibW9kdWxlcy9lbGVtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCAnc2VtYW50aWMnO1xuXG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50cyB7XG5cdGhlYWRpbmcgPSAnRWxlbWVudHMnO1xuXHRidXR0b25JY29uID0gJ2Nsb3VkJztcblx0YnV0dG9uQ29sb3IgPSAnYmxhY2snO1xuXHR1c2VySWNvbiA9ICd1c2VyJztcblx0bG9hZGVySXNMb2FkaW5nID0gZmFsc2U7XG5cdGN1cnJlbnRTdGVwID0gMTtcblxuXHRhdHRhY2hlZCgpIHtcblx0XHQkKCcudWkuY2hlY2tib3gnKS5jaGVja2JveCgpO1xuXHRcdCQoJ3NlbGVjdC5kcm9wZG94JykuZHJvcGRvd24oKTtcblx0fVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
