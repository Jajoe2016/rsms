import React from 'react';
import './App.css'

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function Operations() {
  return(
    <div>
    <p> Hello - this is your Operations</p>
    <button class="trigger">Add School</button>
    <button class="trigger">Add Department</button>
    
    <div class="modal">
    <div class="modal-content">
        <span class="close-button">&times;</span>
        <h1>Hello, I am a modal!</h1>
    </div>
</div>
    </div>   
  );
}


function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

export default Operations;