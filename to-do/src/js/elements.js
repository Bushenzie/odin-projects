

export function Element() {
    //SIDEBAR
    this.addProject_button = document.querySelector(".sidebar > .head > .add");
    this.projects = document.querySelector(".sidebar > .projects > ul");

    //MAIN AREA
    this.content = document.querySelector(".mainWindow > .content");
    this.deleteProject_button = document.querySelector(".mainWindow > .head > .options > .delete");
    this.settingsProject_button = document.querySelector(".mainWindow > .head > .options > .settings");
    this.addTodo_button = document.querySelector(".mainWindow > .head > .options > .add");
    this.projectName = document.querySelector(".mainWindow > .head > .project > .project-name");

    //MODALS
    this.modals = document.querySelector(".modals");
}







Element.prototype.Load = function (type) {
    this.warningText = document.querySelector(".mainWindow > .content > .warning");
    switch (type) {
        /*
        case "project-add":
            this.projectAdd = {
                modal: document.querySelector(".project-add-modal"),
                background: document.querySelector(".project-add-modal > .background"),
                add: document.querySelector(".project-add-modal > .window > .buttons > button.add"),
                close: document.querySelector(".project-add-modal > .window > .buttons > button.close"),
                inputValue: document.querySelector(".project-add-modal > .window > .choices > #project-input").value,
                priorityValue: document.querySelector(".project-add-modal > .window > .choices > #priority-select").value,
            }
            break;
        case "project-remove":
            this.projectRemove = {
                modal: document.querySelector(".project-remove-modal"),
                background: document.querySelector(".project-remove-modal > .background"),
                accept: document.querySelector(".project-remove-modal > .window > .buttons > button.accept"),
                close: document.querySelector(".project-remove-modal > .window > .buttons > button.close"),
            }
            break;*/
        case "todo-add":
            this.projectTodoAdd = {
                modal: document.querySelector(".project-add-item-modal"),
                background: document.querySelector(".project-add-item-modal > .background"),
                add: document.querySelector(".project-add-item-modal > .window > .buttons > button.add"),
                close: document.querySelector(".project-add-item-modal > .window > .buttons > button.close"),
                inputValue: document.querySelector(".project-add-item-modal > .window > .choices > #project-input").value,
                priorityValue: document.querySelector(".project-add-item-modal > .window > .choices > #priority-select").value,
            }
            break;
        /*
        case "settings":
            this.projectSettings = {
                modal: document.querySelector(".project-settings-modal"),
                background: document.querySelector(".project-settings-modal > .background"),
                confirm: document.querySelector(".project-settings-modal > .window > .buttons > button.confirm"),
                close: document.querySelector(".project-settings-modal > .window > .buttons > button.close"),
            }
            break;*/
    }

}


Element.prototype.List = function () {
    for (let value of Object.values(this)) {
        console.log(value);
    }
}
