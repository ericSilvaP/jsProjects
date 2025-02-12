const counter = document.getElementById("number");
document.getElementById("minus").addEventListener("click", function(){increaseCounter(-1);});
document.getElementById("reset").addEventListener("click", function() {increaseCounter(0);});
document.getElementById("plus").addEventListener("click", function() {increaseCounter(1);});

function increaseCounter(n) {
    if (n){
        counter.textContent = parseInt(counter.innerText) + n;
    } else {
        counter.textContent = 0;
    }

    if (counter.textContent > 0) {
        counter.style.color = "green";
    } else if (counter.textContent < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
}

