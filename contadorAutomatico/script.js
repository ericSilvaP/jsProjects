
const buttons = document.querySelectorAll(".btt");
buttons.forEach(element => {
    element.addEventListener("click", (e) => {
        console.log(e.currentTarget.classList)
    });
});