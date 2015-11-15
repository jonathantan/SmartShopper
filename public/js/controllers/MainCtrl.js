angular.module('MainCtrl', []).controller('MainController', ['$scope', '$window', function($scope, $window) {

	$scope.tagline = 'Nothing beats a pocket protector!';

	$scope.myItems = ["table", "chair", "table lamp", "floor mat"];

	$scope.combos = $window.globalVar;

	// Window.mycallback = function(data){
	// 		console.log(data);
	// 		$rootScope.combos = data;
	// 		alert('hi');
	// };
	// $('#submit').click(function(){
	// 	submitService.submitForm();
	// });


}]);
// .factory('submitService', function() {
//     return {
//         submitForm : function() {  
// 		 	var table = document.getElementById("listItems");
// 		 	var budget = document.getElementById("budget").value;
// 			listOfItems = [];
// 			listOfQty = [];
// 			for (var i = 0; i < table.rows.length; i++) {
// 				listOfItems.push(table.rows[i].cells[0].innerHTML);
// 				listOfQty.push(table.rows[i].cells[1].innerHTML);
// 			}
// 			var callback = function (data) {
// 				return data;
// 			}
// 			$.get("http://45.79.136.81:3000/api/combination?categories=" + listOfItems.join() + "&quantity=" + listOfQty.join() + "&price=" + budget, function(data, status){
// 				console.log(data);
// 				//	debugger;
				
// 				// Window.mycallback(data);
// 				globalVar = data;
// 				return data;
// 			});
// 		}
//     };
// });