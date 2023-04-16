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


const icon = document.querySelector(".icon1")
const contactLink = document.querySelector(".contactLink1")
icon.addEventListener("click", function() {
    contactLink.classList.toggle("active_contactLink")
    console.log("tak")
})
