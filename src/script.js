function addItem() {
	const id = `list-item-${totalItemsAdded++}`;

	const inputValue = input.value;
	input.value = '';

	const newItem = document.createElement("li");
	const text = document.createElement("span");
	const deleteButton = document.createElement("button");

	newItem.setAttribute('id', id);

	text.textContent = inputValue;
	deleteButton.textContent = 'Delete';

	deleteButton.addEventListener('click', () => deleteItem(id));


	newItem.appendChild(text);
	newItem.appendChild(deleteButton);

	list.appendChild(newItem);

	input.focus();

}

function deleteItem(id) {
	const listItem = document.getElementById(id);
	list.removeChild(listItem);
}


const input = document.getElementById("item-i");
const buttonAddItem = document.getElementById("btn-add-item");
const list = document.getElementById("list");
let totalItemsAdded = 0;

buttonAddItem.addEventListener('click', addItem);

