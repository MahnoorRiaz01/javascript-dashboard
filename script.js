document.getElementById("todo").innerHTML = `
  <h2 class="text-xl font-bold mb-4">To-Do List</h2>
  <div class="flex gap-2 mb-4">
    <input id="todo-input" type="text" placeholder="Add a task..." 
      class="flex-1 border p-2 rounded shadow focus:outline-none focus:ring" />
    <button id="add-btn" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Add
    </button>
  </div>
  <ul id="todo-list" class="space-y-2"></ul>
`;
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    list.innerHTML += `
      <li class="flex justify-between items-center bg-gray-100 p-2 rounded shadow">
        <span class="${task.done ? 'line-through text-gray-500' : ''}">${task.text}</span>
        <div class="space-x-2">
          <button onclick="toggleTask(${index})" class="text-green-600 hover:text-green-800">✔</button>
          <button onclick="deleteTask(${index})" class="text-red-600 hover:text-red-800">✖</button>
        </div>
      </li>
    `;
  });
}

function addTask() {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();
  if (text) {
    tasks.push({ text, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

document.getElementById("add-btn").addEventListener("click", addTask);

// Render existing tasks on load
renderTasks();




