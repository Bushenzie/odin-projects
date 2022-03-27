import { content, childRemove, setSelected } from "./app.js";

export function loadContactpage() {
    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laboriosam repellendus dolores qui illo ipsam dolorum molestias distinctio. Similique odit tenetur nesciunt quaerat unde repellat nulla ab, recusandae adipisci laudantium?";
    childRemove(content);
    const elements = [];

    //Heading
    let heading = document.createElement("h1");
    heading.textContent = "Contact us!";
    elements.push(heading);

    //Contact el
    let contact = document.createElement("div");
    contact.classList.add("contact");

    //Lorem ipsum text
    let text = document.createElement("div");
    text.textContent = lorem;
    text.classList.add("text");
    contact.appendChild(text);

    //Form div
    let formDiv = document.createElement("div");
    formDiv.classList.add("form");

    //Form
    let form = CreateForm();
    contact.appendChild(form);

    //Opening hours element
    let cont = document.createElement("div");
    cont.classList.add("hours");

    //Opening Hours heading 
    let hoursHead = document.createElement("h2");
    hoursHead.textContent = "Opening Hours";
    cont.appendChild(hoursHead);








    elements.push(contact);

    elements.forEach(el => {
        content.appendChild(el);
    })
}

function CreateForm() {
    //form element
    let form = document.createElement("form");
    form.setAttribute("action", "");

    //Form items;
    form.appendChild(CreateFormItem("input", "email", "email", "email", "Your E-mail"));
    form.appendChild(CreateFormItem("input", "text", "name", "name", "Your Name"));
    form.appendChild(CreateFormItem("textarea", "-", "msg", "msg", "Your Message"));

    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = "Send Message";

    form.appendChild(btn);
    return form;
}

function CreateFormItem(el, type, name, id, labelText) {
    //DIV
    let container = document.createElement("div");
    container.classList.add("form-item");


    //Item content
    //label
    let label = document.createElement("label");
    label.setAttribute("for", name);
    label.textContent = labelText;

    if (el !== "textarea") {
        let input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("name", name);
        input.setAttribute("id", id);
        container.appendChild(label);
        container.appendChild(input);
    }
    else {
        let textArea = document.createElement("textarea");
        textArea.setAttribute("name", name);
        textArea.setAttribute("id", id);
        textArea.setAttribute("cols", "30");
        textArea.setAttribute("rows", "10");
        container.appendChild(label);
        container.appendChild(textArea);
    }

    return container;
}

function CreateOpeningHour() {

}