
function changeColor() {
    const background = document.getElementsByTagName('body');
    const colorText = document.getElementById("colorName");
    const colors = ["red", "blue", "yellow", "gray", "white", "lightblue", "purple", "green", "ligthgreen", "black"];
    let n = randint(0,9);
    let color = colors[n];
    background[0].style.backgroundColor = color;
    colorText.innerHTML = color;
}

function randint(min, max) {
    return parseInt(Math.floor(Math.random()*(max-min+1)));
}