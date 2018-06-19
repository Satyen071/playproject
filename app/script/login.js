angular.module('myApp').controller('ctrl',function($scope, $location){
	$scope.uname='';
	$scope.pwd='';
	$scope.fun=function(){
		
		 $location.path('/home');
		
	};
	
});