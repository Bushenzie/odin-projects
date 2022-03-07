MakeField(128, 128);

function MakeField(x, y) {
    const container = document.createElement("div");
    const containerSize = 512;
    container.classList.add("container");
    container.style.width = containerSize + "px";
    container.style.height = containerSize + "px";
    document.body.appendChild(container);

    for (let i = 0; i < x * y; i++) {
        let newEl = document.createElement("div");
        newEl.classList.add("item");
        newEl.style.width = containerSize / x + "px";
        newEl.style.height = containerSize / y + "px";
        newEl.addEventListener("dragenter", () => {
            newEl.classList.add("clicked");
        })
        container.appendChild(newEl);
    }
}