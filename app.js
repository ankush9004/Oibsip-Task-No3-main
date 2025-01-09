// Select HTML elements
const taskTitle = document.getElementById('taskTitle');
const taskDescription = document.getElementById('taskDescription');
const addTaskBtn = document.getElementById('addTaskBtn');
const pendingTasksList = document.getElementById('pendingTasksList');
const completedTasksList = document.getElementById('completedTasksList');

// Event Listener for adding tasks
addTaskBtn.addEventListener('click', function() {
    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();

    if (title === "" || description === "") {
        alert("Please enter both a title and description!");
        return;
    }

    const task = {
        title: title,
        description: description,
        completed: false,
        dateAdded: new Date().toLocaleString()
    };

    addTaskToList(task);
    taskTitle.value = ''; // Clear title input
    taskDescription.value = ''; // Clear description input
});

// Function to add task to the list
function addTaskToList(task) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <div>
            <strong>${task.title}</strong>
            <p>${task.description}</p>
            <small>${task.dateAdded}</small>
        </div>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
    `;

    // Complete Task Button
    taskItem.querySelector('.complete-btn').addEventListener('click', function() {
        task.completed = true;
        taskItem.classList.add('completed');
        moveTaskToCompleted(taskItem);
    });

    // Delete Task Button
    taskItem.querySelector('.delete-btn').addEventListener('click', function() {
        taskItem.remove();
    });

    // Append task to pending tasks
    pendingTasksList.appendChild(taskItem);
}

// Function to move task to completed tasks
function moveTaskToCompleted(taskItem) {
    completedTasksList.appendChild(taskItem);
    const completeBtn = taskItem.querySelector('.complete-btn');
    completeBtn.remove(); // Remove 'Complete' button
}
