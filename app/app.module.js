var app = angular
            .module('app', ['ui.router'])
            .config(appConfig)
            .run(appRun)
            .config(['$sceDelegateProvider', function($sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://localhost:8742/**']);
            }]);


appRun.$inject = ['$rootScope', '$state', 'User'];

function appRun($rootScope, $state, User) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
        var requireLogin = toState.data.requireLogin;

        if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
            event.preventDefault();

            User.isAuth()
                .then(function (data) {
                    $rootScope.currentUser = data.data;
                    return $state.go(toState.name, toParams);
                })
                .catch(function () {
                    return $state.go('login');
                });
        }
    });
}


