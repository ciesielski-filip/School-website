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


function toggleContact(icon, contactLink) {
    icon.addEventListener("click", function() {
        contactLink.classList.toggle("active_contactLink")
        icon.classList.toggle("active_icon")
    })
}
const icons = document.querySelectorAll(".icon")
const contactLinks = document.querySelectorAll(".contactLink")
icons.forEach((icon, index) => {
    toggleContact(icon, contactLinks[index])
})

const copyPhone = document.querySelector(".copyPhone")
copyPhone.addEventListener("click", function() {
    const content = copyPhone.textContent
    navigator.clipboard.writeText(content)
})

const copyMail = document.querySelector(".copyMail")
copyMail.addEventListener("click", function() {
    const content = copyMail.textContent
    navigator.clipboard.writeText(content)
})