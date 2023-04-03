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

toggleContent(document.querySelector(".block1"), document.querySelector(".content1"), document.querySelector(".close1"))
toggleContent(document.querySelector(".block2"), document.querySelector(".content2"), document.querySelector(".close2"))
toggleContent(document.querySelector(".block3"), document.querySelector(".content3"), document.querySelector(".close3"))
toggleContent(document.querySelector(".block4"), document.querySelector(".content4"), document.querySelector(".close4"))
toggleContent(document.querySelector(".block5"), document.querySelector(".content5"), document.querySelector(".close5"))