
 var myApp = angular.module("myModule",[]);
 var myController = function($scope){
     var employees = [
         {  name: "ABC", id : 1 , } ,
         {  name: "DEF", id : 2 } ,
         {  name: "GHI", id : 3 } ,
         {  name: "JKL", id : 4 } 
    ];
     $scope.employees = employees;
}
myApp.controller('myController',myController);

