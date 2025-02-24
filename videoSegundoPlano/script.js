const pauseButton = document.getElementsByClassName("ps-bt")[0];
const pauseDiv = document.getElementById("pause-button");
const videoContainer = document.getElementsByClassName("video-container")[0];

pauseDiv.addEventListener("click", () => {
    pauseButton.classList.toggle("pause-active");
    if (pauseButton.classList.contains("pause-active")) {
        videoContainer.pause();
    } else {
        videoContainer.play()
    }
});