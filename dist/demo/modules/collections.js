System.register([], function (_export) {
	"use strict";

	var Collections;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [],
		execute: function () {
			Collections = function Collections() {
				_classCallCheck(this, Collections);

				this.heading = 'Collections';
				this.messageIcon = 'inbox';
				this.tableUsers = [{ id: 1, firstName: "Nefty", lastName: "Sallaberry", email: "nefty@example.com" }, { id: 2, firstName: "Carlos", lastName: "Meléndez", email: "cmelendez@example.com" }, { id: 3, firstName: "Fernando", lastName: "Sallaberry", email: "fernando.s@example.com" }, { id: 4, firstName: "Óscar", lastName: "Meléndez", email: "omend@example.com" }, { id: 5, firstName: "Ricky", lastName: "Meléndez", email: "rmelendez@example.com" }];
				this.userColumns = {
					id: "ID",
					firstName: "First Name",
					lastName: "Last Name",
					email: "Email Address"
				};
			};

			_export('Collections', Collections);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29sbGVjdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQVksQ0FBQzs7S0FFQSxXQUFXOzs7Ozs7O0FBQVgsY0FBVyxZQUFYLFdBQVc7MEJBQVgsV0FBVzs7U0FDdkIsT0FBTyxHQUFHLGFBQWE7U0FDdkIsV0FBVyxHQUFHLE9BQU87U0FFckIsVUFBVSxHQUFHLENBQ1osRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsRUFDakYsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsRUFDcEYsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsd0JBQXdCLEVBQUUsRUFDekYsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsRUFDL0UsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsQ0FDbkY7U0FFRCxXQUFXLEdBQUc7QUFDYixPQUFFLEVBQUUsSUFBSTtBQUNSLGNBQVMsRUFBRSxZQUFZO0FBQ3ZCLGFBQVEsRUFBRSxXQUFXO0FBQ3JCLFVBQUssRUFBRSxlQUFlO0tBQ3RCIiwiZmlsZSI6Im1vZHVsZXMvY29sbGVjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbnMge1xuXHRoZWFkaW5nID0gJ0NvbGxlY3Rpb25zJztcblx0bWVzc2FnZUljb24gPSAnaW5ib3gnO1xuXG5cdHRhYmxlVXNlcnMgPSBbXG5cdFx0eyBpZDogMSwgZmlyc3ROYW1lOiBcIk5lZnR5XCIsIGxhc3ROYW1lOiBcIlNhbGxhYmVycnlcIiwgZW1haWw6IFwibmVmdHlAZXhhbXBsZS5jb21cIiB9LFxuXHRcdHsgaWQ6IDIsIGZpcnN0TmFtZTogXCJDYXJsb3NcIiwgbGFzdE5hbWU6IFwiTWVsw6luZGV6XCIsIGVtYWlsOiBcImNtZWxlbmRlekBleGFtcGxlLmNvbVwiIH0sXG5cdFx0eyBpZDogMywgZmlyc3ROYW1lOiBcIkZlcm5hbmRvXCIsIGxhc3ROYW1lOiBcIlNhbGxhYmVycnlcIiwgZW1haWw6IFwiZmVybmFuZG8uc0BleGFtcGxlLmNvbVwiIH0sXG5cdFx0eyBpZDogNCwgZmlyc3ROYW1lOiBcIsOTc2NhclwiLCBsYXN0TmFtZTogXCJNZWzDqW5kZXpcIiwgZW1haWw6IFwib21lbmRAZXhhbXBsZS5jb21cIiB9LFxuXHRcdHsgaWQ6IDUsIGZpcnN0TmFtZTogXCJSaWNreVwiLCBsYXN0TmFtZTogXCJNZWzDqW5kZXpcIiwgZW1haWw6IFwicm1lbGVuZGV6QGV4YW1wbGUuY29tXCIgfVxuXHRdO1xuXG5cdHVzZXJDb2x1bW5zID0ge1xuXHRcdGlkOiBcIklEXCIsXG5cdFx0Zmlyc3ROYW1lOiBcIkZpcnN0IE5hbWVcIixcblx0XHRsYXN0TmFtZTogXCJMYXN0IE5hbWVcIixcblx0XHRlbWFpbDogXCJFbWFpbCBBZGRyZXNzXCJcblx0fTtcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
