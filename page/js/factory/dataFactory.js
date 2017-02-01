angularapp.factory('dataFactory', function ($http) {
    var factory = {};
    var api = 'http://localhost/angular-data-user/api/service.php?action=';
    
    factory.getUsers = function () {
        return $http.get( api +'all');
    };
    factory.getUserDetail = function (id) {                 
        data = $http.get(api + "detail&&id=" + id);        
        return data;
    };

    factory.addUsers = function (datas) {
        return $http.post( api +"add", datas)
    }

    factory.deleteUser = function (id) {
        return $http.delete(api + "delete&&id=" + id)
    }
    factory.updateUser = function (datas) {        
        return $http.put(api + "update", datas)
    }
    return factory;
});