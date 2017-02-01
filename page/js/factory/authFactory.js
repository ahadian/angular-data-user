angularapp.factory('authFactory', function ($http) {
    var factory = {};
    var api = 'http://localhost/angular-data-user/api/service.php?action=login';

    factory.getUserData = function (datas) {
        return $http.post(api,datas);
    };       
    return factory;
});