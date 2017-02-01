angularapp.directive("menuDirective", function () {
    return {
        restrict: 'E',
        templateUrl: 'top-menu.html',
        controller: 'menuController'
    };
})


angularapp.controller('menuController', function ($scope, $rootScope, $route, $localStorage) {           
    if (JSON.stringify($localStorage.data) != false) {        
        menu = {
            "menu": [
                {"name": "Semua", "href": "#/data"},
                {"name": "Tambah", "href": "#/add"},
                {"name": "Logout", "href": "#/logout"}
            ]
        }
        $rootScope.menu = menu;
//    alert(JSON.stringify($rootScope.menu));
    } 
});



