

export function Element() {
    //SIDEBAR
    this.listAll = document.querySelectorAll(".sidebar > .projects > ul > li");
    this.highPriorityBar = document.querySelector(".sidebar > .projects > ul > .project-item.high");
    this.mediumPriorityBar = document.querySelector(".sidebar > .projects > ul > .project-item.medium");
    this.lowPriorityBar = document.querySelector(".sidebar > .projects > ul > .project-item.low");


    //MAIN AREA
    this.projectName = document.querySelector(".mainWindow > .head > .project > .project-name");
    this.highContent = document.querySelector(".mainWindow > .content > .high-priority");
    this.mediumContent = document.querySelector(".mainWindow > .content > .medium-priority");
    this.lowContent = document.querySelector(".mainWindow > .content > .low-priority");

    this.deleteProject_button = document.querySelector(".mainWindow > .head > .options > .delete");
    this.addTodo_button = document.querySelector(".mainWindow > .head > .options > .add");

    //MODALS
    this.modals = document.querySelector(".modals");

    //Warnings
    this.highWarning = document.querySelector(".mainWindow > .content > .high-priority > p.warning");
    this.mediumWarning = document.querySelector(".mainWindow > .content > .medium-priority > p.warning");
    this.lowWarning = document.querySelector(".mainWindow > .content > .low-priority > p.warning");

}







Element.prototype.Load = function (type) {
    switch (type) {
        case "add":
            this.projectTodoAdd = {
                modal: document.querySelector(".project-add-item-modal"),
                background: document.querySelector(".project-add-item-modal > .background"),
                add: document.querySelector(".project-add-item-modal > .window > .buttons > button.add"),
                close: document.querySelector(".project-add-item-modal > .window > .buttons > button.close"),
                inputValue: document.querySelector(".project-add-item-modal > .window > .choices > #project-input").value,
            }
            break;
        case "rename":
            this.projectRename = {
                modal: document.querySelector(".project-rename-modal"),
                background: document.querySelector(".project-rename-modal > .background"),
                rename: document.querySelector(".project-rename-modal > .window > .buttons > button.rename"),
                close: document.querySelector(".project-rename-modal > .window > .buttons > button.close"),
                inputValue: document.querySelector(".project-rename-modal > .window > .choices > #project-input").value,
            }
            break;
    }

}
