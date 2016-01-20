app.config(function($stateProvider) {
    $stateProvider.state('chat', {
        url: '/chat',
        templateUrl: '/js/chat/chat.html',
        controller: 'ChatCtrl'
    })
})

app.controller('ChatCtrl', function($scope, $firebaseArray) {

    var ref = new Firebase("https://YOUR_URL_HERE.firebaseio.com/messages");

    $scope.message = {};
    $scope.messages = $firebaseArray(ref);

    $scope.addMessage = function() {

        $scope.messages.$add({
            text: $scope.message.text,
            name: $scope.message.name
        })


        $scope.message.text = "";
    };

});
