'use strict';

var app = angular.module('App', []);

app.controller('HomeController', ['$scope','$http', function($scope,$http){

	$scope.sendEmail = function(){
		console.log($scope.user);
		$http.post("/api/reportRealEstateSignup", $scope.data).
		success(function(data, status, headers, config) {
			// $window.location = '/realestate2.html';
		});	};

	}]);


