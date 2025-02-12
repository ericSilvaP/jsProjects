let id = null;

function move() {
    const element = document.getElementById("anim");
    const conteiner = document.getElementById("conteiner");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos==conteiner.offsetHeight-element.offsetHeight){
            clearInterval(id);
        } else {
            pos += 5;
            element.style.top = pos+"px";
            element.style.left = pos+"px";
        }
    }
}

function counter() {
    const countDiv = document.getElementById("contador");
    let countN = parseInt(countDiv.innerText)-1;
    clearInterval(id);
    id = setInterval(count, 200);
    function count() {
        if (countN == 0) {
            countDiv.innerHTML = "Fim da contagem";
            clearInterval(id);
        } else {
            countDiv.innerHTML = countN;
            countN--;
        }
    }
}

const element = document.getElementById("anim");
const but = document.getElementById("a");
but.innerHTML = element.offsetHeight;