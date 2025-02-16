const personPhoto = document.getElementById("photo");
const personName = document.querySelector(".Pname");
const personJob = document.querySelector(".Pjob");
const personDescription = document.querySelector(".Pdescription");
const buttons = document.querySelectorAll(".btt");
const persons = [
    {
        photo:"imagens/homi01-a.webp",
        name:"Jonatas",
        work:"Frentista",
        description:"lsjkbsvbsj"
    },
    {
        photo:"imagens/homi02-a.webp",
        name:"Rafael",
        work:"WEB DESIGNER",
        description:"Sou muito louquinho"
    },
    {
        photo:"imagens/muie01.png",
        name:"Ester",
        work:"BARTENDER",
        description: "spjshis"
    }
]
let actualP = 0, randomN;

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
    personPhoto.src = persons[index]["photo"];
    personName.innerHTML = persons[index]["name"];
    personJob.innerHTML = persons[index]["work"];
    personDescription.innerHTML = persons[index]["description"];
}