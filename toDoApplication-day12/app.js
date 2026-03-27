let todos = JSON.parse(localStorage.getItem('todos')) || [];
const errorDiv = document.getElementById('error');


function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo() {
    const taskInput = document.getElementById('todo-input');
    const timeInput = document.getElementById('time-input');
    const text = taskInput.value.trim();
    const time = timeInput.value.trim();
    if (text === '')
         return;

    const priorityInput = document.querySelector('input[name="priority"]:checked');
    const priority = priorityInput ? priorityInput.value : "Non-Urgent";

    todos.push({
        text,
        time,
        priority,
        completed: false
    });

    taskInput.value = '';
    timeInput.value = '';

    saveTodos();
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

function sortTodos() {
    todos.sort((a, b) => 
        a.text.toLowerCase().localeCompare(b.text.toLowerCase())
    );

    saveTodos();
    renderTodos();
}
function validate(event) {
    errorDiv.style.display = (event.target.value.trim() !== '') ? 'none' : 'inline';
    
}

function renderTodos() {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        if (todo.completed) li.classList.add('completed');
        li.innerHTML = `
    <span>${todo.text}</span>
    <span>${todo.time ? ` (${todo.time})` : ''}</span>
    <span> - ${todo.priority}</span>
    <div>
        <button onclick="toggleComplete(${index})">✔</button>
        <button onclick="deleteTodo(${index})">✖</button>
    </div>
`;

        if (todo.priority === "Urgent") {
            li.style.color = "red";
        }

        list.appendChild(li);
    });
}

renderTodos();