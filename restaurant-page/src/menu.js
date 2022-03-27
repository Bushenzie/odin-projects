import { content, childRemove, setSelected } from "./app.js";

export function loadMenupage() {
    childRemove(content);
    const elements = [];

    //Heading
    let heading = document.createElement("h1");
    heading.textContent = "Menu-list";
    elements.push(heading)

    //Container
    let container = document.createElement("div");
    container.classList.add("menu");
    elements.push(container);

    //Menu-item 1
    container.appendChild(CreateMenuItem("lasagne.jpg", "Lasagne", "Best in the whole world!"));

    //Menu-item 2
    container.appendChild(CreateMenuItem("pizza.jpg", "Pizza", "Better than from yo mamma!"));


    elements.forEach(el => {
        content.appendChild(el);
    })
}

function CreateMenuItem(img, title, underText) {

    //Menu item container
    let menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    //IMG
    let image = document.createElement("img");
    image.setAttribute("src", "../imgs/" + img);
    image.setAttribute("alt", img);
    image.classList.add("menu-img");


    //Text
    let text = document.createElement("div");
    text.classList.add("text");

    let head = document.createElement("h3");
    head.textContent = title;

    let under = document.createElement("p");
    under.textContent = underText;

    //Appending
    text.appendChild(head);
    text.appendChild(under);

    menuItem.appendChild(image);
    menuItem.appendChild(text);

    return menuItem;
}