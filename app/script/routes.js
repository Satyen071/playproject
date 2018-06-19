app.config(['$routeProvider','$httpProvider','$locationProvider'],function(
	$routeProvider,$httpProvider,$locationProvider){
	$routeProvider
	.when('/',{templateUrl:'/login.html'})
	
	.when('/home',
			{templateUrl:'/userList.html'})
	
});