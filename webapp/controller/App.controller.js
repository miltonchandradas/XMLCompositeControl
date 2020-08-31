sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/sap/MyControls/controls/Fibonacci",
	"sap/m/MessageToast"
], function (Controller, Fibonacci, MessageToast) {
	"use strict";

	return Controller.extend("com.sap.MyControls.controller.App", {
		onInit: function () {
			this._myFibonacciControl = new Fibonacci({
				title: "Fibonacci Series - Instantiated by Controller",
				firstValue: 7,
				secondValue: 9,
				next: function (oEvent) {
					MessageToast.show(oEvent.getParameter("nextValue"));
				}
			});

			this._byId("placeholder").addItem(this._myFibonacciControl);
		},

		onHandleNext: function (oEvent) {
			MessageToast.show(oEvent.getParameter("nextValue"));
		},

		onHandleReset: function () {
			this._byId("fibControlByView").reset(5, 10);
			this._myFibonacciControl.reset(50, 100);
		}
	});
});