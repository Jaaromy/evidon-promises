angular.module('evidonPromises.promises', [])
	.controller('PromisesController', function ($scope, $q) {
		$scope.getSalary = function (name) {
			return 5000;
		};
	});
