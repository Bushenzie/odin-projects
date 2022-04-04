import { Modal } from "./modals";
import { Element } from "./elements";
import { LS } from "./LS";
import { highCount, mediumCount, lowCount, SetCounts, SetWarnings } from "./app";

const Elements = new Element();
const Modals = new Modal();
const Storage = new LS();

export let priority = "high";

export class Event {

    constructor() {
        Elements.highPriorityBar.addEventListener("click", () => {
            Elements.projectName.textContent = "High Priority";
            priority = "high";
            Elements.listAll.forEach(li => li.classList.remove("selected"));
            Elements.highPriorityBar.classList.add("selected");

            if (Elements.highContent.classList.contains("not-visible")) {
                Elements.highContent.classList.remove("not-visible");
            }


            Elements.mediumContent.classList.add("not-visible");
            Elements.lowContent.classList.add("not-visible");

        })

        Elements.mediumPriorityBar.addEventListener("click", () => {
            Elements.projectName.textContent = "Medium Priority";
            priority = "medium";
            Elements.listAll.forEach(li => li.classList.remove("selected"));
            Elements.mediumPriorityBar.classList.add("selected");

            if (Elements.mediumContent.classList.contains("not-visible")) {
                Elements.mediumContent.classList.remove("not-visible");
            }


            Elements.highContent.classList.add("not-visible");
            Elements.lowContent.classList.add("not-visible");

        })

        Elements.lowPriorityBar.addEventListener("click", () => {
            Elements.projectName.textContent = "Low Priority";
            priority = "low";
            Elements.listAll.forEach(li => li.classList.remove("selected"));
            Elements.lowPriorityBar.classList.add("selected");

            if (Elements.lowContent.classList.contains("not-visible")) {
                Elements.lowContent.classList.remove("not-visible");
            }

            Elements.highContent.classList.add("not-visible");
            Elements.mediumContent.classList.add("not-visible");

        })

        Elements.addTodo_button.addEventListener("click", () => {
            Modals.CreateModal("add-item")
            Elements.Load("add");
            Elements.projectTodoAdd.background.addEventListener("click", () => { Modals.DeleteModal() });
            Elements.projectTodoAdd.close.addEventListener("click", () => { Modals.DeleteModal() });
            Elements.projectTodoAdd.add.addEventListener("click", () => {
                Elements.Load("add");
                if (Elements.projectTodoAdd.inputValue !== "") {
                    if (priority === "high") {
                        Storage.Save(highCount, Elements.projectTodoAdd.inputValue, priority);
                        this.AddTODO(highCount, Elements.projectTodoAdd.inputValue, priority);
                    }
                    if (priority === "medium") {
                        SetWarnings();
                        Storage.Save(mediumCount, Elements.projectTodoAdd.inputValue, priority);
                        this.AddTODO(mediumCount, Elements.projectTodoAdd.inputValue, priority);
                    }
                    if (priority === "low") {
                        SetWarnings();
                        Storage.Save(lowCount, Elements.projectTodoAdd.inputValue, priority);
                        this.AddTODO(lowCount, Elements.projectTodoAdd.inputValue, priority);
                    }
                    SetCounts();
                    SetWarnings();
                    if (Elements.warningText) Elements.warningText.remove();
                    Modals.DeleteModal();
                }
            })
        });
    }

    AddTODO(id, name, priority) {
        let todo = document.createElement("div");
        let escapedName = name.replace(/[^A-Za-z0-9]/g, "");
        todo.classList.add("to-do-item");
        todo.classList.add(`${priority}`);
        todo.classList.add(`id-${id}-${priority}-${escapedName}`);
        todo.innerHTML =
            `
        <div class="title">
            <div class="heading">${name}</div>
            <div class="options">
                <div class="rename">Rename</div>
                <div class="remove">Remove</div>
            </div>
        </div>
        `

        if (priority === "high") Elements.highContent.appendChild(todo);
        else if (priority === "medium") Elements.mediumContent.appendChild(todo);
        else if (priority === "low") Elements.lowContent.appendChild(todo);

        document.querySelector(`.id-${id}-${priority}-${escapedName} .rename `).addEventListener("click", () => {
            Modals.CreateModal("rename", name.split(" ").join("-"));
            Elements.Load("rename");
            Elements.projectRename.background.addEventListener("click", () => { Modals.DeleteModal() });
            Elements.projectRename.close.addEventListener("click", () => { Modals.DeleteModal() });
            Elements.projectRename.rename.addEventListener("click", () => {
                Elements.Load("rename");
                if (Elements.projectRename.inputValue !== "") {
                    document.querySelector(`.id-${id}-${priority}-${escapedName} .heading`).textContent = Elements.projectRename.inputValue;
                    Storage.Rename(id, name, priority, Elements.projectRename.inputValue);
                    Modals.DeleteModal();
                }
            })
        });

        document.querySelector(`.id-${id}-${priority}-${escapedName} .remove`).addEventListener("click", () => {
            document.querySelector(`.id-${id}-${priority}-${escapedName}`).remove();
            Storage.Remove(id, name, priority);
            SetCounts();
            SetWarnings();
        });

    }
}

