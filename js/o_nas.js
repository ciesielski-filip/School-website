function toggleContent(block, content, close, blur, container) {
    block.addEventListener("click", function() {
        content.classList.add("show-content")
        blur.classList.add("blur-active")
        container.classList.add("hide")
    })
    close.addEventListener("click", function() {
        content.classList.remove("show-content")
        blur.classList.remove("blur-active")
        container.classList.remove("hide")
    })
}
const block = document.querySelectorAll(".block")
const contents = document.querySelectorAll(".content")
const closes = document.querySelectorAll(".close")
const blur = document.querySelector(".blur")
const container = document.querySelector(".container_cards")
block.forEach((block, index) => {
    toggleContent(block, contents[index], closes[index], blur, container)
})

