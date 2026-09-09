const tasks = [];

const add_btn = document.getElementById("add");
const input = document.getElementById("task-input")
const output = document.getElementById("output");

    function addTask(){
        const task = input.value;

        if (task === "") return;
        tasks.push(task);
        
        const taskDiv = document.createElement("div");
        const newTask = document.createElement("p");
        const del = document.createElement("button");
        const edit = document.createElement("button");

        
        newTask.textContent = task;
        del.textContent="Delete";
        edit.textContent="Edit";

        del.onclick = function(){
            taskDiv.remove();
        };

        edit.onclick = function(){
            const updatedTask = prompt("Edit your task:", newTask.textContent);

            if (updatedTask !== null && updatedTask.trim() !== "") {
            newTask.textContent = updatedTask;
        }

        };

        taskDiv.appendChild(newTask);
        taskDiv.appendChild(del);
        taskDiv.appendChild(edit);

        output.appendChild(taskDiv);
        
        input.value = "";
        

    }



