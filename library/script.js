"use strict";

//TODO - DELETE ROWS
//TODO - STYLE (modals,site)





setBasic();

//Vars


//DOM Elements
const addButton = document.querySelector(".add-button");
const closeButton = document.querySelector(".close-button");

const modalBack = document.querySelector(".background");
const modal = document.querySelector(".modal");

//Input
const bookInput = document.querySelector("#name");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const statusInput = document.querySelector("#status");
const buttonInput = document.querySelector("#form-add");

//Table
const tableBody = document.querySelector("tbody");


buttonInput.addEventListener("click", () => {
    let book = new Book(Number(localStorage.getItem("x")) + 1, bookInput.value, authorInput.value, pagesInput.value, statusInput.checked);
    book.Save();
    book.Row();
})






//Modal Events
modalBack.addEventListener("click", () => {
    modal.classList.add("not-visible");
})

closeButton.addEventListener("click", () => {
    modal.classList.add("not-visible");
})

addButton.addEventListener("click", () => {
    modal.classList.remove("not-visible");
})


//Book functionality

function setBasic() {
    if (!localStorage.x) {
        localStorage.setItem("x", 0);
    } else {
        localStorage.setItem("x", localStorage.x)
    }
}

function Load() {
    for (let i = 0; i < localStorage.length - 1; i++) {
        let obj = JSON.parse(localStorage.getItem(i));
        obj.Row();
    }
}

function Clear() {
    localStorage.clear();
}

function AddTableRow(row) {
    modal.classList.add("not-visible");
    tableBody.appendChild(row);
}


function Book(id, name, author, pages, status) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


Object.prototype.Save = function () {
    localStorage.setItem(localStorage.getItem("x"), JSON.stringify(this));
    localStorage.setItem("x", Number(localStorage.getItem("x")) + 1);
}

Object.prototype.Row = function () {
    let row = document.createElement("tr");
    row.setAttribute("id", this["id"])
    for (let value of Object.values(this)) {
        let child = document.createElement("td");

        //CHECKBOX
        if (value === true || value === false) {
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            if (value === true) {
                checkbox.checked = true;
            } else {
                checkbox.checked = false;
            }
            checkbox.addEventListener("click", () => {
                let num = (this["id"] - 1);
                let object = JSON.parse(localStorage.getItem(num));
                if (checkbox.checked) {
                    object.status = true;
                    localStorage.setItem(num, JSON.stringify(object));

                } else {
                    object.status = false;
                    localStorage.setItem(num, JSON.stringify(object));
                }
            })
            child.appendChild(checkbox);
        } else {
            child.innerHTML = value;
        }
        row.appendChild(child);

    }

    let tableData = document.createElement("td");
    let deleteButton = document.createElement("i");
    deleteButton.classList.add("fa-solid");
    deleteButton.classList.add("fa-x");

    deleteButton.addEventListener("click", () => {

    })
    tableData.appendChild(deleteButton);
    row.appendChild(tableData);
    AddTableRow(row);
}

if (localStorage.length > 1) {
    Load();
}