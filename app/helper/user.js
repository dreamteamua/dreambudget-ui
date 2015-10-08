app.service('User',
    ['$http', '$rootScope', '$q', 'config',
        function ($http, $rootScope, $q, config) {
            "use strict";

            this.isAuth = function () {
                //return $http.get('/isAuth');
                var deferred = $q.defer();
                deferred.reject({data: "Need login"});
                return deferred.promise;
                //return {data: 'Login seccuss'};
            };


            this.signUp = function (data) {
                return $http.post(config.apiUrl + '/user', data);
            };

            this.signIn = function (data) {
                return $http.post(config.apiUrl + '/user/login', data);
            };

        }
    ]
);