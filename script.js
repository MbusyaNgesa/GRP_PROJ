let addButton = document.querySelector(".add");
let listItems = document.querySelector("#items");
let checkTasks = document.querySelectorAll(".checkBox");

checkTasks.forEach((checkTask) => {
  checkTask.addEventListener("click", checkBox);
});

addButton.addEventListener("click", addTask);
listItems.addEventListener("click", removeTask);

function addTask(e) {
  //Adding a task to the input field then have it appear on the screen
  let newTask = document.querySelector(".input").value; //Get input value in the input field
  let list = document.createElement("li");
  list.className = "listItem flex items-center";

  //Add Checkbox
  let checkBtn = document.createElement("input");
  // console.log(checkBtn);
  checkBtn.type = "checkbox";
  checkBtn.className = "mr-2";
  // console.log(checkBtn);
  //   checkBtn.appendChild(document.createTextNode(checkBtn));
  checkBtn.addEventListener("click", checkBox);
  list.appendChild(checkBtn);

  let taskText = document.createElement("span");
  taskText.appendChild(document.createTextNode(newTask));
  list.appendChild(taskText); //The new added element is added to the screen

  //Creating the delete button and adds when "ADD" button is clicked
  let deleteBtn = document.createElement("button");
  // console.log(deleteBtn);
  deleteBtn.className = "btnDel delete flex items-center";
  // console.log(deleteBtn)
  let trash = document.createElement("img");

  trash.src = "./public/img/trash.svg";
  trash.alt = "Delete Icon";
  trash.width = 40;

  deleteBtn.appendChild(trash); //Adding button content
  list.appendChild(deleteBtn); //Append button to list

  listItems.appendChild(list);
}

function removeTask(e) {
  console.log("here");
  if (e.target.parentElement.classList.contains("btnDel")) {
    let deleteTask = e.target.parentElement.parentElement.parentElement; //Targeting parentElement where 'btnDel' is at
    console.log(deleteTask);
    deleteTask.remove();
  }
}

function checkBox(e) {
  //   let task = document.querySelector(".listItem");

  let taskText = e.target.nextElementSibling;

  if (e.target.checked) {
    taskText.style.textDecoration = "line-through";
  } else {
    taskText.style.textDecoration = "none";
  }
}
