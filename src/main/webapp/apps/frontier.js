/* frontier - v0.0.1-16
 2016-09-19 
 */
'use strict';
/* Source : ./WebContent/client/build/temporary/scripts/dashboard/controllers/index.js*/
(function (window, angular, undefined) { 
	
	angular.module('frontier.dashboard.controllers', []);
	
})(window, window.angular);
/* Source : ./WebContent/client/build/temporary/scripts/dashboard/directives/index.js*/
(function (window, angular, undefined) { 
	
	angular.module('frontier.dashboard.directives', []);
	
})(window, window.angular);
/* Source : ./WebContent/client/build/temporary/scripts/dashboard/index.js*/
(function (window, angular, undefined) { 
	
	angular.module('frontier.dashboard', [
        'frontier.dashboard.controllers', 
	    'frontier.dashboard.services', 
	    'frontier.dashboard.directives'
	])
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvide
		.state('dashboard', {
			abstract: true,
			url: '/dashboard',
			templateUrl: '/client/views/system/layout/content.tpl.html',
			data: {
				pageTitle: 'Dashboard'
			}
		});
	}])
	;
	
})(window, window.angular);
/* Source : ./WebContent/client/build/temporary/scripts/dashboard/services/index.js*/
(function (window, angular, undefined) { 
	
	angular.module('frontier.dashboard.services', []);
	
})(window, window.angular);
/* Source : ./WebContent/client/build/temporary/scripts/frontier_app.js*/
(function (window, angular, undefined) { 
	
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
/* Source : ./WebContent/client/build/temporary/views/template.js*/
(function(window, angular, undefined) {
angular.module('frontier.templates', ['/client/views/dashboard/dashboard_list.tpl.html', '/client/views/system/layout/content.tpl.html', '/client/views/system/template/guide/css_coding.tpl.html']);

angular.module("/client/views/dashboard/dashboard_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/client/views/dashboard/dashboard_list.tpl.html",
    "<div>dashboard list view</div>");
}]);

angular.module("/client/views/system/layout/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/client/views/system/layout/content.tpl.html",
    "<aside id=menu></aside><div class=wrapper><div class=content><div ui-view></div></div></div>");
}]);

angular.module("/client/views/system/template/guide/css_coding.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/client/views/system/template/guide/css_coding.tpl.html",
    "<div>css coding guide</div>");
}]);
})(window, window.angular);
