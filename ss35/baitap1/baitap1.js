const taskInputField = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskBtn");
const taskListElement = document.getElementById("taskList");
const messageDiv = document.getElementById("message");

let taskList = JSON.parse(localStorage.getItem("user")) || [];

function showTask() {
  taskListElement.innerHTML = "";
  taskList.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
        <span>${task}</span>
          <button class="editBtn">Sửa</button>
          <button class="deleteBtn">Xóa</button>

    `;
    taskListElement.appendChild(taskElement);

    taskElement
      .querySelector(".editBtn")
      .addEventListener("click", () => editTask(index));

    taskElement
      .querySelector(".deleteBtn")
      .addEventListener("click", () => deleteTask(index));
  });
}

function editTask(index) {
  const newTask = prompt("Nhập nội dung mới:", taskList[index]);
  if (newTask && newTask.trim() !== "") {
    taskList[index] = newTask.trim();
    saveData("user", taskList);
    showTask();
  }
}

function deleteTask(index) {
  taskList.splice(index, 1);
  saveData("user", taskList);
  showTask();
}

addTaskButton.addEventListener("click", () => {
  const task = taskInputField.value.trim();
  if (!task) {
    messageDiv.textContent = "Mời bạn nhập tên công việc";
    setTimeout(() => {
      messageDiv.textContent = "";
    }, 2000);
    return;
  }
  taskList.push(task);
  saveData("user", taskList);
  showTask();
  taskInputField.value = "";
});

// Hàm tải dữ liệu từ localStorage
function loadData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

// Hàm lưu dữ liệu vào localStorage
function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Gọi hiển thị danh sách công việc khi tải trang
showTask();
