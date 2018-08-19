var app = angular.module('myApp', []);
app.controller('PersonController', ['$scope', function ($scope) {
    $scope.$watch('name', function (newValue) {
        $scope.$emit('nameChanged', newValue);
    });
}]);
/* name will go upwards until it reaches $rootScope */
/* $rootScope will pass it to our controller */
app.controller('GreetingController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.$on('nameChanged', function (event, value) {
        $scope.name = value;
    });
}]);