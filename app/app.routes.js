appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

function appConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
        .otherwise('/');

    $stateProvider
        .state('dashboard', {
            url: "/",
            templateUrl: "app/components/login/login.html",
            controller: "loginController",
            data: {
                requireLogin: true
            }
        })
        .state('login', {
            url: "/login",
            templateUrl: "app/components/login/login.html",
            controller: "loginController",
            data: {
                requireLogin: false
            }
        })
        .state('registration', {
            url: "/registration",
            templateUrl: "app/components/registration/registration.html",
            controller: "registrationController as regCtrl",
            data: {
                requireLogin: false
            }
        });
}