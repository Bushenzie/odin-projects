
document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {
        location.href = `odin-projects/${item.childNodes[1].href}`;
    })
})