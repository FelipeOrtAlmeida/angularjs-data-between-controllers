var app = angular.module('myApp', []);
app.controller('ParentController', ['$scope', function ($scope) {
    $scope.$watch('name', function (newValue) {
        $scope.$broadcast('nameChanged', newValue);
    });
}]);
/* name will go downwards */
app.controller('ChildController', ['$scope', function ($scope) {
    $scope.$on('nameChanged', function (event, value) {
        $scope.name = value;
    });
}]);