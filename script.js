var form = document.getElementById('form');
var itemList = document.getElementById('items');

form.addEventListener('add', addItem);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className = 'listItem';
    li.appendChild(document.createTextNode(newItem));

    itemList.appendChild(li);
}