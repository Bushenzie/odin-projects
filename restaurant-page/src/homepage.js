import { content, childRemove, setSelected } from "./app.js";



export function loadHomepage() {
    const lorem = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas libero. Integer vulputate sem a nibh rutrum consequat. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
    childRemove(content);
    const elements = [];

    //Heading 1
    let headingOne = document.createElement("h1");
    headingOne.textContent = "Welcome to our Restaurant page!";
    elements.push(headingOne);

    //Lorem ipsum text 1
    let textOne = document.createElement("p");
    textOne.textContent = lorem;
    textOne.classList.add("text");
    elements.push(textOne);

    //Heading 2
    let headingTwo = document.createElement("h1");
    headingTwo.textContent = "We opened a new restaurant!";
    elements.push(headingTwo);

    //Lorem ipsum text 2
    let textTwo = document.createElement("p");
    textTwo.textContent = lorem;
    textTwo.classList.add("text");
    elements.push(textTwo);


    elements.forEach(el => {
        content.appendChild(el);
    })
}