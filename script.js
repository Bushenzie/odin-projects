
document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {
        window.open(`https://bushenzie.github.io/odin-projects/${item.id}`, '_blank');
    })
})