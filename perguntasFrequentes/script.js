const plusBt = document.querySelectorAll(".plusSym");

const answers = document.querySelectorAll(".answerContainer");

let count = 0;
answers.forEach((element) => {
    count++;
    element.classList.add(count);
});

count = 0;
plusBt.forEach(element => {
    count++;
    element.classList.add(count);
    element.addEventListener("click", () => {
        answers[element.classList[1]-1].classList.toggle("a");
    })
})

