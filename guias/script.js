// array com as abas
const tabs = [
    {
        title: "História",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, similique. Perferendis sit reiciendis corrupti repellat aliquam animi facere deserunt consequatur quas earum! Dolore nam sapiente assumenda voluptatum itaque iure sit."
    },
    {
        title: "Visão",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, similique. Perferendis sit reiciendis corrupti repellat aliquam animi facere deserunt consequatur quas earum! Dolore nam sapiente assumenda voluptatum itaque iure sit."
    },
    {
        title: "Objetivos",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, similique. Perferendis sit reiciendis corrupti repellat aliquam animi facere deserunt consequatur quas earum! Dolore nam sapiente assumenda voluptatum itaque iure sit."
    }
];

// elementos html
const tabsContainer = document.querySelector(".tabs");
const titleH4 = document.querySelector("h4");
const text = document.querySelector(".text > p")

function changeContent(element) {
    titleH4.innerText = `${element.title}`;
    text.innerText = `${element.text}`;
}

window.addEventListener("DOMContentLoaded", () => 
    {
        let tabsX = Array.from(tabs.entries()).map(([key, element]) => {
            if (key == 0) {
                changeContent(element);
                return `<div class="tab tabSelected" id="${key}">${element.title}</div>`;
            } else {
                return `<div class="tab" id="${key}">${element.title}</div>`;
            }
        });
        tabsX = tabsX.join("");
        tabsContainer.innerHTML = tabsX;

        const tabButtons = document.querySelectorAll(".tab")
        let tabsSelected;

        tabButtons.forEach((element) => {
            element.addEventListener("click", () => {
                tabsSelected = document.querySelector(".tabSelected");
                tabsSelected.classList.remove("tabSelected");
                element.classList.add("tabSelected");

                console.log(parseInt(element.id));
                changeContent(tabs[parseInt(element.id)]);
            });
        });
});

