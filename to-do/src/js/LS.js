import { Events } from "./app";

export class LS {
    constructor() {
        if (!localStorage.getItem("todos")) {
            this.todos = [];
            localStorage.setItem("todos", JSON.stringify(this.todos));
        } else {
            this.todos = JSON.parse(localStorage.getItem("todos"));
        }
    }

    Save(id, name, priority) {
        let item = {
            id: id,
            name: name,
            priority: priority
        }

        this.todos.push(item);
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    LoadALLTODOs(priority) {
        let tempArr = JSON.parse(localStorage.getItem("todos"));
        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i].priority === priority) {
                Events.AddTODO(tempArr[i].id, tempArr[i].name, tempArr[i].priority);
            }
        }
    }

    Remove(id, name, priority) {
        let tempArr = JSON.parse(localStorage.getItem("todos"));
        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i].priority === priority && tempArr[i].id === id && tempArr[i].name === name) {
                tempArr.splice(i, 1);
            }
        }
        localStorage.setItem("todos", JSON.stringify(tempArr));
    }

    Rename(id, name, priority, change) {
        let tempArr = JSON.parse(localStorage.getItem("todos"));
        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i].priority === priority && tempArr[i].id === id && tempArr[i].name === name) {
                tempArr[i].name = change;
            }
        }
        localStorage.setItem("todos", JSON.stringify(tempArr));
    }
}

export function GetCount(priority) {
    let high = 0;
    let medium = 0;
    let low = 0;
    let tempArr = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i].priority === priority) {
            if (tempArr[i].priority === "high") high++;
            if (tempArr[i].priority === "medium") medium++;
            if (tempArr[i].priority === "lows") low++;

        }
    }
    if (priority === "high") return high;
    if (priority === "medium") return medium++;
    if (priority === "low") return low++;
}