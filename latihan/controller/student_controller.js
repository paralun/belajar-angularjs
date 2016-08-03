app.controller("studentCtrl", function($scope){
	$scope.student = {
		firstname: "Bambang",
		lastname: "Gunawan",
		fees: 500,
		subjects:[
         {name:'Physics',marks:70},
         {name:'Chemistry',marks:80},
         {name:'Math',marks:65},
         {name:'English',marks:75},
         {name:'Hindi',marks:67}
      ],
      fullname: function(){
      	var obj;
      	obj = $scope.student;
      	return obj.firstname + " " + obj.lastname;
      }
	};
});