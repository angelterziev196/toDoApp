"use strict";

import "core-js/stable";
import "regenerator-runtime/runtime";

class ToDoApp {
  submitButton = document.getElementById("submitButton");
  inputData = document.getElementById("inputValue");
  toDos = [];
  toDoList = document.querySelector(".toDo-list");

  constructor() {
    this.addToDo();
  }
  // Methods
  addToDo() {
    this.submitButton.addEventListener("click", () => {
      const data = { todo: this.inputData.value };
      this.toDos.push(data);
      this.renderToDo();
      this.inputData.value = "";
    });
  }

  renderToDo() {
    if (this.toDos.length) {
      this.toDoList.innerHTML = "";
      this.toDos.forEach((el, i) => {
        const html = `
        <div class = "toDoWrap">
        <span>${i + 1}. ${el.todo}</span>
        <div class="button-container">
          <button class = 'btn btn-success' type="button">Edit</button>
          <button class = 'btn btn-danger' type="button">Delete</button>
        </div>
        </div>`;
        this.toDoList.innerHTML += html;
      });
    }
  }
}

window.onload = new ToDoApp();
