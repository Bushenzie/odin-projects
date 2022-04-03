import { Modal } from "./modals";
import { Element } from "./elements";
import { LS } from "./LS";

const Elements = new Element();
const Modals = new Modal();
const Storage = new LS();


export class Event {
    constructor() {
        /*
        //Project Add Modal
        Elements.addProject_button.addEventListener("click", () => {
            Modals.CreateModal("add-project")
            Elements.Load("project-add");
            Elements.projectAdd.background.addEventListener("click", () => { Modals.DeleteModal() });
            Elements.projectAdd.close.addEventListener("click", () => { Modals.DeleteModal() });
            Elements.projectAdd.add.addEventListener("click", () => {
                Elements.Load("project-add");
                this.AddProject(Elements.projectAdd.inputValue, 1, Elements.projectAdd.priorityValue);
                Storage.Save(Elements.projectAdd.inputValue, Elements.projectAdd.priorityValue, 1, "project", Elements.projectAdd.inputValue);
                Modals.DeleteModal();
            })
        });


        //Project Remove Modal
        Elements.deleteProject_button.addEventListener("click", () => {
            Modals.CreateModal("remove-project");
            Elements.Load("project-remove");
            Elements.projectRemove.background.addEventListener("click", () => { Modals.DeleteModal() });
            Elements.projectRemove.close.addEventListener("click", () => { Modals.DeleteModal() });
        });
        */
        //Project Item Add Modal
        Elements.addTodo_button.addEventListener("click", () => {
            Modals.CreateModal("add-item")
            Elements.Load("todo-add");
            Elements.projectTodoAdd.background.addEventListener("click", () => { Modals.DeleteModal() });
            Elements.projectTodoAdd.close.addEventListener("click", () => { Modals.DeleteModal() });
            Elements.projectTodoAdd.add.addEventListener("click", () => {
                Elements.Load("todo-add");
                this.AddTODO(Elements.projectTodoAdd.inputValue, 1, Elements.projectTodoAdd.priorityValue);
                Storage.Save(Elements.projectTodoAdd.inputValue, Elements.projectTodoAdd.priorityValue, 1, "todo", "Project 1");
                if (Elements.warningText) Elements.warningText.remove();
                Modals.DeleteModal();
            })
        });
        /*
        //Project Settings Modal
        Elements.settingsProject_button.addEventListener("click", () => {
            Modals.CreateModal("settings");
            Elements.Load("settings");
            Elements.projectSettings.background.addEventListener("click", () => { Modals.DeleteModal() });
            Elements.projectSettings.close.addEventListener("click", () => { Modals.DeleteModal() });
        });*/
    }

    AddTODO(name, id, priority) {
        let todo = document.createElement("div");
        todo.classList.add("to-do-item");
        todo.classList.add(`${priority}`);
        todo.setAttribute("id", `${id}`);
        todo.innerHTML =
            `
        <div class="title">
            <div class="heading">${name}</div>
                <div class="options">
                    <div class="show-info">More</div>
                    <div class="remove">Remove</div>
                </div>
            </div>
            <div class="right-side">
            <input type="checkbox" class="set-done-button">
        </div>
        `
        Elements.content.appendChild(todo);
    }

    AddProject(name, id, priority) {
        let project = document.createElement("li");
        project.classList.add("project-item");
        project.classList.add(`${priority}`);
        project.setAttribute("id", `${id}`);
        project.innerHTML = `<span class="project-name">${name}</span>`
        Elements.projects.appendChild(project);
    }
}

