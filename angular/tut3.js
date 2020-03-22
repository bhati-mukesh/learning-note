
 var myApp = angular.module("myModule",[]);
 var myController = function($scope){
     var country = { 
         name: "INDIA",
         flag : 'INDIA-flag.png'
     }
     $scope.country = country;
}
myApp.controller('myController',myController);

