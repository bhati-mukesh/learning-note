
 var myApp = angular.module("myModule",[]);
 var myController = function($scope){


    var employees=[{name:"Rohini",dateOfBirth:new Date("april 23,1980"),gender:"Female",salary:25000},
                   {name:"Anuja",dateOfBirth:new Date("march 28,1963"),gender:"Female",salary:25000},
                   {name:"Shubhm",dateOfBirth:new Date("November 01,1960"),gender:"Male",salary:25000},
                   {name:"Mukesh",dateOfBirth:new Date("january 15,1988"),gender:"Male",salary:25000}
            ];
      $scope.employees=employees;


      $scope.columnName="name";
      $scope.reverseSort = false;

      $scope.sortData = function(column){
        $scope.reverseSort = ($scope.columnName==column) ? !$scope.reverseSort : false;
        $scope.columnName=column;
      }

}
myApp.controller('myController',myController);

