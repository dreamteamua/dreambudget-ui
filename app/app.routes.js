appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

function appConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
        .otherwise('/');

    $stateProvider
        .state('dashboard', {
            url: "/",
            template: "<h1>Hello DreamTeamUA!</h1>",
            controller: "dashboardController",
            data: {
                requireLogin: true
            }
        })
        .state('login', {
            url: "/login",
            templateUrl: "app/components/login/login.html",
            controller: "loginController as loginCtrl",
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