let inputs = document.getElementById("input");
let task = document.querySelector(".task");

function Add() {
    if (inputs.value === ""){
        alert ("You need to add someting your list cannot be empty");
    } else {
        let newEL = document.createElement("ul") ;
        newEL.innerHTML = inputs.value + ' <i class = "fa-solid fa-xmark"></i>';
        task.appendChild(newEL);
        inputs.value = "";
        newEL.querySelector("i").addEventListener("click" , remove)
        function remove(){
            newEL.remove ();
        }
}
} 