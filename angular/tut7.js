
 var myApp = angular.module("myModule",[]);
 var myController = function($scope){
     var technologies = [
         {  name: "C", likes : 0 , dislikes : 0 } ,
         {  name: "Python", likes : 0 , dislikes : 0 } ,
         {  name: "Go", likes : 0 , dislikes : 0 } ,
         {  name: "ServiceNow", likes : 0 , dislikes : 0 } 
    ];
     $scope.technologies = technologies;

     $scope.incrementLikes = function(technology){
         technology.likes++;
     }

     $scope.incrementDislikes = function(technology){
        technology.dislikes++;
    }
}
myApp.controller('myController',myController);

