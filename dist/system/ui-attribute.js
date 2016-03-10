System.register(['aurelia-framework'], function (_export) {
	"use strict";

	var inject, bindable, LogManager, UI_ATTRIBUTE_NAME, UIAttribute;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	_export('bindableEnum', bindableEnum);

	_export('bindableToggle', bindableToggle);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function bindableEnum() {
		for (var _len = arguments.length, validValues = Array(_len), _key = 0; _key < _len; _key++) {
			validValues[_key] = arguments[_key];
		}

		console.debug("Bindable enum decorator called with: ", validValues);
		return function (target, name, descriptor) {
			var changedMethodName = name + 'Changed';
			console.debug("Setting up a ", changedMethodName, " method on ", target);
			target[changedMethodName] = function (newValue, oldValue) {
				this.logger.debug('Changing ' + name + ' to ' + newValue + ' from ' + oldValue);
				this.element.classList.remove(oldValue);
				this.element.classList.add(newValue);
			};

			var originalBind = target.bind;
			target.bind = function () {
				for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					args[_key2] = arguments[_key2];
				}

				Reflect.apply(originalBind, this, args);
				if (this[name]) {
					this.element.classList.add(this[name]);
				}
			};

			return bindable(target, name, descriptor);
		};
	}

	function bindableToggle(target, name, descriptor) {
		console.debug("Bindable toggle decorator called with args: ", target, name, descriptor);
		var changedMethodName = name + 'Changed';
		console.debug("Setting up a ", changedMethodName, " method on ", target);
		target[changedMethodName] = function (newValue) {
			this.logger.debug('Toggling ' + name + ' to ' + (newValue ? 'on' : 'off') + '.');
			if (newValue) {
				this.element.classList.add(name);
			} else {
				this.element.classList.remove(name);
			}
		};

		var originalBind = target.bind;
		target.bind = function () {
			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			Reflect.apply(originalBind, this, args);
			if (this[name]) {
				this.element.classList.add(name);
			}
		};

		return bindable(target, name, descriptor);
	}

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			bindable = _aureliaFramework.bindable;
			LogManager = _aureliaFramework.LogManager;
		}],
		execute: function () {
			UI_ATTRIBUTE_NAME = /UI(\w+)Attribute/;

			UIAttribute = (function () {
				function UIAttribute(element) {
					_classCallCheck(this, _UIAttribute);

					this.logger = LogManager.getLogger(this.constructor.name);
					this.element = element;
				}

				_createClass(UIAttribute, [{
					key: 'bind',
					value: function bind() {
						var nameMatch = UI_ATTRIBUTE_NAME.exec(this.constructor.name);

						if (nameMatch) {
							var attrName = nameMatch[1].toLowerCase();
							this.logger.debug('Adding \'ui ' + attrName + '\' to the classList.');
							this.element.classList.add('ui', attrName);
						} else {
							this.logger.warn("Attribute class doesn't match the naming convention; ", "assuming it's going to manage the classList itself.");
						}
					}
				}]);

				var _UIAttribute = UIAttribute;
				UIAttribute = inject(Element)(UIAttribute) || UIAttribute;
				return UIAttribute;
			})();

			_export('UIAttribute', UIAttribute);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,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RUYsU0FBTyxRQUFRLENBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUUsQ0FBQztFQUM1Qzs7Ozs4QkF4RU8sTUFBTTtnQ0FBRSxRQUFRO2tDQUFFLFVBQVU7OztBQUU5QixvQkFBaUIsR0FBRyxrQkFBa0I7O0FBRy9CLGNBQVc7QUFFWixhQUZDLFdBQVcsQ0FFVixPQUFPLEVBQUc7OztBQUN0QixTQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUUsQ0FBQztBQUM1RCxTQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN2Qjs7aUJBTFcsV0FBVzs7WUFRbkIsZ0JBQUc7QUFDTixVQUFJLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUUsQ0FBQzs7QUFFaEUsVUFBSyxTQUFTLEVBQUc7QUFDaEIsV0FBSSxRQUFRLEdBQUcsU0FBUyxDQUFFLENBQUMsQ0FBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzVDLFdBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxrQkFBZ0IsUUFBUSwwQkFBdUIsQ0FBQztBQUNqRSxXQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBRSxDQUFDO09BQzdDLE1BQU07QUFDTixXQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSx1REFBdUQsRUFDeEUscURBQXFELENBQUUsQ0FBQztPQUN6RDtNQUNEOzs7dUJBbkJXLFdBQVc7QUFBWCxlQUFXLEdBRHZCLE1BQU0sQ0FBRSxPQUFPLENBQUUsQ0FDTCxXQUFXLEtBQVgsV0FBVztXQUFYLFdBQVciLCJmaWxlIjoidWktYXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBVSUF0dHJpYnV0ZSAtLSBiYXNlIGNsYXNzIGZvciBTZW1hbnRpYyBVSSBhdHRyaWJ1dGVzXG4gKi9cblxuaW1wb3J0IHtpbmplY3QsIGJpbmRhYmxlLCBMb2dNYW5hZ2VyfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmNvbnN0IFVJX0FUVFJJQlVURV9OQU1FID0gL1VJKFxcdyspQXR0cmlidXRlLztcblxuQGluamVjdCggRWxlbWVudCApXG5leHBvcnQgY2xhc3MgVUlBdHRyaWJ1dGUge1xuXG5cdGNvbnN0cnVjdG9yKCBlbGVtZW50ICkge1xuXHRcdHRoaXMubG9nZ2VyID0gTG9nTWFuYWdlci5nZXRMb2dnZXIoIHRoaXMuY29uc3RydWN0b3IubmFtZSApO1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdH1cblxuXG5cdGJpbmQoKSB7XG5cdFx0bGV0IG5hbWVNYXRjaCA9IFVJX0FUVFJJQlVURV9OQU1FLmV4ZWMoIHRoaXMuY29uc3RydWN0b3IubmFtZSApO1xuXG5cdFx0aWYgKCBuYW1lTWF0Y2ggKSB7XG5cdFx0XHRsZXQgYXR0ck5hbWUgPSBuYW1lTWF0Y2hbIDEgXS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBBZGRpbmcgJ3VpICR7YXR0ck5hbWV9JyB0byB0aGUgY2xhc3NMaXN0LmAgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAndWknLCBhdHRyTmFtZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxvZ2dlci53YXJuKCBcIkF0dHJpYnV0ZSBjbGFzcyBkb2Vzbid0IG1hdGNoIHRoZSBuYW1pbmcgY29udmVudGlvbjsgXCIsXG5cdFx0XHRcdFwiYXNzdW1pbmcgaXQncyBnb2luZyB0byBtYW5hZ2UgdGhlIGNsYXNzTGlzdCBpdHNlbGYuXCIgKTtcblx0XHR9XG5cdH1cblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kYWJsZUVudW0oIC4uLnZhbGlkVmFsdWVzICkge1xuXHRjb25zb2xlLmRlYnVnKCBcIkJpbmRhYmxlIGVudW0gZGVjb3JhdG9yIGNhbGxlZCB3aXRoOiBcIiwgdmFsaWRWYWx1ZXMgKTtcblx0cmV0dXJuIGZ1bmN0aW9uKCB0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IgKSB7XG5cdFx0bGV0IGNoYW5nZWRNZXRob2ROYW1lID0gYCR7bmFtZX1DaGFuZ2VkYDtcblx0XHRjb25zb2xlLmRlYnVnKCBcIlNldHRpbmcgdXAgYSBcIiwgY2hhbmdlZE1ldGhvZE5hbWUsIFwiIG1ldGhvZCBvbiBcIiwgdGFyZ2V0ICk7XG5cdFx0dGFyZ2V0WyBjaGFuZ2VkTWV0aG9kTmFtZSBdID0gZnVuY3Rpb24oIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgQ2hhbmdpbmcgJHtuYW1lfSB0byAke25ld1ZhbHVlfSBmcm9tICR7b2xkVmFsdWV9YCApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIG9sZFZhbHVlICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggbmV3VmFsdWUgKTtcblx0XHR9O1xuXG5cdFx0bGV0IG9yaWdpbmFsQmluZCA9IHRhcmdldC5iaW5kO1xuXHRcdHRhcmdldC5iaW5kID0gZnVuY3Rpb24oIC4uLmFyZ3MgKSB7XG5cdFx0XHRSZWZsZWN0LmFwcGx5KCBvcmlnaW5hbEJpbmQsIHRoaXMsIGFyZ3MgKTtcblx0XHRcdGlmICggdGhpc1tuYW1lXSApIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoIHRoaXNbbmFtZV0gKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIGJpbmRhYmxlKCB0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IgKTtcblx0fTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYmluZGFibGVUb2dnbGUoIHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvciApIHtcblx0Y29uc29sZS5kZWJ1ZyggXCJCaW5kYWJsZSB0b2dnbGUgZGVjb3JhdG9yIGNhbGxlZCB3aXRoIGFyZ3M6IFwiLCB0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IgKTtcblx0bGV0IGNoYW5nZWRNZXRob2ROYW1lID0gYCR7bmFtZX1DaGFuZ2VkYDtcblx0Y29uc29sZS5kZWJ1ZyggXCJTZXR0aW5nIHVwIGEgXCIsIGNoYW5nZWRNZXRob2ROYW1lLCBcIiBtZXRob2Qgb24gXCIsIHRhcmdldCApO1xuXHR0YXJnZXRbIGNoYW5nZWRNZXRob2ROYW1lIF0gPSBmdW5jdGlvbiggbmV3VmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBUb2dnbGluZyAke25hbWV9IHRvICR7bmV3VmFsdWUgPyAnb24nIDogJ29mZid9LmAgKTtcblx0XHRpZiAoIG5ld1ZhbHVlICkgeyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lKTsgfVxuXHRcdGVsc2UgeyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTsgfVxuXHR9O1xuXG5cdGxldCBvcmlnaW5hbEJpbmQgPSB0YXJnZXQuYmluZDtcblx0dGFyZ2V0LmJpbmQgPSBmdW5jdGlvbiggLi4uYXJncyApIHtcblx0XHRSZWZsZWN0LmFwcGx5KCBvcmlnaW5hbEJpbmQsIHRoaXMsIGFyZ3MgKTtcblx0XHRpZiAoIHRoaXNbbmFtZV0gKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggbmFtZSApO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gYmluZGFibGUoIHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvciApO1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
