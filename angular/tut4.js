
 var myApp = angular.module("myModule",[]);
 var myController = function($scope){
     var employee = { 
         name: "",
         id : ''
     }
     $scope.employee = employee;
}
myApp.controller('myController',myController);

