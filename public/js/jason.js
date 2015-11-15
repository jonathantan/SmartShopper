var button='<button class="btn btn-default pull-right" aria-label="Left Align" onClick="removeRow(this)">'+ '<span class="glyphicon glyphicon-minus aria-hidden="true" "></span>' +'</button>';
var listOfItems = [];
var listOfQty = [];

function removeRow(o) {
     //no clue what to put here?
     var p=o.parentNode.parentNode;
         p.parentNode.removeChild(p);
    }

$(document).ready(function() {
    $('#addItem').click(function() {  
    	var itemName = document.getElementById("item").value;
		var qty = document.getElementById("quantity").value;

		$('#listItems').append('<tr><td class="col-lg-9">' + itemName + '</td>' + '<td class="col-lg-2">' + qty + '</td>' + '<td class="col-lg-1">' + button + '</td>' + '</tr>');
	});

	 $('#submit').click(function() {  
	 	var table = document.getElementById("listItems");
	 	var budget = document.getElementById("budget").value;
		listOfItems = [];
		listOfQty = [];
		for (var i = 0; i < table.rows.length; i++) {
			listOfItems.push(table.rows[i].cells[0].innerHTML);
			listOfQty.push(table.rows[i].cells[1].innerHTML);
		}

		alert("http://45.79.136.81:3000/api/combination?categories=" + listOfItems.join() + "&quantity=" + listOfQty.join() + "&price=" + budget);
		$.get("http://45.79.136.81:3000/api/combination?categories=" + listOfItems.join() + "&quantity=" + listOfQty.join() + "&price=" + budget, function(data, status){
			alert("hi");
			console.log(data);
		});
	});
});


