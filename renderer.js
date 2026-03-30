// Get references to DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");

// Function to add a new task
function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    // Create list item
    let li = document.createElement("li");

    // Get today's date in a readable format
    const taskDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Task content
    li.innerHTML = `
        <div class="task-content">
            <span class="task-text">${taskText}</span>
            <span class="task-date">${taskDate}</span>
        </div>
        <div class="button-container">
            <button class="complete">✔</button>
            <button class="delete">✖</button>
        </div>
    `;

    // Add event listeners
    li.querySelector(".complete").addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    li.querySelector(".delete").addEventListener("click", function() {
        li.remove();
    });

    // Add to list
    document.getElementById("taskList").appendChild(li);

    // Clear input
    taskInput.value = "";
}

// Add task when button is clicked
addTaskBtn.addEventListener("click", addTask);

// Add task when Enter key is pressed
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});