(function (window, angular, undefined) { 'use strict';
	
	/**
	 * module dependency setting
	 */

	//Angular Package Module
	angular.module('angular.provided', ['ngResource', 'ngAnimate', 'ngMessages', 'ngCookies', 'ngSanitize']);
	
	//Angular UI Module
	angular.module('angular.ui.provided', ['ui.router']);
	
	//Angular UI Grid Module
	angular.module('angular.ui.grid', []);
	
	//3rd-party package module
	angular.module('others.provided', []);
	
	//Application Business Package Module
	angular.module('frontier.sys', ['system.common']);
	angular.module('frontier.biz', ['frontier.dashboard']);
	
	/**
	 * Initialize Application
	 */
	angular.module('frontier', [
        'angular.provided',
	    'angular.ui.provided',
	    'angular.ui.grid',
	    'others.provided',
	    'frontier.sys',
	    'frontier.biz'
	])
	.controller('frontierCtrl', function (){
		//write application common configuration
		
	})
	.run(function () {
		
	})
	;
	
	
})(window, window.angular);