let containerSize = 650;

const container = document.createElement("div");
const select = document.getElementById("field-select");

MakeBorder();


select.addEventListener("change", (e) => {
    switch (select.options[select.selectedIndex].value) {
        case "none":
            DeleteField();
            break;
        case "16x16":
            DeleteField()
            MakeField(16, 16);
            break;
        case "24x24":
            DeleteField()
            MakeField(24, 24);
            break;
        case "32x32":
            DeleteField()
            MakeField(32, 32);
            break;
        case "48x48":
            DeleteField()
            MakeField(48, 48);
            break;
        case "64x64":
            DeleteField()
            MakeField(64, 64);
            break;
    }

});


function MakeBorder() {
    container.classList.add("container");
    container.style.width = containerSize + "px";
    container.style.height = containerSize + "px";
    document.body.appendChild(container);
}

function MakeField(x, y) {


    for (let i = 0; i < x * y; i++) {
        let newEl = document.createElement("div");
        newEl.classList.add("block");
        newEl.style.width = containerSize / x + "px";
        newEl.style.height = containerSize / y + "px";
        newEl.addEventListener("dragover", () => {
            newEl.classList.add("clicked");
        })
        newEl.addEventListener("click", () => {
            newEl.classList.add("clicked");
        })
        container.appendChild(newEl);
    }
}

function DeleteField() {
    document.querySelectorAll(".block").forEach(block => {
        container.removeChild(block);
    })
}