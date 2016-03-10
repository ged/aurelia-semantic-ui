
"use strict";

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.bindableEnum = bindableEnum;
exports.bindableToggle = bindableToggle;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var UI_ATTRIBUTE_NAME = /UI(\w+)Attribute/;

var UIAttribute = (function () {
	function UIAttribute(element) {
		_classCallCheck(this, _UIAttribute);

		this.logger = _aureliaFramework.LogManager.getLogger(this.constructor.name);
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
	UIAttribute = (0, _aureliaFramework.inject)(Element)(UIAttribute) || UIAttribute;
	return UIAttribute;
})();

exports.UIAttribute = UIAttribute;

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

		return (0, _aureliaFramework.bindable)(target, name, descriptor);
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

	return (0, _aureliaFramework.bindable)(target, name, descriptor);
}
//# sourceMappingURL=data:application/json;base64,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TSxJQUFJLFlBQVMsQ0FBQztBQUN6QyxRQUFPLENBQUMsS0FBSyxDQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFFLENBQUM7QUFDM0UsT0FBTSxDQUFFLGlCQUFpQixDQUFFLEdBQUcsVUFBVSxRQUFRLEVBQUc7QUFDbEQsTUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLGVBQWMsSUFBSSxhQUFPLFFBQVEsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFBLE9BQUssQ0FBQztBQUN2RSxNQUFLLFFBQVEsRUFBRztBQUFFLE9BQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUFFLE1BQ2hEO0FBQUUsT0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQUU7RUFDN0MsQ0FBQzs7QUFFRixLQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQy9CLE9BQU0sQ0FBQyxJQUFJLEdBQUcsWUFBb0I7cUNBQVAsSUFBSTtBQUFKLE9BQUk7OztBQUM5QixTQUFPLENBQUMsS0FBSyxDQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFFLENBQUM7QUFDMUMsTUFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUc7QUFDakIsT0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBRSxDQUFDO0dBQ25DO0VBQ0QsQ0FBQzs7QUFFRixRQUFPLGdDQUFVLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFFLENBQUM7Q0FDNUMiLCJmaWxlIjoidWktYXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBVSUF0dHJpYnV0ZSAtLSBiYXNlIGNsYXNzIGZvciBTZW1hbnRpYyBVSSBhdHRyaWJ1dGVzXG4gKi9cblxuaW1wb3J0IHtpbmplY3QsIGJpbmRhYmxlLCBMb2dNYW5hZ2VyfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmNvbnN0IFVJX0FUVFJJQlVURV9OQU1FID0gL1VJKFxcdyspQXR0cmlidXRlLztcblxuQGluamVjdCggRWxlbWVudCApXG5leHBvcnQgY2xhc3MgVUlBdHRyaWJ1dGUge1xuXG5cdGNvbnN0cnVjdG9yKCBlbGVtZW50ICkge1xuXHRcdHRoaXMubG9nZ2VyID0gTG9nTWFuYWdlci5nZXRMb2dnZXIoIHRoaXMuY29uc3RydWN0b3IubmFtZSApO1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdH1cblxuXG5cdGJpbmQoKSB7XG5cdFx0bGV0IG5hbWVNYXRjaCA9IFVJX0FUVFJJQlVURV9OQU1FLmV4ZWMoIHRoaXMuY29uc3RydWN0b3IubmFtZSApO1xuXG5cdFx0aWYgKCBuYW1lTWF0Y2ggKSB7XG5cdFx0XHRsZXQgYXR0ck5hbWUgPSBuYW1lTWF0Y2hbIDEgXS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBBZGRpbmcgJ3VpICR7YXR0ck5hbWV9JyB0byB0aGUgY2xhc3NMaXN0LmAgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAndWknLCBhdHRyTmFtZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxvZ2dlci53YXJuKCBcIkF0dHJpYnV0ZSBjbGFzcyBkb2Vzbid0IG1hdGNoIHRoZSBuYW1pbmcgY29udmVudGlvbjsgXCIsXG5cdFx0XHRcdFwiYXNzdW1pbmcgaXQncyBnb2luZyB0byBtYW5hZ2UgdGhlIGNsYXNzTGlzdCBpdHNlbGYuXCIgKTtcblx0XHR9XG5cdH1cblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kYWJsZUVudW0oIC4uLnZhbGlkVmFsdWVzICkge1xuXHRjb25zb2xlLmRlYnVnKCBcIkJpbmRhYmxlIGVudW0gZGVjb3JhdG9yIGNhbGxlZCB3aXRoOiBcIiwgdmFsaWRWYWx1ZXMgKTtcblx0cmV0dXJuIGZ1bmN0aW9uKCB0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IgKSB7XG5cdFx0bGV0IGNoYW5nZWRNZXRob2ROYW1lID0gYCR7bmFtZX1DaGFuZ2VkYDtcblx0XHRjb25zb2xlLmRlYnVnKCBcIlNldHRpbmcgdXAgYSBcIiwgY2hhbmdlZE1ldGhvZE5hbWUsIFwiIG1ldGhvZCBvbiBcIiwgdGFyZ2V0ICk7XG5cdFx0dGFyZ2V0WyBjaGFuZ2VkTWV0aG9kTmFtZSBdID0gZnVuY3Rpb24oIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgQ2hhbmdpbmcgJHtuYW1lfSB0byAke25ld1ZhbHVlfSBmcm9tICR7b2xkVmFsdWV9YCApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIG9sZFZhbHVlICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggbmV3VmFsdWUgKTtcblx0XHR9O1xuXG5cdFx0bGV0IG9yaWdpbmFsQmluZCA9IHRhcmdldC5iaW5kO1xuXHRcdHRhcmdldC5iaW5kID0gZnVuY3Rpb24oIC4uLmFyZ3MgKSB7XG5cdFx0XHRSZWZsZWN0LmFwcGx5KCBvcmlnaW5hbEJpbmQsIHRoaXMsIGFyZ3MgKTtcblx0XHRcdGlmICggdGhpc1tuYW1lXSApIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoIHRoaXNbbmFtZV0gKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIGJpbmRhYmxlKCB0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IgKTtcblx0fTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYmluZGFibGVUb2dnbGUoIHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvciApIHtcblx0Y29uc29sZS5kZWJ1ZyggXCJCaW5kYWJsZSB0b2dnbGUgZGVjb3JhdG9yIGNhbGxlZCB3aXRoIGFyZ3M6IFwiLCB0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IgKTtcblx0bGV0IGNoYW5nZWRNZXRob2ROYW1lID0gYCR7bmFtZX1DaGFuZ2VkYDtcblx0Y29uc29sZS5kZWJ1ZyggXCJTZXR0aW5nIHVwIGEgXCIsIGNoYW5nZWRNZXRob2ROYW1lLCBcIiBtZXRob2Qgb24gXCIsIHRhcmdldCApO1xuXHR0YXJnZXRbIGNoYW5nZWRNZXRob2ROYW1lIF0gPSBmdW5jdGlvbiggbmV3VmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBUb2dnbGluZyAke25hbWV9IHRvICR7bmV3VmFsdWUgPyAnb24nIDogJ29mZid9LmAgKTtcblx0XHRpZiAoIG5ld1ZhbHVlICkgeyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lKTsgfVxuXHRcdGVsc2UgeyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTsgfVxuXHR9O1xuXG5cdGxldCBvcmlnaW5hbEJpbmQgPSB0YXJnZXQuYmluZDtcblx0dGFyZ2V0LmJpbmQgPSBmdW5jdGlvbiggLi4uYXJncyApIHtcblx0XHRSZWZsZWN0LmFwcGx5KCBvcmlnaW5hbEJpbmQsIHRoaXMsIGFyZ3MgKTtcblx0XHRpZiAoIHRoaXNbbmFtZV0gKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggbmFtZSApO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gYmluZGFibGUoIHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvciApO1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
