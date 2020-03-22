
 var myApp = angular.module("myModule",[]);
 var myController = function($scope,$http,stringService){
    $scope.transformString = function(input){
        $scope.output = stringService.processingString(input)
    }

}
myApp.controller('myController',myController);

