let taskInput = document.getElementById("new-task"); // new-task
let addButton = document.getElementById("addButton"); //first button
let incompleteTasks = document.getElementById("incomplete-tasks"); //incomplete-tasks
let completedTasks = document.getElementById("completed-tasks"); //completed-tasks
let clearButton = document.getElementById("clear");

let addTask = function() {
    if (taskInput.value == "") {
        alert("Task to be added should not be empty!");
        return;
    }
    let listItem = createNewTask(taskInput.value);
    incompleteTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value = "";
}