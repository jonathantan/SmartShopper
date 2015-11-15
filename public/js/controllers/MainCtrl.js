angular.module('MainCtrl', []).controller('MainController', function($scope, $rootScope, submitService) {

	$scope.tagline = 'Nothing beats a pocket protector!';

	$scope.myItems = ["table", "chair", "table lamp", "floor mat"];

	$scope.combos = null;

	Window.mycallback = function(data){
			$rootScope.combos = data;
			alert('hi');
	};
	$('#submit').click(function(){

		submitService.submitForm();
		$rootScope.combos = submitService.submitForm();
	});

	$scope.combos = $rootScope.combos;

}).factory('submitService', function() {
    return {
        submitForm : function() {  
		 	var table = document.getElementById("listItems");
		 	var budget = document.getElementById("budget").value;
			listOfItems = [];
			listOfQty = [];
			for (var i = 0; i < table.rows.length; i++) {
				listOfItems.push(table.rows[i].cells[0].innerHTML);
				listOfQty.push(table.rows[i].cells[1].innerHTML);
			}
			//debugger;
			$.get("http://45.79.136.81:3000/api/combination?categories=" + listOfItems.join() + "&quantity=" + listOfQty.join() + "&price=" + budget, function(data, status){
				console.log(data);
			//	debugger;
				
				Window.mycallback(data);
				//return data;
			});
		}
    };
});;