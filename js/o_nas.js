// document.addEventListener("DOMContentLoaded", function(event) {
//     let blocks = document.querySelectorAll(".block")
//     blocks.forEach(function(block, delay) {
//         block.classList.add("anim")
//         block.style.animationDelay = (delay * 0.5) + "s"
//         block.style.opacity = 1
//     })
// })

function toggleContent(block, content, close, container) {
    block.addEventListener("click", function() {
        content.classList.add("show-content")
        content.classList.add("margin_c")
        container.classList.add("margin_c")
    })
    close.addEventListener("click", function() {
        content.classList.remove("show-content")
        content.classList.remove("margin_c")
        container.classList.remove("margin_c")
    })
}

const block = document.querySelectorAll(".block")
const contents = document.querySelectorAll(".content")
const closes = document.querySelectorAll(".close")
const container = document.querySelector(".container_cards")

block.forEach((block, index) => {
    toggleContent(block, contents[index], closes[index], container)
})