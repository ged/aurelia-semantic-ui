define(['exports', '../constants', '../ui-attribute', 'aurelia-framework'], function (exports, _constants, _uiAttribute, _aureliaFramework) {
	/* -*- javascript -*- */
	"use strict";

	/**
  * Message - http://semantic-ui.com/collections/message.html
  */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UIMessageAttribute = undefined;

	function _initDefineProp(target, property, descriptor, context) {
		if (!descriptor) return;
		Object.defineProperty(target, property, {
			enumerable: descriptor.enumerable,
			configurable: descriptor.configurable,
			writable: descriptor.writable,
			value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
		});
	}

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
		var desc = {};
		Object['ke' + 'ys'](descriptor).forEach(function (key) {
			desc[key] = descriptor[key];
		});
		desc.enumerable = !!desc.enumerable;
		desc.configurable = !!desc.configurable;

		if ('value' in desc || desc.initializer) {
			desc.writable = true;
		}

		desc = decorators.slice().reverse().reduce(function (desc, decorator) {
			return decorator(target, property, desc) || desc;
		}, desc);

		if (context && desc.initializer !== void 0) {
			desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
			desc.initializer = undefined;
		}

		if (desc.initializer === void 0) {
			Object['define' + 'Property'](target, property, desc);
			desc = null;
		}

		return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
		throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2;

	let UIMessageAttribute = exports.UIMessageAttribute = (_dec = (0, _aureliaFramework.customAttribute)(`${ _constants.constants.attributePrefix }message`), _dec2 = (0, _aureliaFramework.child)('i.ui.icon'), _dec(_class = (_class2 = class UIMessageAttribute extends _uiAttribute.UIAttribute {
		constructor(...args) {
			var _temp;

			return _temp = super(...args), _initDefineProp(this, 'icon', _descriptor, this), _initDefineProp(this, 'iconElement', _descriptor2, this), _temp;
		}

		bind(...args) {
			super.bind(...args);
			if (this.icon) {
				this.logger.debug(`Adding 'icon' to the list of classes.`);
				this.element.classList.add('icon');
			}
		}

		attached() {
			this.logger.debug("Attaching a ui-message. Icon element is: ", this.iconElement);

			// Inject the icon if it's set but not already there
			if (this.icon && !this.iconElement) {
				this.logger.debug(`Creating a ${ this.icon } icon for `, this.element);
				let iconNode = document.createElement('i');
				iconNode.classList.add('ui', 'icon');
				iconNode.classList.add(...this.icon.split(' '));
				this.element.insertBefore(iconNode, this.element.firstChild);
				this.iconElement = iconNode;
			}
		}

		iconChanged(newValue, oldValue) {
			if (this.iconElement) {
				this.logger.debug(`Swapping icon of ${ this.iconElement } to ${ newValue } from ${ oldValue }`);
				if (oldValue) {
					this.iconElement.classList.remove(...oldValue.split(' '));
				}
				if (newValue) {
					this.iconElement.classList.add(...newValue.split(' '));
				}
			}
		}

	}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'iconElement', [_dec2], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3VpLW1lc3NhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXYSxrQixXQUFBLGtCLFdBRFosdUNBQWtCLElBQUUscUJBQVUsZUFBZ0IsVUFBOUMsQyxVQUlDLDZCQUFPLFdBQVAsQywyQkFISyxNQUFNLGtCQUFOLGtDQUE2QztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFNbkQsT0FBTSxHQUFHLElBQVQsRUFBZ0I7QUFDZixTQUFNLElBQU4sQ0FBWSxHQUFHLElBQWY7QUFDQSxPQUFLLEtBQUssSUFBVixFQUFpQjtBQUNoQixTQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW9CLHVDQUFwQjtBQUNBLFNBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsTUFBM0I7QUFDQTtBQUNEOztBQUdELGFBQVc7QUFDVixRQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW1CLDJDQUFuQixFQUFnRSxLQUFLLFdBQXJFOzs7QUFHQSxPQUFLLEtBQUssSUFBTCxJQUFhLENBQUMsS0FBSyxXQUF4QixFQUFzQztBQUNyQyxTQUFLLE1BQUwsQ0FBWSxLQUFaLENBQW9CLGVBQWEsS0FBSyxJQUFLLGFBQTNDLEVBQXdELEtBQUssT0FBN0Q7QUFDQSxRQUFJLFdBQVcsU0FBUyxhQUFULENBQXdCLEdBQXhCLENBQWY7QUFDQSxhQUFTLFNBQVQsQ0FBbUIsR0FBbkIsQ0FBd0IsSUFBeEIsRUFBOEIsTUFBOUI7QUFDQSxhQUFTLFNBQVQsQ0FBbUIsR0FBbkIsQ0FBd0IsR0FBRyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLEdBQWhCLENBQTNCO0FBQ0EsU0FBSyxPQUFMLENBQWEsWUFBYixDQUEyQixRQUEzQixFQUFxQyxLQUFLLE9BQUwsQ0FBYSxVQUFsRDtBQUNBLFNBQUssV0FBTCxHQUFtQixRQUFuQjtBQUNBO0FBQ0Q7O0FBR0QsY0FBYSxRQUFiLEVBQXVCLFFBQXZCLEVBQWtDO0FBQ2pDLE9BQUssS0FBSyxXQUFWLEVBQXdCO0FBQ3ZCLFNBQUssTUFBTCxDQUFZLEtBQVosQ0FBb0IscUJBQW1CLEtBQUssV0FBWSxTQUFNLFFBQVMsV0FBUSxRQUFTLEdBQXhGO0FBQ0EsUUFBSyxRQUFMLEVBQWdCO0FBQUUsVUFBSyxXQUFMLENBQWlCLFNBQWpCLENBQTJCLE1BQTNCLENBQWtDLEdBQUcsU0FBUyxLQUFULENBQWUsR0FBZixDQUFyQztBQUE0RDtBQUM5RSxRQUFLLFFBQUwsRUFBZ0I7QUFBRSxVQUFLLFdBQUwsQ0FBaUIsU0FBakIsQ0FBMkIsR0FBM0IsQ0FBK0IsR0FBRyxTQUFTLEtBQVQsQ0FBZSxHQUFmLENBQWxDO0FBQXlEO0FBQzNFO0FBQ0Q7O0FBcENrRCxFIiwiZmlsZSI6ImNvbGxlY3Rpb25zL3VpLW1lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIE1lc3NhZ2UgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2NvbGxlY3Rpb25zL21lc3NhZ2UuaHRtbFxuICovXG5cbmltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtVSUF0dHJpYnV0ZSwgYmluZGFibGVUb2dnbGUsIGJpbmRhYmxlRW51bX0gZnJvbSAnLi4vdWktYXR0cmlidXRlJztcbmltcG9ydCB7aW5qZWN0LCBjaGlsZCwgY3VzdG9tQXR0cmlidXRlLCBjaGlsZHJlbiwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUF0dHJpYnV0ZSggYCR7Y29uc3RhbnRzLmF0dHJpYnV0ZVByZWZpeH1tZXNzYWdlYCApXG5leHBvcnQgY2xhc3MgVUlNZXNzYWdlQXR0cmlidXRlIGV4dGVuZHMgVUlBdHRyaWJ1dGUge1xuXG5cdEBiaW5kYWJsZSBpY29uO1xuXHRAY2hpbGQoICdpLnVpLmljb24nICkgaWNvbkVsZW1lbnQ7XG5cblxuXHRiaW5kKCAuLi5hcmdzICkge1xuXHRcdHN1cGVyLmJpbmQoIC4uLmFyZ3MgKTtcblx0XHRpZiAoIHRoaXMuaWNvbiApIHtcblx0XHRcdHRoaXMubG9nZ2VyLmRlYnVnKCBgQWRkaW5nICdpY29uJyB0byB0aGUgbGlzdCBvZiBjbGFzc2VzLmAgKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG5cdFx0fVxuXHR9XG5cblxuXHRhdHRhY2hlZCgpIHtcblx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggXCJBdHRhY2hpbmcgYSB1aS1tZXNzYWdlLiBJY29uIGVsZW1lbnQgaXM6IFwiLCB0aGlzLmljb25FbGVtZW50ICk7XG5cblx0XHQvLyBJbmplY3QgdGhlIGljb24gaWYgaXQncyBzZXQgYnV0IG5vdCBhbHJlYWR5IHRoZXJlXG5cdFx0aWYgKCB0aGlzLmljb24gJiYgIXRoaXMuaWNvbkVsZW1lbnQgKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyggYENyZWF0aW5nIGEgJHt0aGlzLmljb259IGljb24gZm9yIGAsIHRoaXMuZWxlbWVudCApO1xuXHRcdFx0bGV0IGljb25Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2knICk7XG5cdFx0XHRpY29uTm9kZS5jbGFzc0xpc3QuYWRkKCAndWknLCAnaWNvbicgKTtcblx0XHRcdGljb25Ob2RlLmNsYXNzTGlzdC5hZGQoIC4uLnRoaXMuaWNvbi5zcGxpdCgnICcpICk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKCBpY29uTm9kZSwgdGhpcy5lbGVtZW50LmZpcnN0Q2hpbGQgKTtcblx0XHRcdHRoaXMuaWNvbkVsZW1lbnQgPSBpY29uTm9kZTtcblx0XHR9XG5cdH1cblxuXG5cdGljb25DaGFuZ2VkKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSB7XG5cdFx0aWYgKCB0aGlzLmljb25FbGVtZW50ICkge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIGBTd2FwcGluZyBpY29uIG9mICR7dGhpcy5pY29uRWxlbWVudH0gdG8gJHtuZXdWYWx1ZX0gZnJvbSAke29sZFZhbHVlfWAgKTtcblx0XHRcdGlmICggb2xkVmFsdWUgKSB7IHRoaXMuaWNvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5vbGRWYWx1ZS5zcGxpdCgnICcpKTsgfVxuXHRcdFx0aWYgKCBuZXdWYWx1ZSApIHsgdGhpcy5pY29uRWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLm5ld1ZhbHVlLnNwbGl0KCcgJykpOyB9XG5cdFx0fVxuXHR9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
