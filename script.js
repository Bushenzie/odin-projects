
document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {
        window.open(`/${item.id}`, '_blank');
    })
})