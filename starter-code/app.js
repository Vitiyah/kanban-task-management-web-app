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

async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  // console.log(y);
}

const kanbanFunc = () => {
  addMenu();
  titleChange();
  contentChange();
  getText(file);
};

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

const addTask = () => {};

kanbanFunc();
