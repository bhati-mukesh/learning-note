var app = angular.module("myApp",["ngRoute"])
                    .config(function($routeProvider){
                        $routeProvider.when("/home",{
                            templateUrl:"templates/home.html",
                            controller:"homeController"
                        })
                    .when("/courses",{
                        templateUrl:"templates/courses.html",
                        controller : "coursesController"
                    })
                    .when("/students",{
                        templateUrl : "templates/student.html",
                        controller:"stduentsController"
                    })
                    }).controller("homeController",function($scope){
                        $scope.message = "Home Page"
                    }).controller("coursesController",function($scope){
                        $scope.courses = ["C#","Java","Python","Go","AI"]
                    }).controller("stduentsController",function($scope,$http){
                          $http.get("http://127.0.0.1:5001/getData").then(function(response){
                                $scope.students = response.data.data;
                          }) 
                    })
                    ;