let addButton = document.querySelector('.add');
let listItems = document.querySelector('#items');

addButton.addEventListener('click', addTask);
listItems.addEventListener('click', removeTask);

function addTask(e){
    //Adding a task to the input field then have it appear on the screen
    let newTask = document.querySelector('.input').value; //Get input value in the input field
    let list = document.createElement('li');
    list.className = 'listItem';
  
    list.appendChild(document.createTextNode(newTask)); //The new added element is added to the screen
    listItems.appendChild(list);

    //Creating the delete button and adds when "ADD" button is clicked
    let deleteBtn = document.createElement('button');
    // console.log(deleteBtn);
    deleteBtn.className = 'btnDel delete';
    // console.log(deleteBtn)
    deleteBtn.appendChild(document.createTextNode('Delete')); //Adding button content
    list.appendChild(deleteBtn) //Append button to list 

}

function removeTask(e){
    if(e.target.classList.contains('btnDel')){
        let deleteTask = e.target.parentElement; //Targeting parentElement where 'btnDel' is at
        console.log(deleteTask)
        deleteTask.remove();
    }
}