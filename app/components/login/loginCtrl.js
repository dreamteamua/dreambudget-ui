app.controller('loginController', ['$rootScope', '$state', 'User', function ($rootScope, $state, User) {
        var self = this;
        this.user = {};

        this.signIn = function () {
            var data = buildData();
            User.signIn(data)
                .then(function(userData){
                    $rootScope.currentUser = userData;
                    $state.go('dashboard');
                }

            );
        };

        function buildData(){
            return {
                login: self.user.email,
                password: self.user.password
            };
        }

    }]
);





