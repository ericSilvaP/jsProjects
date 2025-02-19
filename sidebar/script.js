const menu = document.getElementById("container");
const closeBt = document.getElementById("close");
const sidebar = document.getElementById("sidebar");

menu.addEventListener("click", toggleSidebar)

closeBt.addEventListener("click", toggleSidebar)

function toggleSidebar() {
    sidebar.classList.toggle("state");
    if (sidebar.classList.contains("state")) {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "flex";
    }
}