app.controller('registrationController',
    ['$scope', '$rootScope', 'User', '$state',
        function ($scope, $rootScope, User, $state) {

            var self = this;
            this.user = {};

            this.signUp = signUp;

            function signUp(){
                var data;

                if( validateInputData()){
                    data = generateData();

                    User.signUp(data)
                        .then(function () {
                            $rootScope.currentUser = self.user;
                            return $state.go( 'dashboard');
                        })
                        .catch(function () {
                            return $state.go('login');
                        });
                }

            }

            function generateData(){
                return {
                    email: self.user.email,
                    login: self.user.email,
                    password: self.user.password
                }
            }

            function validateInputData(){
                var user = self.user;
                return user.email && user.password && (user.password === user.rePassword);
            }

        }
    ]);