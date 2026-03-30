// Select elements
const addButton = document.getElementById("add-task");
const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText) {
        // Create new task element
        const li = document.createElement("li");
        const taskDate = new Date().toLocaleDateString(); // Only display date (no time)

        // Add task text and date
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="task-date">${taskDate}</span>
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        `;

        // Add event listeners for buttons
        li.querySelector(".complete").addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        li.querySelector(".delete").addEventListener("click", function () {
            li.remove();
        });

        // Add task to list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }
});
