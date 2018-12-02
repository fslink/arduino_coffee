'use strict';

angular.
	module('ledLowHigh').
		component('ledLowHigh', {
			templateUrl:'led-low-high/led.template.html',
			controller: ['Led', function LedLowHighController(Led){
				var self = this;
				this.response = "no request";
				this.status = "off";
				this.alert = "alert-primary";
				this.setLed = function(on_off) {
					if(on_off == "on"){
						self.response = "Processing...";
						self.status = "on";
						Led.query({led: 'on'}, function(data){
							self.response = data;
							self.alert = "alert-success";
						}, function(err){
							self.response = err;
							self.alert = "alert-danger";
						});
					} else {
						self.response = "Processing...";
						self.status = "off";
						Led.query({led : "off"}, function(data){
							self.response = data;
							self.alert = "alert-success";
						}, function(err){
							self.response = err;
							self.alert = "alert-danger";
						});
					}
				};
			}]
		});