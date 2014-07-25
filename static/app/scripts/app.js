'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
    .module('IoTWorkshopWebApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/slides', {
                templateUrl: 'views/slides.html',
                controller: 'SlideCtrl'
            })
            .when('/tasks', {
                templateUrl: 'views/tasks.html',
                controller: 'TaskCtrl'
            })
            .when('/rating', {
                templateUrl: 'views/rating.html',
                controller: 'RatingCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/hints', {
                templateUrl: 'views/hints.html',
                controller: 'HintCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });


    })
    .config(function ($httpProvider) {
        //setting http provider defaults
        $httpProvider.defaults.headers.common['Content-Type'] = "application/json; charset=utf-8"
    });

