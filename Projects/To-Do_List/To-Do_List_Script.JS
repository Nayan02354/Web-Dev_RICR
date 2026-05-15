function addNewTask() {
  const taskToAdd = document.getElementById("newTask").value;

  const LI = document.createElement("li");
  LI.classList.add("my-3");

  const DIV = document.createElement("div");
  DIV.classList.add("d-flex", "align-items-center");

  const SPAN1 = document.createElement("span");
  SPAN1.innerText = taskToAdd;

  const BUTTON = document.createElement("button");
  BUTTON.classList.add(
    "btn",
    "btn-danger",
    "ms-4",
    "d-flex",
    "gap-3",
    "align-items-center",
    "justify-content-center",
  );

  BUTTON.onclick = () => LI.remove();

  const I = document.createElement("i");
  I.classList.add("bi", "bi-trash");

  const SPAN2 = document.createElement("span");
  SPAN2.innerText = "Delete";

  BUTTON.appendChild(I);

  BUTTON.appendChild(SPAN2);

  DIV.appendChild(SPAN1);

  DIV.appendChild(BUTTON);

  LI.appendChild(DIV);

  document.getElementById("taskDiv").classList.remove("d-none");

  document.getElementById("taskList").appendChild(LI);

  saveToLocalStorage(taskToAdd);

  document.getElementById("newTask").value = "";
}

// JS Storage Script Code
function saveToLocalStorage(taskToAdd) {
  // const oldTask = localStorage.getItem(toDoTask);
  // const oldTaskArray = JSON.parse(oldTask) || [];
  // oldTaskArray.push(taskToAdd);

  // Easy way to write above code
  const TaskArray = JSON.parse(localStorage.getItem("toDoTask")) || [];

  TaskArray.push(taskToAdd);

  console.log(TaskArray);

  const newTaskArray = JSON.stringify(TaskArray);

  localStorage.setItem("toDoTask", newTaskArray);
}

function getTaskFromLocalStorge() {
  const TaskArray = JSON.parse(localStorage.getItem("toDoTask")) || [];

  console.log(TaskArray);

  TaskArray.forEach((elemet) => {
    const LI = document.createElement("li");
    LI.classList.add("my-3");

    const DIV = document.createElement("div");
    DIV.classList.add("d-flex", "align-items-center");

    const SPAN1 = document.createElement("span");
    SPAN1.innerText = taskToAdd;

    const BUTTON = document.createElement("button");
    BUTTON.classList.add(
      "btn",
      "btn-danger",
      "ms-4",
      "d-flex",
      "gap-3",
      "align-items-center",
      "justify-content-center",
    );

    BUTTON.onclick = () => LI.remove();

    const I = document.createElement("i");
    I.classList.add("bi", "bi-trash");

    const SPAN2 = document.createElement("span");
    SPAN2.innerText = "Delete";

    BUTTON.appendChild(I);

    BUTTON.appendChild(SPAN2);

    DIV.appendChild(SPAN1);

    DIV.appendChild(BUTTON);

    LI.appendChild(DIV);

    document.getElementById("taskDiv").classList.remove("d-none");

    document.getElementById("taskList").appendChild(LI);
  });
}

getTaskFromLocalStorge();
