import { content, childRemove, setSelected } from "./app.js";



export function loadHomepage() {
    const lorem = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas libero. Integer vulputate sem a nibh rutrum consequat. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
    childRemove(content);
    const elements = [];

    //Heading
    let heading = document.createElement("h1");
    heading.textContent = "Welcome to our Restaurant page!";
    elements.push(heading);

    //Lorem ipsum text
    let text = document.createElement("p");
    text.textContent = lorem;
    text.classList.add("text");
    elements.push(text);

    elements.forEach(el => {
        content.appendChild(el);
    })
}