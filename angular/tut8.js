
 var myApp = angular.module("myModule",[]);
 var myController = function($scope){


    var employees=[{name:"Ronini",dateOfBirth:new Date("November 23,1980"),gender:"Female",salary:25000},
                   {name:"Anuja",dateOfBirth:new Date("November 23,1980"),gender:"Female",salary:25000},
                   {name:"Shubhm",dateOfBirth:new Date("November 23,1980"),gender:"Male",salary:25000},
                   {name:"Mukesh",dateOfBirth:new Date("November 23,1980"),gender:"Male",salary:25000}
            ];
      $scope.employees=employees;

      $scope.rowLimit=2;

}
myApp.controller('myController',myController);

