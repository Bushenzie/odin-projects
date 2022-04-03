
import { Element } from "./elements";

const Elements = new Element();


/* TEMPLATE FOR MODAL
<div class="modal">
    <div class="background"></div>
    <div class="window">

    </div>
</div>
*/

let modal;
export class Modal {
    CreateModal(type) {
        switch (type) {
            case "settings":
                modal = document.createElement("div");
                modal.classList.add("project-settings-modal");
                modal.classList.add("modal");
                modal.innerHTML = `
                <div class="background"></div>
                <div class="window">
                <h2 class="heading">Project Settings</h2>
                <div class="choices">
                <input type="text" id="project-settings-input" value="Project 1" placeholder="Rename your Project">
                        <select id="priority-select">
                        <option value="high">High Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="low" selected>Low Priority</option>
                        </select>
                        </div>
                        <div class="buttons">
                        <button class="btn confirm">CONFIRM</button>
                        <button class="btn close">CANCEL</button>
                        </div>
                        </div>
                        `
                Elements.modals.appendChild(modal);
                break;
            case "add-project":
                modal = document.createElement("div");
                modal.classList.add("project-add-modal");
                modal.classList.add("modal");
                modal.innerHTML = `
                <div class="background"></div>
                <div class="window">
                <h2 class="heading">Add project</h2>
                <div class="choices">
                <input type="text" id="project-input" placeholder="Project Name">
                <select id="priority-select">
                <option value="high">High Priority</option>
                <option value="medium" selected>Medium Priority</option>
                <option value="low">Low Priority</option>
                        </select>
                        </div>
                        <div class="buttons">
                        <button class="btn add">ADD</button>
                        <button class="btn close">CANCEL</button>
                        </div>
                        </div>`
                Elements.modals.appendChild(modal);
                break;
            case "remove-project":
                modal = document.createElement("div");
                modal.classList.add("project-remove-modal");
                modal.classList.add("modal");
                modal.innerHTML = `
                <div class="background"></div>
                <div class="window">
                <h2 class="heading">Delete Project</h2>
                <p class="text">Are you sure , you want to delete this project?</p>
                <div class="buttons">
                <button class="btn accept">YES</button>
                <button class="btn close">CANCEL</button>
                </div>
                </div>
                </div>`
                Elements.modals.appendChild(modal);
                break;
            case "add-item":
                modal = document.createElement("div");
                modal.classList.add("project-add-item-modal");
                modal.classList.add("modal");
                modal.innerHTML = `
                <div class="background"></div>
                <div class="window">
                <h2 class="heading">Add TO-DO Item</h2>
                <div class="choices">
                    <input type="text" id="project-input" placeholder="TODO">
                    <select id="priority-select">
                        <option value="high">High Priority</option>
                        <option value="medium" selected>Medium Priority</option>
                        <option value="low">Low Priority</option>
                    </select>
                </div>
                <div class="buttons">
                    <button class="btn add">ADD</button>
                    <button class="btn close">CANCEL</button>
                </div>
                </div>`
                Elements.modals.appendChild(modal);
                break;
            case "settings-project":
                modal = document.createElement("div");
                modal.classList.add("project-add-item-modal");
                modal.classList.add("modal");
                modal.innerHTML = `
                <div class="background"></div>
                <div class="window">
                <h2 class="heading">TO-DO Settings</h2>
                <div class="choices">
                    <input type="text" id="project-input" placeholder="Rename">
                    <select id="priority-select">
                        <option value="high">High Priority</option>
                        <option value="medium" selected>Medium Priority</option>
                        <option value="low">Low Priority</option>
                    </select>
                </div>
                <div class="buttons">
                    <button class="btn add">ADD</button>
                    <button class="btn close">CANCEL</button>
                </div>
                </div>`
                break;
        }


    }

    DeleteModal() {
        modal.remove();
    }
}