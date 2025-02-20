const modalBt = document.getElementById("modalBt");
const modal = document.getElementById("modal");
const closeBt = document.getElementsByClassName("close")[0];

modalBt.addEventListener("click", () => {
    modal.style.display = "block";
})

closeBt.addEventListener("click", () => {
    modal.style.display = "none";
})

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
})