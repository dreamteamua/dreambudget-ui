app.service('User',
    ['$http', '$rootScope', '$q', 'config',
        function ($http, $rootScope, $q, config) {
            "use strict";

            this.isAuth = function () {
                //return $http.get('/isAuth');
                var deferred = $q.defer();
                deferred.resolve({data: 'Login seccuss'});
                return deferred.promise;
                //return {data: 'Login seccuss'};
            };


            this.signUp = function (data) {
                return $http.post(config.apiUrl + '/user', data);
            };

        }
    ]
);