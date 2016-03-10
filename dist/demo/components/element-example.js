System.register(['prism', 'aurelia-framework'], function (_export) {
	"use strict";

	var Prism, TargetInstruction, BehaviorPropertyObserver, LogManager, child, customElement, processContent, inject, bindable, ElementExampleElement;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_prism) {
			Prism = _prism['default'];
		}, function (_aureliaFramework) {
			TargetInstruction = _aureliaFramework.TargetInstruction;
			BehaviorPropertyObserver = _aureliaFramework.BehaviorPropertyObserver;
			LogManager = _aureliaFramework.LogManager;
			child = _aureliaFramework.child;
			customElement = _aureliaFramework.customElement;
			processContent = _aureliaFramework.processContent;
			inject = _aureliaFramework.inject;
			bindable = _aureliaFramework.bindable;
		}],
		execute: function () {
			ElementExampleElement = (function () {
				var _instanceInitializers = {};
				var _instanceInitializers = {};

				_createDecoratedClass(ElementExampleElement, [{
					key: 'language',
					decorators: [bindable],
					initializer: function initializer() {
						return 'markup';
					},
					enumerable: true
				}, {
					key: 'exampleSource',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: 'caption',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: 'layout',
					decorators: [bindable],
					initializer: function initializer() {
						return 'side-by-side';
					},
					enumerable: true
				}], null, _instanceInitializers);

				function ElementExampleElement(element, targetInstruction) {
					_classCallCheck(this, _ElementExampleElement);

					_defineDecoratedPropertyDescriptor(this, 'language', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'exampleSource', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'caption', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'layout', _instanceInitializers);

					this.element = element;
					this.logger = LogManager.getLogger('element-example');
					this.exampleSource = this.extractRawContent(targetInstruction);
				}

				_createDecoratedClass(ElementExampleElement, [{
					key: 'extractRawContent',
					value: function extractRawContent(targetInstruction) {
						if (targetInstruction.elementInstruction.exampleSource) {
							var content = targetInstruction.elementInstruction.exampleSource;

							var match = /^\n(\s+)/.exec(content);
							if (match) {
								var indent = match[1];
								var re = new RegExp('\n' + indent, 'g');

								content = content.replace(re, "\n");
							}

							content = content.replace(/\t/g, '    ').trim();

							return content;
						} else {
							return "";
						}
					}
				}, {
					key: 'attached',
					value: function attached() {
						var sourceEl = this.element.querySelector('.example-source');
						if (sourceEl) {
							this.logger.debug("Highlighting ", sourceEl, ' as ' + this.language + '.');
							Prism.highlightElement(sourceEl);
						} else {
							this.logger.error("Couldn't find the source element for", this.element);
						}
					}
				}], null, _instanceInitializers);

				var _ElementExampleElement = ElementExampleElement;
				ElementExampleElement = customElement('element-example')(ElementExampleElement) || ElementExampleElement;
				ElementExampleElement = inject(Element, TargetInstruction)(ElementExampleElement) || ElementExampleElement;
				ElementExampleElement = processContent(function (compiler, resources, element, instruction) {
					var exampleSource = element.innerHTML;
					if (exampleSource !== '') {
						instruction.exampleSource = exampleSource;
					}

					return true;
				})(ElementExampleElement) || ElementExampleElement;
				return ElementExampleElement;
			})();

			_export('ElementExampleElement', ElementExampleElement);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZWxlbWVudC1leGFtcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxhQUFZLENBQUM7OzZIQXlCQSxxQkFBcUI7Ozs7Ozs7Ozs7Ozt5Q0FwQmpDLGlCQUFpQjtnREFDakIsd0JBQXdCO2tDQUN4QixVQUFVOzZCQUNWLEtBQUs7cUNBQ0wsYUFBYTtzQ0FDYixjQUFjOzhCQUNkLE1BQU07Z0NBQ04sUUFBUTs7O0FBYUksd0JBQXFCOzs7OzBCQUFyQixxQkFBcUI7O2tCQUVoQyxRQUFROzthQUFZLFFBQVE7Ozs7O2tCQUM1QixRQUFROzs7OztrQkFDUixRQUFROzs7OztrQkFRUixRQUFROzthQUFVLGNBQWM7Ozs7O0FBR3RCLGFBZkMscUJBQXFCLENBZXBCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRzs7Ozs7Ozs7Ozs7QUFDekMsU0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsU0FBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFFLGlCQUFpQixDQUFFLENBQUM7QUFDeEQsU0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUUsaUJBQWlCLENBQUUsQ0FBQztLQUNqRTs7MEJBbkJXLHFCQUFxQjs7WUFxQmhCLDJCQUFFLGlCQUFpQixFQUFHO0FBQ3RDLFVBQUssaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFHO0FBQ3pELFdBQUksT0FBTyxHQUFHLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQzs7QUFFakUsV0FBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUUsQ0FBQztBQUN2QyxXQUFLLEtBQUssRUFBRztBQUNaLFlBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QixZQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sUUFBTyxNQUFNLEVBQUksR0FBRyxDQUFFLENBQUE7O0FBRXpDLGVBQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFFLEVBQUUsRUFBRSxJQUFJLENBQUUsQ0FBQztRQUN0Qzs7QUFFRCxjQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBRSxLQUFLLEVBQUUsTUFBTSxDQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7O0FBRWxELGNBQU8sT0FBTyxDQUFDO09BQ2YsTUFBTTtBQUNOLGNBQU8sRUFBRSxDQUFDO09BQ1Y7TUFDRDs7O1lBRU8sb0JBQUc7QUFDVixVQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBRSxpQkFBaUIsQ0FBRSxDQUFDO0FBQy9ELFVBQUssUUFBUSxFQUFHO0FBQ2YsV0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUUsZUFBZSxFQUFFLFFBQVEsV0FBUyxJQUFJLENBQUMsUUFBUSxPQUFLLENBQUM7QUFDeEUsWUFBSyxDQUFDLGdCQUFnQixDQUFFLFFBQVEsQ0FBRSxDQUFDO09BQ25DLE1BQU07QUFDTixXQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxzQ0FBc0MsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7T0FDMUU7TUFDRDs7O2lDQWpEVyxxQkFBcUI7QUFBckIseUJBQXFCLEdBRGpDLGFBQWEsQ0FBRSxpQkFBaUIsQ0FBRSxDQUN0QixxQkFBcUIsS0FBckIscUJBQXFCO0FBQXJCLHlCQUFxQixHQUZqQyxNQUFNLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBRXRCLHFCQUFxQixLQUFyQixxQkFBcUI7QUFBckIseUJBQXFCLEdBVmpDLGNBQWMsQ0FBRSxVQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBSztBQUMvRCxTQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0FBQ3RDLFNBQUssYUFBYSxLQUFLLEVBQUUsRUFBRztBQUMzQixpQkFBVyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7TUFDMUM7O0FBRUQsWUFBTyxJQUFJLENBQUM7S0FDWixDQUFDLENBR1cscUJBQXFCLEtBQXJCLHFCQUFxQjtXQUFyQixxQkFBcUIiLCJmaWxlIjoiY29tcG9uZW50cy9lbGVtZW50LWV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJpc20gZnJvbSAncHJpc20nO1xuXG5pbXBvcnQge1xuXHRUYXJnZXRJbnN0cnVjdGlvbixcblx0QmVoYXZpb3JQcm9wZXJ0eU9ic2VydmVyLFxuXHRMb2dNYW5hZ2VyLFxuXHRjaGlsZCxcblx0Y3VzdG9tRWxlbWVudCxcblx0cHJvY2Vzc0NvbnRlbnQsXG5cdGluamVjdCxcblx0YmluZGFibGVcbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AcHJvY2Vzc0NvbnRlbnQoIChjb21waWxlciwgcmVzb3VyY2VzLCBlbGVtZW50LCBpbnN0cnVjdGlvbikgPT4ge1xuXHRsZXQgZXhhbXBsZVNvdXJjZSA9IGVsZW1lbnQuaW5uZXJIVE1MO1xuXHRpZiAoIGV4YW1wbGVTb3VyY2UgIT09ICcnICkge1xuXHRcdGluc3RydWN0aW9uLmV4YW1wbGVTb3VyY2UgPSBleGFtcGxlU291cmNlO1xuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59KVxuQGluamVjdChFbGVtZW50LCBUYXJnZXRJbnN0cnVjdGlvbilcbkBjdXN0b21FbGVtZW50KCAnZWxlbWVudC1leGFtcGxlJyApXG5leHBvcnQgY2xhc3MgRWxlbWVudEV4YW1wbGVFbGVtZW50IHtcblxuXHRAYmluZGFibGUgbGFuZ3VhZ2UgPSAnbWFya3VwJztcblx0QGJpbmRhYmxlIGV4YW1wbGVTb3VyY2U7XG5cdEBiaW5kYWJsZSBjYXB0aW9uO1xuXG5cdC8vIFRPRE86IFRoaXMgZG9lc24ndCB3b3JrLCBhcyBJIGNhbid0IGZpZ3VyZSBvdXQgaG93IHRvIHBhc3MgdGhlIGNvbnRlbnRzXG5cdC8vIG9mIGEgY29udGVudCBzZWxlY3RvciBpbiBhcyB0aGUgY29udGVudCBvZiBhIGNvbXBvc2VkIHZpZXcuIEUuZy4sIHRoaXNcblx0Ly8gZG9lc24ndCB3b3JrOlxuXHQvL1xuXHQvLyAgICA8Y29tcG9zZSB2aWV3PVwiLi9leGFtcGxlLWxheW91dHMvJHtsYXlvdXR9Lmh0bWxcIj48Y29udGVudD48L2NvbnRlbnQ+PC9jb21wb3NlPlxuXHQvL1xuXHRAYmluZGFibGUgbGF5b3V0ID0gJ3NpZGUtYnktc2lkZSc7XG5cblxuXHRjb25zdHJ1Y3RvciggZWxlbWVudCwgdGFyZ2V0SW5zdHJ1Y3Rpb24gKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0XHR0aGlzLmxvZ2dlciA9IExvZ01hbmFnZXIuZ2V0TG9nZ2VyKCAnZWxlbWVudC1leGFtcGxlJyApO1xuXHRcdHRoaXMuZXhhbXBsZVNvdXJjZSA9IHRoaXMuZXh0cmFjdFJhd0NvbnRlbnQoIHRhcmdldEluc3RydWN0aW9uICk7XG5cdH1cblxuXHRleHRyYWN0UmF3Q29udGVudCggdGFyZ2V0SW5zdHJ1Y3Rpb24gKSB7XG5cdFx0aWYgKCB0YXJnZXRJbnN0cnVjdGlvbi5lbGVtZW50SW5zdHJ1Y3Rpb24uZXhhbXBsZVNvdXJjZSApIHtcblx0XHRcdGxldCBjb250ZW50ID0gdGFyZ2V0SW5zdHJ1Y3Rpb24uZWxlbWVudEluc3RydWN0aW9uLmV4YW1wbGVTb3VyY2U7XG5cblx0XHRcdGxldCBtYXRjaCA9IC9eXFxuKFxccyspLy5leGVjKCBjb250ZW50ICk7XG5cdFx0XHRpZiAoIG1hdGNoICkge1xuXHRcdFx0XHRsZXQgaW5kZW50ID0gbWF0Y2hbMV07XG5cdFx0XHRcdGxldCByZSA9IG5ldyBSZWdFeHAoIGBcXG4ke2luZGVudH1gLCAnZycgKVxuXHRcdFx0XHQvLyB0aGlzLmxvZ2dlci5kZWJ1ZyggYEluZGVudCBpczogJHtpbmRlbnR9YCApO1xuXHRcdFx0XHRjb250ZW50ID0gY29udGVudC5yZXBsYWNlKCByZSwgXCJcXG5cIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRjb250ZW50ID0gY29udGVudC5yZXBsYWNlKCAvXFx0L2csICcgICAgJyApLnRyaW0oKTtcblx0XHRcdC8vIHRoaXMubG9nZ2VyLmRlYnVnKCBcIlNldCByYXcgY29udGVudCB0bzogXCIsIGNvbnRlbnQgKTtcblx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gXCJcIjtcblx0XHR9XG5cdH1cblxuXHRhdHRhY2hlZCgpIHtcblx0XHRsZXQgc291cmNlRWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvciggJy5leGFtcGxlLXNvdXJjZScgKTtcblx0XHRpZiAoIHNvdXJjZUVsICkge1xuXHRcdFx0dGhpcy5sb2dnZXIuZGVidWcoIFwiSGlnaGxpZ2h0aW5nIFwiLCBzb3VyY2VFbCwgYCBhcyAke3RoaXMubGFuZ3VhZ2V9LmAgKTtcblx0XHRcdFByaXNtLmhpZ2hsaWdodEVsZW1lbnQoIHNvdXJjZUVsICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubG9nZ2VyLmVycm9yKCBcIkNvdWxkbid0IGZpbmQgdGhlIHNvdXJjZSBlbGVtZW50IGZvclwiLCB0aGlzLmVsZW1lbnQgKTtcblx0XHR9XG5cdH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
