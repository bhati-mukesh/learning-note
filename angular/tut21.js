
 var myApp = angular.module("myModule",[]);
 var myController = function($scope,$location,$anchorScroll){
     $scope.scrollTo = function (scrollLocation){
         $location.hash(scrollLocation);
         $anchorScroll.yOffset = 20;
         $anchorScroll();
     };
}
myApp.controller('myController',myController);

