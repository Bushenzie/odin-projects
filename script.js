
document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {
        location.href = `${item.childNodes[1].href}`;
    })
})