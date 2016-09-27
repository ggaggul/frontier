<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html ng-app="frontier">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title page-title>Frontier</title>
	
	<link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
	<link rel="stylesheet" href="/apps/styles/vendor.min.css" />
	<link rel="stylesheet" href="/apps/styles/frontier.min.css" />

	<base href="/">
</head>

<body class="docs-body" layout="row" ng-cloak ng-controller="frontierCtrl">
	
	<div ui-view></div>
	
	<script src="/apps/vendor.min.js"></script>
	<script src="/apps/frontier.min.js"></script>
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
