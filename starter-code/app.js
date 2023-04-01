const kanbanNew = document.querySelector(".kanban-menu-add");
const kanbanMenuNew = document.querySelector(".kanban-menu-new");
const closeMenu = document.querySelector(".cross");
const countText = document.querySelector(".count");
const menu = document.querySelectorAll(".menu");
const title = document.querySelector(".title");
const hideSidebar = document.querySelector(".hide-sidebar");
const sideBar = document.querySelector(".kanban-sidebar");
const contents = document.querySelectorAll(".kanban-task");
const newKanban = document.querySelector(".kanban-tasks");
const file = "./data.json";
let count = 3;

const droppables = document.querySelectorAll(".droppables");
const draggables = document.querySelectorAll(".draggables");

document.addEventListener("dragstart", (e) => {
  if (e.target.classList.contains("draggables")) {
    e.target.classList.add("dragging");
  }
});

document.addEventListener("dragend", (e) => {
  if (e.target.classList.contains("draggables")) {
    e.target.classList.remove("dragging");
  }
});

droppables.forEach((droppable) => {
  droppable.addEventListener("dragover", (e) => {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    droppable.append(dragging);
  });
});

async function getText(file) {
  let response = await fetch(file);
  let data = await response.json();
  const dataTodo = data["boards"][0]["columns"][0]["tasks"];
  const dataDoing = data["boards"][0]["columns"][1]["tasks"];
  const dataDone = data["boards"][0]["columns"][2]["tasks"];
  const dataTodo2 = data["boards"][1]["columns"][0]["tasks"];
  const dataDoing2 = data["boards"][1]["columns"][1]["tasks"];
  const dataDone2 = data["boards"][1]["columns"][2]["tasks"];
  const dataTodo3 = data["boards"][2]["columns"][0]["tasks"];
  const dataDoing3 = data["boards"][2]["columns"][1]["tasks"];
  const dataDone3 = data["boards"][2]["columns"][2]["tasks"];

  dataTodo.forEach((item) => {
    const kanbanTodo = document.querySelector(".kanban-todo");
    const addTask = document.createElement("div");
    addTask.classList.add("todo-task");
    addTask.classList.add("draggables");
    addTask.setAttribute("draggable", "true");
    addTask.innerHTML += `<p class="todo-header">${item?.title}</p>
                <p class="todo-sub">0 of ${item?.subtasks.length} subtasks</p>`;
    kanbanTodo.appendChild(addTask);
  });

  dataDoing.forEach((item) => {
    const kanbanDoing = document.querySelector(".kanban-doing");
    const addTask = document.createElement("div");
    addTask.classList.add("todo-task");
    addTask.classList.add("draggables");
    addTask.setAttribute("draggable", "true");
    addTask.innerHTML += `<p class="todo-header">${item?.title}</p>
                <p class="todo-sub">0 of ${item?.subtasks.length} subtasks</p>`;
    kanbanDoing.appendChild(addTask);
  });
  dataDone.forEach((item) => {
    const kanbanDone = document.querySelector(".kanban-done");
    const addTask = document.createElement("div");
    addTask.classList.add("todo-task");
    addTask.classList.add("draggables");
    addTask.setAttribute("draggable", "true");
    addTask.innerHTML += `<p class="todo-header">${item?.title}</p>
                <p class="todo-sub">0 of ${item?.subtasks.length} subtasks</p>`;
    kanbanDone.appendChild(addTask);
  });
  dataTodo2.forEach((item) => {
    const kanbanTodo2 = document.querySelector(".kanban-todo-2");
    const addTask2 = document.createElement("div");
    addTask2.classList.add("todo-task");
    addTask2.classList.add("draggables");
    addTask2.setAttribute("draggable", "true");
    addTask2.innerHTML += `<p class="todo-header">${item?.title}</p>
                <p class="todo-sub">0 of ${item?.subtasks.length} subtasks</p>`;
    kanbanTodo2.appendChild(addTask2);
  });
  dataDoing2.forEach((item) => {
    const kanbanDoing2 = document.querySelector(".kanban-doing-2");
    const addTask2 = document.createElement("div");
    addTask2.classList.add("todo-task");
    addTask2.classList.add("draggables");
    addTask2.setAttribute("draggable", "true");
    addTask2.innerHTML += `<p class="todo-header">${item?.title}</p>
                <p class="todo-sub">0 of ${item?.subtasks.length} subtasks</p>`;
    kanbanDoing2.appendChild(addTask2);
  });
  dataDone2.forEach((item) => {
    const kanbanDone2 = document.querySelector(".kanban-done-2");
    const addTask2 = document.createElement("div");
    addTask2.classList.add("todo-task");
    addTask2.classList.add("draggables");
    addTask2.setAttribute("draggable", "true");
    addTask2.innerHTML += `<p class="todo-header">${item?.title}</p>
                <p class="todo-sub">0 of ${item?.subtasks.length} subtasks</p>`;
    kanbanDone2.appendChild(addTask2);
  });
  dataTodo3.forEach((item) => {
    const kanbanTodo3 = document.querySelector(".kanban-todo-3");
    const addTask3 = document.createElement("div");
    addTask3.classList.add("todo-task");
    addTask3.classList.add("draggables");
    addTask3.setAttribute("draggable", "true");
    addTask3.innerHTML += `<p class="todo-header">${item?.title}</p>
                <p class="todo-sub">0 of ${item?.subtasks.length} subtasks</p>`;
    kanbanTodo3.appendChild(addTask3);
  });
  dataDoing3.forEach((item) => {
    const kanbanDoing3 = document.querySelector(".kanban-doing-3");
    const addTask3 = document.createElement("div");
    addTask3.classList.add("todo-task");
    addTask3.classList.add("draggables");
    addTask3.setAttribute("draggable", "true");
    addTask3.innerHTML += `<p class="todo-header">${item?.title}</p>
                <p class="todo-sub">0 of ${item?.subtasks.length} subtasks</p>`;
    kanbanDoing3.appendChild(addTask3);
  });
  dataDone3.forEach((item) => {
    const kanbanDone3 = document.querySelector(".kanban-done-3");
    const addTask3 = document.createElement("div");
    addTask3.classList.add("todo-task");
    addTask3.classList.add("draggables");
    addTask3.setAttribute("draggable", "true");
    addTask3.innerHTML += `<p class="todo-header">${item?.title}</p>
                <p class="todo-sub">0 of ${item?.subtasks.length} subtasks</p>`;
    kanbanDone3.appendChild(addTask3);
  });
}

const addMenu = () => {
  kanbanNew.addEventListener("click", () => {
    addDiv();
    count++;
    countText.innerHTML = count;
  });
};

const addDiv = (e) => {
  const menuDiv = document.createElement("a");
  const menuImg = document.createElement("img");
  const menuP = document.createElement("p");
  const deleteImg = document.createElement("img");
  menuDiv.setAttribute("href", "#");
  menuDiv.setAttribute("class", "menu");
  menuP.setAttribute("contenteditable", "true");
  menuP.textContent = "Untitled";
  menuImg.src = "./assets/icon-board.svg";
  deleteImg.src = "./assets/icon-cross.svg";
  deleteImg.setAttribute("class", "cross");
  const menuImgApp = menuDiv.appendChild(menuImg);
  const menuPapp = menuDiv.appendChild(menuP);
  const menuDelApp = menuDiv.appendChild(deleteImg);
  kanbanMenuNew.appendChild(menuDiv);
  menuDiv.appendChild(menuImgApp);
  menuDiv.appendChild(menuPapp);
  menuDiv.appendChild(menuDelApp);
  menuDiv.addEventListener("click", (e) => {
    title.textContent = e.target.children[1].textContent.trim();
  });

  deleteImg.addEventListener("click", (e) => {
    kanbanMenuNew.removeChild(menuDiv);
    title.textContent = "Platform Launch";
    count--;
    countText.innerHTML = count;
  });
};

const titleChange = () => {
  menu.forEach((item) => {
    item.addEventListener("click", (e) => {
      title.textContent = e.target.textContent.trim();
    });
  });
};

const contentChange = () => {
  menu.forEach((item) => {
    item.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      if (id) {
        contents.forEach((content) => {
          content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
      }
    });
  });
};

const addNewTask = () => {
  const newTaskBtn = document.querySelector(".new-task-btn");
  const taskModal = document.querySelector(".task-modal");
  const crossForm = document.querySelector(".form-cross");
  const inputTitle = document.querySelector(".newtitle");
  const saveBtn = document.querySelector(".save");
  const kanbanTodo = document.querySelector(".kanban-todo");
  const subtasks = document.querySelectorAll(".subtasks");
  newTaskBtn.addEventListener("click", (e) => {
    taskModal.style.display = "block";
  });
  saveBtn.addEventListener("click", (e) => {
    let subCount = 0;
    subtasks.forEach((sub) => {
      if (sub.value !== "") {
        subCount++;
      }
    });
    const addTask = document.createElement("div");
    addTask.classList.add("todo-task");
    addTask.classList.add("draggables");
    addTask.setAttribute("draggable", "true");
    addTask.innerHTML += `<p class="todo-header">${inputTitle.value}</p>
                <p class="todo-sub">${subCount} of 3 subtasks</p>`;
    kanbanTodo.appendChild(addTask);
  });
  crossForm.addEventListener("click", (e) => {
    taskModal.style.display = "none";
  });
};

const kanbanFunc = () => {
  addMenu();
  titleChange();
  contentChange();
  getText(file);
  addNewTask();
};

kanbanFunc();
