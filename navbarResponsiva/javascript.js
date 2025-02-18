const menu = document.getElementById("menu-icon");
const nav = document.getElementsByTagName("nav")[0];

menu.addEventListener("click", () => {
    let navDisplay = getComputedStyle(nav);
    navDisplay = navDisplay.display;
    
    if (navDisplay == "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
    nav.classList.toggle("nav-change");
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        nav.style.display = "block";
    } 
})