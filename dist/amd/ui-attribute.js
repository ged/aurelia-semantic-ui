define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * UIAttribute -- base class for Semantic UI attributes
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIAttribute = undefined;
	exports.bindableEnum = bindableEnum;
	exports.bindableToggle = bindableToggle;

	var _dec, _class;

	const UI_ATTRIBUTE_NAME = /UI(\w+)Attribute/;

	let UIAttribute = exports.UIAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = class UIAttribute {

		constructor(element) {
			this.logger = _aureliaFramework.LogManager.getLogger(this.constructor.name);
			this.element = element;
		}

		bind() {
			let nameMatch = UI_ATTRIBUTE_NAME.exec(this.constructor.name);

			if (nameMatch) {
				let attrName = nameMatch[1].toLowerCase();
				this.element.classList.add('ui', attrName);
			} else {
				this.logger.warn("Attribute class doesn't match the naming convention; ", "assuming it's going to manage the classList itself.");
			}
		}

	}) || _class);
	function bindableEnum(...validValues) {
		// console.debug( "Bindable enum decorator called with: ", validValues );
		return function (target, name, descriptor) {
			let changedMethodName = `${ name }Changed`;
			// console.debug( "Setting up a ", changedMethodName, " method on ", target );
			target[changedMethodName] = function (newValue, oldValue) {
				this.logger.debug(`Changing ${ name } to ${ newValue } from ${ oldValue }`);
				this.element.classList.remove(oldValue);
				this.element.classList.add(newValue);
			};

			let originalBind = target.bind;
			target.bind = function (...args) {
				Reflect.apply(originalBind, this, args);
				if (this[name]) {
					this.element.classList.add(this[name]);
				}
			};

			return (0, _aureliaFramework.bindable)(target, name, descriptor);
		};
	}

	function bindableToggle(target, name, descriptor) {
		// console.debug( "Bindable toggle decorator called with args: ", target, name, descriptor );
		let changedMethodName = `${ name }Changed`;
		// console.debug( "Setting up a ", changedMethodName, " method on ", target );
		target[changedMethodName] = function (newValue) {
			this.logger.debug(`Toggling ${ name } to ${ newValue ? 'on' : 'off' }.`);
			if (newValue) {
				this.element.classList.add(name);
			} else {
				this.element.classList.remove(name);
			}
		};

		let originalBind = target.bind;
		target.bind = function (...args) {
			Reflect.apply(originalBind, this, args);
			if (this[name]) {
				this.element.classList.add(name);
			}
		};

		return (0, _aureliaFramework.bindable)(target, name, descriptor);
	}
});
//# sourceMappingURL=data:application/json;base64,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QUF1QixHQUF2QixDQUE0QixJQUE1QjtBQUNBO0FBQ0QsR0FMRDs7QUFPQSxTQUFPLGdDQUFVLE1BQVYsRUFBa0IsSUFBbEIsRUFBd0IsVUFBeEIsQ0FBUDtBQUNBIiwiZmlsZSI6InVpLWF0dHJpYnV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogVUlBdHRyaWJ1dGUgLS0gYmFzZSBjbGFzcyBmb3IgU2VtYW50aWMgVUkgYXR0cmlidXRlc1xuICovXG5cbmltcG9ydCB7aW5qZWN0LCBiaW5kYWJsZSwgTG9nTWFuYWdlcn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5jb25zdCBVSV9BVFRSSUJVVEVfTkFNRSA9IC9VSShcXHcrKUF0dHJpYnV0ZS87XG5cbkBpbmplY3QoIEVsZW1lbnQgKVxuZXhwb3J0IGNsYXNzIFVJQXR0cmlidXRlIHtcblxuXHRjb25zdHJ1Y3RvciggZWxlbWVudCApIHtcblx0XHR0aGlzLmxvZ2dlciA9IExvZ01hbmFnZXIuZ2V0TG9nZ2VyKCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKTtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXHR9XG5cblxuXHRiaW5kKCkge1xuXHRcdGxldCBuYW1lTWF0Y2ggPSBVSV9BVFRSSUJVVEVfTkFNRS5leGVjKCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKTtcblxuXHRcdGlmICggbmFtZU1hdGNoICkge1xuXHRcdFx0bGV0IGF0dHJOYW1lID0gbmFtZU1hdGNoWyAxIF0udG9Mb3dlckNhc2UoKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAndWknLCBhdHRyTmFtZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxvZ2dlci53YXJuKCBcIkF0dHJpYnV0ZSBjbGFzcyBkb2Vzbid0IG1hdGNoIHRoZSBuYW1pbmcgY29udmVudGlvbjsgXCIsXG5cdFx0XHRcdFwiYXNzdW1pbmcgaXQncyBnb2luZyB0byBtYW5hZ2UgdGhlIGNsYXNzTGlzdCBpdHNlbGYuXCIgKTtcblx0XHR9XG5cdH1cblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kYWJsZUVudW0oIC4uLnZhbGlkVmFsdWVzICkge1xuXHQvLyBjb25zb2xlLmRlYnVnKCBcIkJpbmRhYmxlIGVudW0gZGVjb3JhdG9yIGNhbGxlZCB3aXRoOiBcIiwgdmFsaWRWYWx1ZXMgKTtcblx0cmV0dXJuIGZ1bmN0aW9uKCB0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IgKSB7XG5cdFx0bGV0IGNoYW5nZWRNZXRob2ROYW1lID0gYCR7bmFtZX1DaGFuZ2VkYDtcblx0XHQvLyBjb25zb2xlLmRlYnVnKCBcIlNldHRpbmcgdXAgYSBcIiwgY2hhbmdlZE1ldGhvZE5hbWUsIFwiIG1ldGhvZCBvbiBcIiwgdGFyZ2V0ICk7XG5cdFx0dGFyZ2V0WyBjaGFuZ2VkTWV0aG9kTmFtZSBdID0gZnVuY3Rpb24oIG5ld1ZhbHVlLCBvbGRWYWx1ZSApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgQ2hhbmdpbmcgJHtuYW1lfSB0byAke25ld1ZhbHVlfSBmcm9tICR7b2xkVmFsdWV9YCApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIG9sZFZhbHVlICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggbmV3VmFsdWUgKTtcblx0XHR9O1xuXG5cdFx0bGV0IG9yaWdpbmFsQmluZCA9IHRhcmdldC5iaW5kO1xuXHRcdHRhcmdldC5iaW5kID0gZnVuY3Rpb24oIC4uLmFyZ3MgKSB7XG5cdFx0XHRSZWZsZWN0LmFwcGx5KCBvcmlnaW5hbEJpbmQsIHRoaXMsIGFyZ3MgKTtcblx0XHRcdGlmICggdGhpc1tuYW1lXSApIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoIHRoaXNbbmFtZV0gKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIGJpbmRhYmxlKCB0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IgKTtcblx0fTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYmluZGFibGVUb2dnbGUoIHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvciApIHtcblx0Ly8gY29uc29sZS5kZWJ1ZyggXCJCaW5kYWJsZSB0b2dnbGUgZGVjb3JhdG9yIGNhbGxlZCB3aXRoIGFyZ3M6IFwiLCB0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IgKTtcblx0bGV0IGNoYW5nZWRNZXRob2ROYW1lID0gYCR7bmFtZX1DaGFuZ2VkYDtcblx0Ly8gY29uc29sZS5kZWJ1ZyggXCJTZXR0aW5nIHVwIGEgXCIsIGNoYW5nZWRNZXRob2ROYW1lLCBcIiBtZXRob2Qgb24gXCIsIHRhcmdldCApO1xuXHR0YXJnZXRbIGNoYW5nZWRNZXRob2ROYW1lIF0gPSBmdW5jdGlvbiggbmV3VmFsdWUgKSB7XG5cdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBUb2dnbGluZyAke25hbWV9IHRvICR7bmV3VmFsdWUgPyAnb24nIDogJ29mZid9LmAgKTtcblx0XHRpZiAoIG5ld1ZhbHVlICkgeyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lKTsgfVxuXHRcdGVsc2UgeyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTsgfVxuXHR9O1xuXG5cdGxldCBvcmlnaW5hbEJpbmQgPSB0YXJnZXQuYmluZDtcblx0dGFyZ2V0LmJpbmQgPSBmdW5jdGlvbiggLi4uYXJncyApIHtcblx0XHRSZWZsZWN0LmFwcGx5KCBvcmlnaW5hbEJpbmQsIHRoaXMsIGFyZ3MgKTtcblx0XHRpZiAoIHRoaXNbbmFtZV0gKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggbmFtZSApO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gYmluZGFibGUoIHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvciApO1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
