let inputs = document.getElementById("input");
let task = document.querySelector(".task");

let main = document.getElementById('main');
main.innerHTML = `
  <h2>To do app <i id="icon" class="fa-solid fa-calendar-check"></i></h2>
        <div class="input">
            <input type="text" placeholder="Enter your task" id="input">
            <button onclick="Add()">Add</button>
        </div>
        <div class="task">
      </div>
`
function Add() {
    if (inputs.value === "") {
        alert("You need to add something. Your list cannot be empty.");
    } else {
        let newEL = document.createElement("ul");
        newEL.innerHTML = `
            <span class="task-text">${inputs.value}</span>
            <i class="fa-solid fa-pencil edit"></i>
            <i class="fa-solid fa-xmark remove"></i>
        `;

        task.appendChild(newEL);
        inputs.value = "";

        newEL.querySelector(".remove").addEventListener("click", function () {
            newEL.remove();
        });

        newEL.querySelector(".edit").addEventListener("click", function () {
            let taskText = newEL.querySelector(".task-text");
            let editInput = document.createElement("input");
            editInput.type = "text";
            editInput.classList.add("input")
            editInput.value = taskText.innerText;

            newEL.replaceChild(editInput, taskText);

            editInput.addEventListener("keypress", function (event) {
                if (event.key === "Enter") {
                    taskText.innerText = editInput.value;
                    newEL.replaceChild(taskText, editInput);
                }
            });

            editInput.focus();
        });
    }
}
