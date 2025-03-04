const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const clearAllButton = document.getElementById("clearAll");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keyup", function (e) {
    console.log(e.key);
    if (e.key === "Enter") {
        addTaskButton.click();
    }
});

addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value;
    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        const button = document.createElement("button");
        button.textContent = "habe fertig";
        button.addEventListener("click", (e) => {
            li.remove();
            // console.log(e);
            // e.stopPropagation();
            //e.target.parentElement.remove();
            // e .. event
            // e.target .. button
            // e.target.parentElement .. li
        });
        li.appendChild(button);
        taskList.appendChild(li);
        taskInput.value = "";
    }
});

clearAllButton.addEventListener("click", function () {
    taskList.innerHTML = "";
});
