"use strict";

import "core-js/stable";
import "regenerator-runtime/runtime";

class ToDoApp {
  submitButton = document.getElementById("submitButton");
  inputData = document.getElementById("inputValue");
  toDos = [];
  toDoList = document.querySelector(".toDo-list");

  constructor() {
    this._addToDo();
    this.toDoList.addEventListener("click", (e) => {
      if (e.target.classList.contains("save")) {
        this._saveToDo(e);
      }
      if (e.target.classList.contains("edit")) {
        this._editToDo(e);
      }
      if (e.target.classList.contains("delete")) {
        this._deleteToDo(e);
      }
    });
  }

  // Methods
  _addToDo() {
    this.submitButton.addEventListener("click", () => {
      const data = { todo: this.inputData.value };
      this.toDos.push(data);
      this._renderToDo();
      this.inputData.value = "";
    });
  }

  _renderToDo() {
    this.toDoList.innerHTML = "";
    this.toDos.forEach((el, i) => {
      const html = `
        <div class = "toDoWrap" data-index = "${i}">
        <span>${i + 1}. ${el.todo}</span>
        <input class = "hidden" id = "edit-input" type = "text" placeholder = "edit here"/>
        <div class="button-container">
          <button class = "btn btn-success edit" type="button">Edit</button>
          <button class = "btn btn-danger delete" type="button">Delete</button>
          <button class = "btn btn-success save hidden" type = "button">Save</button>
        </div>
        </div>`;
      this.toDoList.innerHTML += html;
    });
  }

  _dataIndex(e) {
    const targetToDo = e.target.parentElement.parentElement;
    return targetToDo.getAttribute("data-index");
  }

  _deleteToDo(e) {
    this.toDos.splice(this._dataIndex(e), 1);
    this._renderToDo();
  }

  _editToDo(e) {
    const parentEl = e.target.parentElement.parentElement;
    parentEl.firstElementChild.classList.add("hidden");
    parentEl.firstElementChild.nextElementSibling.classList.remove("hidden");
    const secondDivEl = e.target.parentElement;
    secondDivEl.firstElementChild.classList.add("hidden");
    secondDivEl.firstElementChild.nextElementSibling.classList.add("hidden");
    secondDivEl.lastElementChild.classList.remove("hidden");
  }

  _saveToDo(e) {
    const editInputValue = document.getElementById("edit-input").value;
    const edittedToDo = { todo: editInputValue };
    this.toDos.splice(this._dataIndex(e), 1, edittedToDo);
    this._renderToDo();
    const parentEl = e.target.parentElement.parentElement;
    parentEl.firstElementChild.classList.remove("hidden");
    parentEl.firstElementChild.nextElementSibling.classList.add("hidden");
    const secondDivEl = e.target.parentElement;
    secondDivEl.firstElementChild.classList.remove("hidden");
    secondDivEl.firstElementChild.nextElementSibling.classList.remove("hidden");
    secondDivEl.lastElementChild.classList.add("hidden");
  }
}

window.onload = new ToDoApp();
