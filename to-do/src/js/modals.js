
import { Element } from "./elements";

const Elements = new Element();

let modal;
export class Modal {
    CreateModal(type, val) {
        switch (type) {
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
                </div>
                <div class="buttons">
                    <button class="btn add">ADD</button>
                    <button class="btn close">CANCEL</button>
                </div>
                </div>`
                Elements.modals.appendChild(modal);
                break;
            case "rename":
                let textRename = val.split("-").join("&ensp;");
                modal = document.createElement("div");
                modal.classList.add("project-add-item-modal");
                modal.classList.add("project-rename-modal");
                modal.classList.add("modal");
                modal.innerHTML = `
                <div class="background"></div>
                <div class="window">
                <h2 class="heading">Rename</h2>
                <div class="choices">
                    <input type="text" id="project-input" placeholder="TODO" value=${textRename}>
                </div>
                <div class="buttons">
                    <button class="btn rename">RENAME</button>
                    <button class="btn close">CANCEL</button>
                </div>
                </div>`
                Elements.modals.appendChild(modal);
                break;
        }


    }

    DeleteModal() {
        modal.remove();
    }
}