<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html ng-app="frontier">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title page-title>Frontier</title>
	
	<link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
	<link rel="stylesheet" href="/bower_components/angular-material/angular-material.css" />
	<link rel="stylesheet" href="/client/styles/frontier.css" />

	<base href="/">
</head>

<body class="docs-body" layout="row" ng-cloak ng-controller="frontierCtrl">
	
	<div ui-view></div>
	
	<script src="/bower_components/jquery/dist/jquery.min.js"></script>
	<script src="/bower_components/jquery-ui/jquery-ui.min.js"></script>
	<script src="/bower_components/lodash/lodash.min.js"></script>
	<script src="/bower_components/angular/angular.min.js"></script>
	<script src="/bower_components/angular-resource/angular-resource.min.js"></script>
	<script src="/bower_components/angular-sanitize/angular-sanitize.min.js"></script>
	<script src="/bower_components/angular-animate/angular-animate.min.js"></script>
	<script src="/bower_components/angular-aria/angular-aria.min.js"></script>
	<script src="/bower_components/angular-message/angular-message.min.js"></script>
	<script src="/bower_components/angular-material/angular-material.min.js"></script>
	

	<script src="/client/scripts/frontier_app.js"></script>
	<script type="text/javascript">
		<!--
		var locale = angular.lowercase('<c:out value="${reqUserModel.langSeCode}" />')
					|| angular.lowercase(navigator.language);
		angular.module('frontier.config', [])
		.constant('USER_SESSION', {
			locale: locale,
			userId: '<c:out value="${reqUserModel.userId}" />'
		});
		-->
	</script>
	
</body>
</html>
