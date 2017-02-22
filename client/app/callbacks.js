angular.module('evidonPromises.callbacks', [])
	.controller('CallbacksController', function ($scope, $location) {
		$scope.getSalary = function (name) {
			return 5000;
		};
	});
