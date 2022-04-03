import "../css/main.css";
import "../css/modals.css";

import { Element } from "./elements";
import { Event } from "./events";
import { LS } from "./LS";

const Elements = new Element();
export const Events = new Event();
const Storage = new LS();

if (Storage.Parse(Storage.Get("todos")) === 0 || !Storage.Get("todos")) {
    let p = document.createElement("p");
    p.classList.add("warning");
    p.textContent = "No items added yet."
    Elements.content.appendChild(p);
} else {
    Storage.SetDefault();
    Storage.LoadAllTODOs();
}





