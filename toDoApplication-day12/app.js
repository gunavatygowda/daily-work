let todos = JSON.parse(localStorage.getItem('todos')) || [];

let errorDiv;

window.onload = function () {
    errorDiv = document.getElementById('error');
    renderTodos();
};

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function sort() {
    todos.sort((a, b) => a.text.localeCompare(b.text));
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
            <span>
                ${todo.text} 
                (${todo.time || "No Time"}) 
                - ${todo.priority || "No Priority"}
            </span>
            <div>
                <button onclick="toggleComplete(${index})">✔</button>
                <button onclick="deleteTodo(${index})">✖</button>
            </div>
        `;

        list.appendChild(li);
    });
}

function addTodo() {
    const input = document.getElementById('todo-input');
    const timeInput = document.getElementById('time-input');
    const priorityInput = document.getElementById('priority');

    const text = input.value.trim();
    const time = timeInput.value;
    const priority = priorityInput.value;

    if (text === '') return;

    todos.push({
        text: text,
        time: time,
        priority: priority,
        completed: false
    });

    input.value = '';
    timeInput.value = '';
    priorityInput.value = '';

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