angularapp.service('tokenService', function ($location, tokenFactory) {

    this.authToken = function (getDataAuth) {

        if (getDataAuth == null) {
            $location.path('/login');
        } else {
            data = getDataAuth;
            checkToken = tokenFactory.checkToken(data).then(function (response) {
                var message = JSON.stringify(response.data);
                if (message == "OK") {
                    message = "OK";
                } else {
                    message = "FAILED";
                }
                return message;
            })

            if (JSON.stringify(checkToken) == "FAILED") {
                $location.path('/logout');
            }
        }
    }
});
