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

window.addEventListener("scroll", () => {
    if (Math.abs(header.getBoundingClientRect().top) >= header.getBoundingClientRect().height) {
        header.classList.add("header-roll");
    } else {
        header.classList.toggle("header-roll");
    }
})