// document.addEventListener("DOMContentLoaded", function(event) {
//     let blocks = document.querySelectorAll(".block")
//     blocks.forEach(function(block, delay) {
//         block.classList.add("anim")
//         block.style.animationDelay = (delay * 0.5) + "s"
//         block.style.opacity = 1
//     })
// })


let block1 = document.querySelector(".block1")
let content1 = document.querySelector(".content1")

block1.addEventListener("click", function() {
    content1.classList.add("show-content")
})

content1.addEventListener("click", function() {
    content1.classList.remove("show-content")
})