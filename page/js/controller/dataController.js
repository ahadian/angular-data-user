//CONTROLLER UTK MENGELUARKAN SEMUA DATA
angularapp.controller('allDataController', function ($scope, $rootScope,$route, $routeParams, toastr, dataFactory, $location, tokenService,$localStorage) {            
//    alert(JSON.stringify($rootScope.$storage));
    tokenService.authToken($localStorage.data);
    dataFactory.getUsers().success(function (hasil) {
        $scope.data = hasil;
    });

    $scope.refresh = function () {
        dataFactory.getUsers().success(function (hasil) {
            $scope.data = hasil;
        });
    };
    
    $scope.deleteUserController = function (user) {
        if (confirm("Delete this User ?")) {
            var id = user.id;
            dataFactory.deleteUser(id).then(function (data) {
                toastr.success("Success Delete Data");
                $scope.data = $scope.refresh();
            });
        }
    };
});

//CONTROLLER UTK MENAMBAH DATA
angularapp.controller('addDataController', function ($scope, toastr, dataFactory,$localStorage,tokenService) {       
    $scope.addData = function () {
        tokenService.authToken($localStorage.data);
        input = {
            nama: $scope.newdata.nama,
            kota: $scope.newdata.kota
        };      
        dataFactory.addUsers(input).success(function (hasil) {
            toastr.success('Success Add Data');
            $scope.newdata.nama = '';
            $scope.newdata.kota = '';
        })
    }
});

//CONTROLLER UTK  MENGELUARKAN SEMUA DETAIL DATA BERDASARKAN ID
angularapp.controller('detailDataController', function ($scope, $routeParams, toastr, dataFactory) {
    dataFactory.getUserDetail($routeParams.id).success(function (data) {
        if (data == 'fail') {
            toastr.warning("No Data");
        } else {
            $scope.userdetail = data;
        }
    });

    //CONTROLLER UTK  UPDATE DATA BERDASARKAN POST DAN ID
    $scope.updateUserController = function () {
        //DAPATKAN DATA DARI NG-MODEL DI FORM SUBMIT VIEW
        datareceive = {
            id: $scope.userdetail.id,
            nama: $scope.userdetail.nama,
            kota: $scope.userdetail.kota
        };
        //PASSING DATA YANG SUDAH DIBENTUK KE API UTK DIOLAH
        dataFactory.updateUser(datareceive).success(function (data) {
            toastr.success(data);
        });
    };
});




