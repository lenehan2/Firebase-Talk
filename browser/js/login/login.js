app.config(function($stateProvider) {

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'js/login/login.html',
        controller: 'LoginCtrl'
    });

});

app.controller('LoginCtrl', function($scope, AuthService, $state, $firebaseAuth, $firebaseObject) {

    var ref = new Firebase("https://sweltering-torch-3456.firebaseio.com/users");
    var Auth = $firebaseAuth(ref);
    var test = $firebaseObject(ref)
    $scope.createUser = function() {
        $scope.message = null;
        $scope.error = null;

        Auth.$createUser({
            email: $scope.email,
            password: $scope.password
        }).then(function(userData) {
            $scope.message = "User created with uid: " + userData.uid;
        }).catch(function(error) {
            $scope.error = error;
        });
    };

    test.$bindTo($scope,'data')

    $scope.sendLogin = function(loginInfo) {

        ref.authWithPassword({
            email: loginInfo.email,
            password: loginInfo.password
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        })

    };

});
