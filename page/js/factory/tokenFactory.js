angularapp.factory('tokenFactory', function ($http) {
    var factory = {};
    var api = 'http://localhost/angular-data-user/api/service.php?action=';

    factory.checkToken = function (datas) {
//        alert(JSON.stringify(datas));
        return $http.post(api + 'authtoken' , datas);
    };
    
    factory.deleteToken = function(datas){
      return $http.post(api+'deletetoken',datas);  
    };
    return factory;
});