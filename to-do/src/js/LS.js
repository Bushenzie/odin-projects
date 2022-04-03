import { Events } from "./app";


export class LS {
    constructor() {
        this.SetDefault();
    }
}


LS.prototype.SetDefault = function () {
    if (!localStorage.getItem("todos")) {
        this.todos = [];
        localStorage.setItem("todos", this.todos);
    } else {
        this.todos = localStorage.getItem("todos");
    }

    if (!localStorage.getItem("projects")) {
        this.projects = [];
        localStorage.setItem("projects", this.projects);
    } else {
        this.projects = localStorage.getItem("projects");
    }
}


LS.prototype.Parse = function (item) {
    return JSON.stringify(item);
}

LS.prototype.Unparse = function (item) {
    return JSON.parse(item);
}

LS.prototype.LoadAllTODOs = function () {
    let raw = localStorage.getItem("todos");
    let parsed = this.Unparse(raw);
    console.log(parsed);
    parsed.forEach(todo => {
        Events.AddTODO(todo.name, todo.id, todo.priority);
    })
}

LS.prototype.Get = function (str) {
    return localStorage.getItem(str);
}


LS.prototype.Save = function (name, priority, id, type, project) {
    let item = {
        name: name,
        id: id,
        priority: priority,
        project: project,
    }

    if (type === "todo") {
        //this.todos = this.Unparse(this.Get("todos"));
        this.todos.push(item);
        localStorage.setItem("todos", this.Parse(this.todos));
    }
    else if (type === "project") {
        //this.projects = this.Unparse(this.Get("projects"));
        this.projects.push(item);
        localStorage.setItem("projects", this.Parse(this.projects));
    }
}
