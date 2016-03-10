System.register(['aurelia-framework'], function (_export) {
	"use strict";

	var inject, LogManager, Views;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			LogManager = _aureliaFramework.LogManager;
		}],
		execute: function () {
			Views = (function () {
				function Views(element) {
					_classCallCheck(this, _Views);

					this.heading = 'Views';

					this.element = element;
					this.logger = LogManager.getLogger('views');
				}

				_createClass(Views, [{
					key: 'attached',
					value: function attached() {
						$(this.element).shape();
					}
				}, {
					key: 'toggleSource',
					value: function toggleSource(event) {
						this.logger.debug("Toggling source view for ", this.element);
						$(this.element).shape('flip over');
					}
				}]);

				var _Views = Views;
				Views = inject(Element)(Views) || Views;
				return Views;
			})();

			_export('Views', Views);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdmlld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7eUJBTUEsS0FBSzs7Ozs7Ozs7OEJBSlYsTUFBTTtrQ0FBRSxVQUFVOzs7QUFJYixRQUFLO0FBSU4sYUFKQyxLQUFLLENBSUosT0FBTyxFQUFHOzs7VUFIdkIsT0FBTyxHQUFHLE9BQU87O0FBSWhCLFNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFNBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBRSxPQUFPLENBQUUsQ0FBQztLQUM5Qzs7aUJBUFcsS0FBSzs7WUFTVCxvQkFBRztBQUNWLE9BQUMsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7TUFDMUI7OztZQUVXLHNCQUFFLEtBQUssRUFBRztBQUNyQixVQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSwyQkFBMkIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7QUFDL0QsT0FBQyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFLLENBQUUsV0FBVyxDQUFFLENBQUM7TUFDdkM7OztpQkFoQlcsS0FBSztBQUFMLFNBQUssR0FEakIsTUFBTSxDQUFFLE9BQU8sQ0FBRSxDQUNMLEtBQUssS0FBTCxLQUFLO1dBQUwsS0FBSyIsImZpbGUiOiJtb2R1bGVzL3ZpZXdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHtpbmplY3QsIExvZ01hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuXG5AaW5qZWN0KCBFbGVtZW50IClcbmV4cG9ydCBjbGFzcyBWaWV3cyB7XG5cdGhlYWRpbmcgPSAnVmlld3MnO1xuXG5cblx0Y29uc3RydWN0b3IoIGVsZW1lbnQgKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0XHR0aGlzLmxvZ2dlciA9IExvZ01hbmFnZXIuZ2V0TG9nZ2VyKCAndmlld3MnICk7XG5cdH1cblxuXHRhdHRhY2hlZCgpIHtcblx0XHQkKCB0aGlzLmVsZW1lbnQgKS5zaGFwZSgpO1xuXHR9XG5cblx0dG9nZ2xlU291cmNlKCBldmVudCApIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJUb2dnbGluZyBzb3VyY2UgdmlldyBmb3IgXCIsIHRoaXMuZWxlbWVudCApO1xuXHRcdCQoIHRoaXMuZWxlbWVudCApLnNoYXBlKCAnZmxpcCBvdmVyJyApO1xuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
