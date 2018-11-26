'use strict';

angular.
	module('core.led', ['ngResource']).
	factory('Led', ['$resource',
		function($resource){
			return $resource('http://192.168.144.32/:led_status', {}, {
				query: {
					method: 'GET',
					params: {led_status : 'ledOff'}
				},
				query2: {
					method: 'GET',
					params: {led_status : ''}
				}
			});
		}]);
