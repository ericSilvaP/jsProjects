const aboutSection = document.querySelector(".aboutS");
const servicesSection = document.querySelector(".servicesS");
const toursSection = document.querySelector(".toursS");
const buttons = document.querySelectorAll("li");
const header = document.querySelector("header");

// window.scrollTo ---->> recebe algumas formas de parâmetro que permitem uma rolagem pela página
// getBoundingClientRect() ---->> retorna um objeto que contém diversas informações sobre as coordenadas sobre o objeto DOM

buttons.forEach(element => {
    let targettSection;

    if (element.classList.contains("about")) {
        targettSection = aboutSection;
    } else if (element.classList.contains("services")) {
        targettSection = servicesSection;
    } else if (element.classList.contains("tours")) {
        targettSection = toursSection;
    }
    
    element.addEventListener("click", () => {
        window.scrollTo({
            top: targettSection.getBoundingClientRect().top,
            behavior: "smooth"
        });
    })
})

// feito pelo chatGPT. Não consegui implementar sozinho. tava todo bugado :/
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const navItems = document.querySelectorAll("#menu li");

    function handleScroll() {
        if (window.scrollY > 50) { // Quando a rolagem passar de 50px
            header.classList.add("header-roll");
            navItems.forEach(item => item.classList.add("btt-roll"));
        } else {
            header.classList.remove("header-roll");
            navItems.forEach(item => item.classList.remove("btt-roll"));
        }
    }

    window.addEventListener("scroll", handleScroll);
});