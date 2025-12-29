const button = document.querySelector(".dark")
const body = document.body
let title = document.querySelector(".site__header-title")

button.addEventListener("click", function() {
    body.classList.toggle("color-dark");
    
    if (body.classList.contains("color-dark")) {
        title.style.color = "white"
        button.textContent = "White"
    } else {
        title.style.color = "black"
        button.textContent = "Dark"
    }
})