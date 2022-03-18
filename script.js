
document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {
        window.open(`${document.URL}${item.childNodes[1].href}`, '_blank');
    })
})