let todos = JSON.parse(localStorage.getItem('todos')) || [];
const errorDiv = document.getElementById('error');
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function sort() {
    todos.sort((e1, e2) => {
        return e1.text.localeCompare(e2.text);
    })
    console.log(todos);
    renderTodos();
}
function validate() {
    errorDiv.style.display = (event.target.value.trim() !== '') ? 'none' : 'inline';
}
function renderTodos() {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        if (todo.completed) li.classList.add('completed');

        li.innerHTML = `
            <div>
                <strong>${index + 1}. ${todo.text}</strong><br>
                <small>${todo.date}</small>
            </div>
            <div class="actions">
                <button class="complete" onclick="toggleComplete(${index})">✔</button>
                <button onclick="deleteTodo(${index})">✖</button>
            </div>
        `;

        list.appendChild(li);
    });
}
function addTodo() {
    const input = document.getElementById('todo-input');
    const dateInput = document.getElementById('date-input');
    const text = input.value.trim();

    if (text === '' || text.startsWith('-')) {
        errorDiv.style.display = 'inline';
        errorDiv.innerText = "Invalid task";
        return;
    }

    errorDiv.style.display = 'none';

    let selectedDate = dateInput.value;
    let now = selectedDate ? new Date(selectedDate) : new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);

    const formattedDate = `${day}-${month}-${year}`;

    todos.push({
        text,
        completed: false,
        date: formattedDate
    });
    input.value = '';
    dateInput.value = '';
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
renderTodos();