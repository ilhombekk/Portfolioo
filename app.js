// const button = document.querySelector("#theme-toggle-button")
// const body = document.querySelector("body")
// let title = document.querySelector(".site__header-title")

// button.addEventListener("click", function() {
//     body.classList.toggle(".color-dark");

// })

// let toggle = document.getElementById('toggle');
// let body = document.body;
// let title = document.querySelector('.site__header-title')

// toggle.addEventListener('change', function() {
//     body.classList.toggle('color-dark');
//     title.style.color = 'white'
// });

let toggle = document.getElementById('toggle');
let body = document.body;
let title = document.querySelector('.site__header-title')

toggle.addEventListener('change', function() {
    body.classList.toggle('color-dark');
    
    if (body.classList.contains('color-dark')) {
        title.style.color = 'white'; // qora rejimda
    } else {
        title.style.color = 'black'; // oq rejimda (yoki '')
    }
});