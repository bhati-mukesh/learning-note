
 var myApp = angular.module("myModule",[]);
 var myController = function($scope,$http,$log){

    function successCallBack(response){
        $scope.employees = response.data.data;
        $log.info(response);

    }
    function errorCallBack(response){
        $log.info(response);
    }

    $http.get('http://127.0.0.1:5001/getData').then(successCallBack,errorCallBack);
      

}
myApp.controller('myController',myController);

