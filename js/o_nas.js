// document.addEventListener("DOMContentLoaded", function(event) {
//     let blocks = document.querySelectorAll(".block")
//     blocks.forEach(function(block, delay) {
//         block.classList.add("anim")
//         block.style.animationDelay = (delay * 0.5) + "s"
//         block.style.opacity = 1
//     })
// })

function toggleContent(block, content, close) {
    block.addEventListener("click", function() {
        content.classList.add("show-content")
    })
    close.addEventListener("click", function() {
        content.classList.remove("show-content")
    })
}

const block = document.querySelectorAll(".block")
const contents = document.querySelectorAll(".content")
const closes = document.querySelectorAll(".close")

block.forEach((block, index) => {
    toggleContent(block, contents[index], closes[index])
})