const personPhoto = document.getElementById("photo");
const personName = document.querySelector(".Pname");
const personJob = document.querySelector(".Pjob");
const personDescription = document.querySelector(".Pdescription");
const buttons = document.querySelectorAll(".btt");
const persons = [
    {
        photo: "imagens/homi01-a.webp",
        name: "Jonatas",
        work: "Frentista",
        description: "Trabalhador dedicado e sempre pronto para atender os clientes com um sorriso. Gosta de mecânica e tem um grande conhecimento sobre veículos. Nos dias de folga, curte passeios de moto e uma boa conversa no posto de gasolina."
    },
    {
        photo: "imagens/homi02-a.webp",
        name: "Rafael",
        work: "Web Designer",
        description: "Criativo e apaixonado por design digital, Rafael transforma ideias em interfaces incríveis. Sempre atualizado com as últimas tendências, ele adora experimentar novas tecnologias e melhorar a experiência do usuário. Nos tempos livres, curte games e música eletrônica."
    },
    {
        photo: "imagens/muie01.png",
        name: "Ester",
        work: "Bartender",
        description: "Mestre na arte dos drinks, Ester sabe exatamente como animar qualquer ambiente. Sua criatividade vai além dos coquetéis, pois também adora decoração e eventos. Carismática e sempre pronta para ouvir boas histórias no balcão do bar."
    }
];

let actualP = 0, randomN;

document.addEventListener("DOMContentLoaded", () => updatePerson(0))

buttons.forEach(element => {
    element.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("back")) {
            if (actualP == 0) {
                actualP = persons.length-1;
            } else {
                actualP--;
            }
        } else if (styles.contains("next")) {
            if (actualP == persons.length-1) {
                actualP = 0;
            } else {
                actualP++;
            }
        } else if (styles.contains("random")) {
            while (randomN == actualP){
                randomN = Math.floor(Math.random() * persons.length);
            }
            actualP = randomN;
        }
        updatePerson(actualP);
    })
});

function updatePerson(index) {
    const container = document.getElementById("container");

    container.classList.add("fade-out");

    setTimeout(() => {
        personPhoto.src = persons[index]["photo"];
        personName.innerHTML = persons[index]["name"];
        personJob.innerHTML = persons[index]["work"];
        personDescription.innerHTML = persons[index]["description"];

        container.classList.remove("fade-out");
    }, 300)
}