import { loadHomepage } from "./homepage.js";
import { loadMenupage } from "./menu.js";
import { loadContactpage } from "./contact.js";


export const content = document.querySelector(".main");
const listItems = document.getElementsByTagName("li");


const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

loadHomepage();

homeButton.addEventListener("click", function () {
    setSelected(this);
    loadHomepage();
});
menuButton.addEventListener("click", function () {
    setSelected(this);
    loadMenupage();
});
contactButton.addEventListener("click", function () {
    setSelected(this);
    loadContactpage();
});



export function setSelected(element) {
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("selected");
    }


    if (!element.classList[0]) element.classList.add("selected");
    else element.classList.remove("selected");
}

export function childRemove(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}

