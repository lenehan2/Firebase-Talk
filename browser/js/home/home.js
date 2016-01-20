app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function($scope,$firebaseObject) {
    
    var ref = new Firebase("https://YOUR_URL_HERE.firebaseio.com/name");
    
    var greeting = $firebaseObject(ref)
    
    greeting.$bindTo($scope,'data')

});
