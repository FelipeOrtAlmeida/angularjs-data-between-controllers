var app = angular.module('myApp', []);
app.controller('ParentController', ['$scope', function ($scope) {
    $scope.$on('nameChanged', function (event, value) {
        $scope.name = value;
    });
}]);
/* name will go upwards */
app.controller('ChildController', ['$scope', function ($scope) {
    $scope.$watch('name', function (newValue) {
        $scope.$emit('nameChanged', newValue);
    });
}]);