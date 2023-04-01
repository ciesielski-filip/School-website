// document.addEventListener("DOMContentLoaded", function(event) {
//     let blocks = document.querySelectorAll(".block")
//     blocks.forEach(function(block, delay) {
//         block.classList.add("anim")
//         block.style.animationDelay = (delay * 0.5) + "s"
//         block.style.opacity = 1
//     })
// })


let block1 = document.querySelector(".block1")
let content1 = document.querySelector(".content:nth-child(1)")
block1.addEventListener("click", function() {
    content1.classList.add("show-content")
})
content1.addEventListener("click", function() {
    content1.classList.remove("show-content")
})

let block2 = document.querySelector(".block2")
let content2 = document.querySelector(".content:nth-child(2)")
block2.addEventListener("click", function() {
    content2.classList.add("show-content")
})
content2.addEventListener("click", function() {
    content2.classList.remove("show-content")
})