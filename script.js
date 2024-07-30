// var form = document.getElementById('form');
// var itemList = document.getElementById('items');

// form.addEventListener('add', addItem);

// function addItem(e){
//     e.preventDefault();

//     var newItem = document.getElementById('items').value;

//     var li = document.createElement('li');
//     li.className = 'listItem';
//     li.appendChild(document.createTextNode(newItem));

//     itemList.appendChild(li);
// }

let addButton = document.querySelector('.add');
let listItems = document.querySelector('#items');

addButton.addEventListener('click', addTask);

function addTask(e){
    let newTask = document.querySelector('.input').value; //Get input value in the input field
    // console.log(newTask);
    let list = document.createElement('li');
    // console.log(list);
    list.className = 'listItem';
    // console.log(list);
    list.appendChild(document.createTextNode(newTask));
    listItems.appendChild(list);
}