var app = angular.module("app", []);

app.controller("ctrl", function($scope){

	$scope.tambah = function(){
		$scope.hasil = $scope.bil1 + $scope.bil2;
	}

	$scope.kurang = function(){
		$scope.hasil = $scope.bil1 - $scope.bil2;
	}

	$scope.kali = function(){
		$scope.hasil = $scope.bil1 * $scope.bil2;
	}

	$scope.bagi = function(){
		$scope.hasil = $scope.bil1 / $scope.bil2;
	}
});