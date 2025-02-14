
const buttons = document.querySelectorAll(".btt");
const counter = document.getElementsByClassName("number")[0];
let actualNumber, id;

buttons.forEach(element => {
    element.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("reverse")) {
            if (id) {
                clearInterval(id);
            }
            actualNumber = counter.innerText;
            id = setInterval(() => {
                actualNumber--;
                counter.innerHTML = actualNumber;
                verifyNumber();
            }, 1000);
        } else if (styles.contains("stop")) {
            if (id) {
                clearInterval(id);
            }
        } else {
            if (id) {
                clearInterval(id);
            }
            actualNumber = counter.innerText;
            id = setInterval(() => {
                actualNumber++
                counter.innerHTML = actualNumber;
                verifyNumber();
            }, 1000);
        }

        function verifyNumber() {
            if (counter.innerText > 0) {
                counter.style.color = "green";
            } else if (counter.innerText < 0) {
                counter.style.color = "red";
            } else {
                counter.style.color = "black";
            }
        }
    });
});

counter.addEventListener("")