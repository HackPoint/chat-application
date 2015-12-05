/// <reference path="../node_modules/angular/angular.js" />
/// <reference path="../typings/angular-ui-router/angular-ui-router.d.ts" />

"use strict";

var ngApp = angular.module("app", ["ui.router", "ngMaterial", "app.controllers", "app.directives"])
	.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});

		$stateProvider
			.state("root", {
				abstract: true,
				template: `<div ui-view></div>`,
				resolve: {
					/*	
						http://ng-learn.org/2014/08/Dependencies_inheritance_using_ui-router/
						user: function (authService) {
							return authService.getUserDetails();
						}
					*/
				}
			})
			.state("/home", {
				url: "/",
				templateUrl: "./src/app/views/home.html",
				controller: 'HomeController'
			});
});