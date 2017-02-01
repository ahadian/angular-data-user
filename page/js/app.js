//'ngStorage'
var angularapp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toastr', 'angular-md5', 'ngTable', 'ngStorage']);
//page route
angularapp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'welcome.html'
                })
                .when('/login', {
                    templateUrl: 'login.html',
                    controller: 'loginController'
                })
                .when('/logout', {
                    templateUrl: '/',
                    controller: 'logoutController'
                })
                .when('/add', {
                    templateUrl: 'add.html',
                    controller: 'addDataController'
                })
                .when('/data', {
                    templateUrl: 'data.html',
                    controller: 'allDataController'
                })
                .when('/data/user/:action/:id', {
                    templateUrl: 'detail.html',
                    controller: 'detailDataController'
                })
                .otherwise({
                    redirectTo: '/'
                });
    }
]);




