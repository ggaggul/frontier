(function (window, angular, undefined) { 'use strict';
	
	angular.module('frontier.dashboard', [
        'frontier.dashboard.controllers', 
	    'frontier.dashboard.services', 
	    'frontier.dashboard.directives'
	])
	.config(function ($stateProvider) {
		$stateProvide
		.state('dashboard', {
			abstract: true,
			url: '/dashboard',
			templateUrl: '/client/views/system/layout/content.tpl.html',
			data: {
				pageTitle: 'Dashboard'
			}
		});
	})
	;
	
})(window, window.angular);