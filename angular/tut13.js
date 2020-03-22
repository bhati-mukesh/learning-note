
 var myApp = angular.module("myModule",[]).filter("customFilter",function(){
     return function(gender){
         switch(gender){
             case 1: return "Male";
             case 2: return "Female";
             case 3: return "Not Disclose";
         }
     }
 });
 var myController = function($scope){
    var employees=[{name:"Rohini",gender:2,salary:25000},
                   {name:"Anuja",gender:2,salary:25000},
                   {name:"Shubhm",gender:1,salary:25000},
                   {name:"Mukesh",gender:1,salary:25000},
                   {name:"xyz",gender:3,salary:15000}
            ];
      $scope.employees=employees;

    $scope.searchNC = function(item){
        if ($scope.searchText == undefined ){
            return true;
        }
        else{
            if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ){
                return true;
            }
        }
        return false;
    };

}
myApp.controller('myController',myController);

