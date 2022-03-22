
//DOM Elements
const addButton = document.querySelector(".add-button");
const closeButton = document.querySelector(".close-button");
const clearButton = document.querySelector(".clear-button");


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

//Clearing Event
clearButton.addEventListener("click", Clear);


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

buttonInput.addEventListener("click", () => {
    let book = new Book(GetBooks().length + 1, bookInput.value, authorInput.value, pagesInput.value, statusInput.checked);
    book.Save();
    book.Row();
})


//BOOK FUNCTIONALITY
class Book {
    constructor(id, name, author, pages, status) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

    Save() {
        let books = GetBooks();
        books.push(this);
        console.log(books);
        localStorage.setItem("library", JSON.stringify(books));
    }

}


Object.prototype.Remove = function () {
    let books = JSON.parse(localStorage.getItem("library"));
    let obj = this;
    let index = books.findIndex(item => item.id === obj.id);

    books.splice(index, 1);
    localStorage.setItem("library", JSON.stringify(books));
}


Object.prototype.Row = function () {
    let row = document.createElement("tr");
    row.setAttribute("id", this["id"])
    for (let value of Object.values(this)) {
        if (this["id"] === value) continue;
        let child = document.createElement("td");

        //IF CHECKBOX
        if (value === true || value === false) {
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");

            //Set checked
            if (value) checkbox.checked = true;
            else checkbox.checked = false;



            checkbox.addEventListener("click", () => {
                let books = GetBooks();
                let obj = this;
                let index = books.findIndex(item => item.id === obj.id);

                books.splice(index, 1);
                if (checkbox.checked) {
                    obj.status = true;
                    books.splice(index, 0, obj);
                    localStorage.setItem("library", JSON.stringify(books));

                } else {
                    obj.status = false;
                    books.splice(index, 0, obj);
                    localStorage.setItem("library", JSON.stringify(books));
                }
            })

            child.appendChild(checkbox);
        } else {
            child.innerHTML = value;
        }
        row.appendChild(child);
    }

    //DELETE BUTTON 
    let tableData = document.createElement("td");
    let deleteButton = document.createElement("i");
    deleteButton.classList.add("fa-solid");
    deleteButton.classList.add("fa-x");

    deleteButton.addEventListener("click", () => {
        DeleteTableRow(this["id"]);
        this.Remove();
        //location.reload();
    })

    tableData.appendChild(deleteButton);
    row.appendChild(tableData);
    AddTableRow(row);
}

class Library {
    constructor() {
        this.books = [];
    }

}


//FUNCTIONS

function GetBooks() {
    let books = JSON.parse(localStorage.getItem("library"));
    return books;
}

function Clear() {
    localStorage.clear();
    location.reload();
}

function AddTableRow(row) {
    modal.classList.add("not-visible");
    tableBody.appendChild(row);
}

function DeleteTableRow(row) {
    document.getElementById(row).remove();
}


let lib;
if (!localStorage.getItem("library")) {
    lib = new Library();
    localStorage.setItem("library", JSON.stringify(lib.books));
} else {
    JSON.parse(localStorage.getItem("library")).forEach(book => {
        book.Row();
    })
}
