function toggleContent(block, content, close, blur) {
    block.addEventListener("click", function() {
        content.classList.add("show-content")
        blur.classList.add("blur-active")
    })
    close.addEventListener("click", function() {
        content.classList.remove("show-content")
        blur.classList.remove("blur-active")
    })
}

const block = document.querySelectorAll(".block")
const contents = document.querySelectorAll(".content")
const closes = document.querySelectorAll(".close")
const blur = document.querySelector(".blur")

block.forEach((block, index) => {
    toggleContent(block, contents[index], closes[index], blur)
})
