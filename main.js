let addToDoButton = document.getElementById('addToDo');
let checkList = document.getElementById('checkList');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
	var list = document.createElement('li');
	list.classList.add('paragraph-styling');
	list.innerText = inputField.value;
	checkList.appendChild(list);
	inputField.value = "";
	list.addEventListener('click', function(){	//clicking once to check off task
		list.style.textDecoration = "line-through";
	})
	list.addEventListener('dblclick', function(){ //double click to add to trash/archive
        checkList.removeChild(list);
    })
})