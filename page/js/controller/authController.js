angularapp.controller('loginController', function ($scope, $rootScope, $window, $route, toastr, $location, authFactory, tokenService, md5, $localStorage) {
    $scope.doLogin = function (inputdata) {
        input = {
            username: inputdata.username,
            password: md5.createHash(inputdata.password)
        };
        authFactory.getUserData(input).success(function (response) {
            if (response.status == "OK") {
                toastr.success(response.message);
                token = response.token;
                username = response.username;
                $rootScope.dataAuth = {
                    token: token,
                    username: username,
                    menudata: true
                };
                $localStorage.data = $rootScope.dataAuth;                
                $rootScope.menuData = $localStorage.data.menudata;                
                $location.path('/data');
            } else {
                toastr.warning(response.message);
                inputdata.username = '';
                inputdata.password = '';
            }
        });
    };

});

angularapp.controller('logoutController', function ($scope, $rootScope, toastr, $location, tokenFactory, $localStorage) {
    tokenFactory.deleteToken($localStorage.data)
    delete $localStorage.data;
    $location.path('/login');
    toastr.success("Logout Now");
    $rootScope.menuData = false;

});


