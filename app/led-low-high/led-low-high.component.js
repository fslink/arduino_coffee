'use strict';

angular.
	module('ledLowHigh').
		component('ledLowHigh', {
			templateUrl:'led-low-high/led.template.html',
			controller: ['Led', function LedLowHighController(Led){
				var self = this;
				this.response = "no request";
				this.status = "The coffee machine is off";
				this.status2 = "Wait";
				this.setLed = function(on_off) {
					if(on_off == "on"){
						self.status = "on";
						Led.query({led_status : "ledOn"});

					} else {
						self.status = "off";
						Led.query({led_status : "ledOff"});
					}
				};

				this.setCoffePush = function() {
					self.status2 = "on wait";
					Led.query2({led_status : "push"});
					self.status2 = "Coffee ready !!";
				}
			}]
		});