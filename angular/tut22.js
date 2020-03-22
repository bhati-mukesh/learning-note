var myApp = angular.module("myModule",[])
                .controller("myController",function($scope,$http,$location,$anchorScroll,$log){
                    $http.get('http://127.0.0.1:5001/getCountries').then(function(response){
                        $scope.countries = response.data.data;

                    },function(error){
                        $log.info(error)
                    });

                $scope.scrollTo = function(countryName){
                    $location.hash(countryName);
                    $anchorScroll();
                }

});