sap.ui.define([
		"sap/ui/core/XMLComposite",
		"sap/m/Button"
	],
	function (XMLComposite, Button) {

		"use strict";

		return XMLComposite.extend("com.sap.MyControls.controls.Fibonacci", {

			metadata: {
				properties: {
					title: {
						type: "string",
						defaultValue: "Fibonacci Series"
					},
					firstValue: {
						type: "int",
						defaultValue: 1
					},
					secondValue: {
						type: "int",
						defaultValue: 1
					}
				},
				events: {
					next: {
						parameters: {
							nextValue: {
								type: "int"
							}
						}
					}
				}
			},

			reset: function (a, b) {
				this.setFirstValue(a);
				this.setSecondValue(b);
			},

			_onHandlePress: function () {

				let newValue = this.getFirstValue() + this.getSecondValue();
				this.setFirstValue(this.getSecondValue());
				this.setSecondValue(newValue);

				this.fireEvent("next", {
					nextValue: newValue
				});
			}

		});
	});