let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const categoryInput = document.getElementById('category');

    const task = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    const category = categoryInput.value.trim();

    if (task === '') {
        alert('Please enter a task');
        return;
    }

    const newTask = {
        task,
        dueDate,
        priority,
        category
    };

    tasks.push(newTask);
    tasks.sort((a, b) => priorityOrder(a.priority) - priorityOrder(b.priority));

    renderTasks();

    taskInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'low';
    categoryInput.value = '';
}

function priorityOrder(priority) {
    switch (priority) {
        case 'high':
            return 1;
        case 'medium':
            return 2;
        case 'low':
            return 3;
        default:
            return 4;
    }
}

function renderTasks() {
    const taskTableBody = document.getElementById('tasks');
    taskTableBody.innerHTML = '';

    tasks.forEach((taskObj, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${taskObj.task}</td>
            <td>${taskObj.dueDate}</td>
            <td>${taskObj.priority}</td>
            <td>${taskObj.category}</td>
            <td>
                <input type="checkbox" onchange="completeTask(this, ${index})">
                <button onclick="deleteTask(${index})">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/trash.png" alt="Delete">
                </button>
            </td>
        `;
        if (taskObj.completed) {
            tr.classList.add('completed');
        }
        taskTableBody.appendChild(tr);
    });
}

function completeTask(checkbox) {
    const li = checkbox.parentNode.parentNode;
    li.classList.toggle('completed');
}


function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function setTheme(theme) {
    document.body.className = theme;
}

function toggleAudio() {
    const audio = document.getElementById('background-audio');
    const audioIcon = document.getElementById('audio-icon');
    if (audio.paused) {
        audio.play();
        audioIcon.src = "https://img.icons8.com/ios-filled/50/000000/speaker.png";
    } else {
        audio.pause();
        audioIcon.src = "https://img.icons8.com/ios-filled/50/000000/mute.png";
    }
}
