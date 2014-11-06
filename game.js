var runSomeTests = function() {
	var descrip = document.getElementById('descrip');
	
	console.log (descrip.tagName );
	console.log (descrip.innerHTML);
	console.log(descrip.parentNode.tagName);

	var headings = document.querySelectorAll('aside > h1');

	for (i = 0; i < headings.length; i++){
		console.log( headings[i].innerHTML );
	}
	
	var stuff = ["axe", "rope", "knife"]

	var userInput = document.getElementById('action');
	
	var inventory = document.querySelector('#inventory');

	var InvTable = document.createElement('table');
	
	stuff.forEach( function(items) {
	
		var tableRow = document.createElement('tr');
	
		var textNode = document.createTextNode(items);

		tableRow.appendChild(textNode);

		InvTable.appendChild(tableRow);
	
	});	

	inventory.appendChild(InvTable);
	var stuff2 = ["fight", "run"]	
	var UserActions = document.querySelectorAll('#action');

};

window.onload = runSomeTests;
