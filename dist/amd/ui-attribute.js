define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
	"use strict";

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.bindableEnum = bindableEnum;
	exports.bindableToggle = bindableToggle;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
});
//# sourceMappingURL=data:application/json;base64,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LE1BQUksaUJBQWlCLEdBQU0sSUFBSSxZQUFTLENBQUM7QUFDekMsU0FBTyxDQUFDLEtBQUssQ0FBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBRSxDQUFDO0FBQzNFLFFBQU0sQ0FBRSxpQkFBaUIsQ0FBRSxHQUFHLFVBQVUsUUFBUSxFQUFHO0FBQ2xELE9BQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxlQUFjLElBQUksYUFBTyxRQUFRLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQSxPQUFLLENBQUM7QUFDdkUsT0FBSyxRQUFRLEVBQUc7QUFBRSxRQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFBRSxNQUNoRDtBQUFFLFFBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUFFO0dBQzdDLENBQUM7O0FBRUYsTUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztBQUMvQixRQUFNLENBQUMsSUFBSSxHQUFHLFlBQW9CO3NDQUFQLElBQUk7QUFBSixRQUFJOzs7QUFDOUIsVUFBTyxDQUFDLEtBQUssQ0FBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUFDO0FBQzFDLE9BQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFHO0FBQ2pCLFFBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUNuQztHQUNELENBQUM7O0FBRUYsU0FBTyxzQkF2RVEsUUFBUSxFQXVFTixNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBRSxDQUFDO0VBQzVDIiwiZmlsZSI6InVpLWF0dHJpYnV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogVUlBdHRyaWJ1dGUgLS0gYmFzZSBjbGFzcyBmb3IgU2VtYW50aWMgVUkgYXR0cmlidXRlc1xuICovXG5cbmltcG9ydCB7aW5qZWN0LCBiaW5kYWJsZSwgTG9nTWFuYWdlcn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5jb25zdCBVSV9BVFRSSUJVVEVfTkFNRSA9IC9VSShcXHcrKUF0dHJpYnV0ZS87XG5cbkBpbmplY3QoIEVsZW1lbnQgKVxuZXhwb3J0IGNsYXNzIFVJQXR0cmlidXRlIHtcblxuXHRjb25zdHJ1Y3RvciggZWxlbWVudCApIHtcblx0XHR0aGlzLmxvZ2dlciA9IExvZ01hbmFnZXIuZ2V0TG9nZ2VyKCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKTtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXHR9XG5cblxuXHRiaW5kKCkge1xuXHRcdGxldCBuYW1lTWF0Y2ggPSBVSV9BVFRSSUJVVEVfTkFNRS5leGVjKCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKTtcblxuXHRcdGlmICggbmFtZU1hdGNoICkge1xuXHRcdFx0bGV0IGF0dHJOYW1lID0gbmFtZU1hdGNoWyAxIF0udG9Mb3dlckNhc2UoKTtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgQWRkaW5nICd1aSAke2F0dHJOYW1lfScgdG8gdGhlIGNsYXNzTGlzdC5gICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3VpJywgYXR0ck5hbWUgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5sb2dnZXIud2FybiggXCJBdHRyaWJ1dGUgY2xhc3MgZG9lc24ndCBtYXRjaCB0aGUgbmFtaW5nIGNvbnZlbnRpb247IFwiLFxuXHRcdFx0XHRcImFzc3VtaW5nIGl0J3MgZ29pbmcgdG8gbWFuYWdlIHRoZSBjbGFzc0xpc3QgaXRzZWxmLlwiICk7XG5cdFx0fVxuXHR9XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYmluZGFibGVFbnVtKCAuLi52YWxpZFZhbHVlcyApIHtcblx0Y29uc29sZS5kZWJ1ZyggXCJCaW5kYWJsZSBlbnVtIGRlY29yYXRvciBjYWxsZWQgd2l0aDogXCIsIHZhbGlkVmFsdWVzICk7XG5cdHJldHVybiBmdW5jdGlvbiggdGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yICkge1xuXHRcdGxldCBjaGFuZ2VkTWV0aG9kTmFtZSA9IGAke25hbWV9Q2hhbmdlZGA7XG5cdFx0Y29uc29sZS5kZWJ1ZyggXCJTZXR0aW5nIHVwIGEgXCIsIGNoYW5nZWRNZXRob2ROYW1lLCBcIiBtZXRob2Qgb24gXCIsIHRhcmdldCApO1xuXHRcdHRhcmdldFsgY2hhbmdlZE1ldGhvZE5hbWUgXSA9IGZ1bmN0aW9uKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYENoYW5naW5nICR7bmFtZX0gdG8gJHtuZXdWYWx1ZX0gZnJvbSAke29sZFZhbHVlfWAgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCBvbGRWYWx1ZSApO1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoIG5ld1ZhbHVlICk7XG5cdFx0fTtcblxuXHRcdGxldCBvcmlnaW5hbEJpbmQgPSB0YXJnZXQuYmluZDtcblx0XHR0YXJnZXQuYmluZCA9IGZ1bmN0aW9uKCAuLi5hcmdzICkge1xuXHRcdFx0UmVmbGVjdC5hcHBseSggb3JpZ2luYWxCaW5kLCB0aGlzLCBhcmdzICk7XG5cdFx0XHRpZiAoIHRoaXNbbmFtZV0gKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCB0aGlzW25hbWVdICk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiBiaW5kYWJsZSggdGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yICk7XG5cdH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRhYmxlVG9nZ2xlKCB0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IgKSB7XG5cdGNvbnNvbGUuZGVidWcoIFwiQmluZGFibGUgdG9nZ2xlIGRlY29yYXRvciBjYWxsZWQgd2l0aCBhcmdzOiBcIiwgdGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yICk7XG5cdGxldCBjaGFuZ2VkTWV0aG9kTmFtZSA9IGAke25hbWV9Q2hhbmdlZGA7XG5cdGNvbnNvbGUuZGVidWcoIFwiU2V0dGluZyB1cCBhIFwiLCBjaGFuZ2VkTWV0aG9kTmFtZSwgXCIgbWV0aG9kIG9uIFwiLCB0YXJnZXQgKTtcblx0dGFyZ2V0WyBjaGFuZ2VkTWV0aG9kTmFtZSBdID0gZnVuY3Rpb24oIG5ld1ZhbHVlICkge1xuXHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgVG9nZ2xpbmcgJHtuYW1lfSB0byAke25ld1ZhbHVlID8gJ29uJyA6ICdvZmYnfS5gICk7XG5cdFx0aWYgKCBuZXdWYWx1ZSApIHsgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQobmFtZSk7IH1cblx0XHRlbHNlIHsgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7IH1cblx0fTtcblxuXHRsZXQgb3JpZ2luYWxCaW5kID0gdGFyZ2V0LmJpbmQ7XG5cdHRhcmdldC5iaW5kID0gZnVuY3Rpb24oIC4uLmFyZ3MgKSB7XG5cdFx0UmVmbGVjdC5hcHBseSggb3JpZ2luYWxCaW5kLCB0aGlzLCBhcmdzICk7XG5cdFx0aWYgKCB0aGlzW25hbWVdICkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoIG5hbWUgKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIGJpbmRhYmxlKCB0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IgKTtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
