let notes = [];

/*
 * displays the 'add' screen if this has been bookmarked by user
 */
if (window.location.hash == '#add' || notes.length === 0) {
	document.getElementById('editPage').style.display = 'none';
} else {
	document.getElementById('addPage').style.display = 'none';
}

document.querySelector('#addPage button').onclick = function() {
	console.log('add note');
	let title = document.querySelector('#addPage input').value;
	let note = document.querySelector('#addPage textarea').value;
	let newNote = {title: title, note: note};
	notes.push(newNote);
	document.querySelector('#addPage input').value = "";
	document.querySelector('#addPage textarea').value = "";
	loadList();
};

/*
 * handles navigation between the add and edit 'screens'
 */ 
document.querySelector('nav > ul > li:nth-child(1)').onclick = function() {
	console.log('first link clicked');
	document.getElementById('editPage').style.display = 'none';
	document.getElementById('addPage').style.display = 'inherit';
};

document.querySelector('nav > ul > li:nth-child(2)').onclick = function() {
	console.log('second link clicked');
	document.getElementById('addPage').style.display = 'none';
	document.getElementById('editPage').style.display = 'inherit';
};


function updateNote() {
	console.log('update note');
	let title = document.querySelector('#editPage input').value;
	let note = document.querySelector('#editPage textarea').value;
	let id = parseInt(document.querySelector('#editPage p').innerHTML, 10);
	console.log(id);
	let updated = {title: title, note: note};
	console.log(updated);
	notes[id] = {title: title, note: note};
}

function display(element) {
	console.log('display');
	console.log(element.parentNode.parentNode.id);
	let details = document.getElementById('details');
	let id = element.parentNode.parentNode.id;
	document.querySelector('#editPage input').value = notes[id].title;
	document.querySelector('#editPage textarea').value = notes[id].note;
	document.querySelector('#editPage p').innerHTML = id;
}

function rem(element) {
	console.log('remove');
	let id = element.parentNode.parentNode.id;
	console.log(id);
	notes.splice(id, 1);
	loadList();
	let editId = parseInt(document.querySelector('#editPage p').innerHTML, 10);
	console.log('id: '+id);
	console.log('editId: '+editId);
	if (id == editId) {
		console.log('deleted document being edited!');
		document.querySelector('#editPage input').value = '';
		document.querySelector('#editPage textarea').value = '';
	}
}

function loadList() {
	let table = document.getElementById('list');
	table.innerHTML = '';
	for (let i=0; i<notes.length; i++) {
		let row = document.createElement('tr');
		row.id = i;
		row.innerHTML = '<td><a onclick="display(this)" href="#">'+notes[i].title+'</a></td><td><a onclick="rem(this)" class="delete" href="#">delete</a></td>';
		table.appendChild(row);
	}
}
document.querySelector('#editPage input[type="text"]').onkeyup = function() {
	updateNote();
	loadList();
};