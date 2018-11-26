'use strict';

angular.
	module('android_coffee').
		config(['$routeProvider',
			function config($routeProvider){
				$routeProvider.
					when('/led-low-high', {
						template: '<led-low-high></led-low-high>'
					}).
					otherwise('/led-low-high');
			}
		]);