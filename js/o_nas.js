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


//Wyskakujące okienko z informacją o skopiowaniu tekstu
function notificationCopy(copy, notification) {
    copy.addEventListener("click", function() {
        notification.classList.toggle("active-notification")
    })
}
const copyPhone = document.querySelector(".copyPhone")
const notificationPhone = document.querySelector(".notificationPhone")
notificationCopy(copyPhone, notificationPhone)

const copyMail = document.querySelector(".copyMail")
const notificationMail = document.querySelector(".notificationMail")
notificationCopy(copyMail, notificationMail)


//Funkcje odpowiadająca za kopiowanie tekstu 
copyPhone.addEventListener("click", function() {
    const content = copyPhone.textContent
    navigator.clipboard.writeText(content)
})
copyMail.addEventListener("click", function() {
    const content = copyMail.textContent
    navigator.clipboard.writeText(content)
})


//Counter
const counterBlock = document.querySelector(".counterBlock")

counterBlock.addEventListener("click", function() {
    //Nauczyciele//
    const target1 = 1000
    const counter1 = document.querySelector(".counter1")
    let count1 = 800 
    
    const interval1 = setInterval(() => {
        count1++
        counter1.innerHTML = count1
        if(count1 === target1) {
            clearInterval(interval1)
        }
    }, 10)

    //Uczniowie//
    const target2 = 1000
    const counter2 = document.querySelector(".counter2")
    let count2 = 800 
    
    const interval2 = setInterval(() => {
        count2++
        counter2.innerHTML = count2
        if(count2 === target2) {
            clearInterval(interval2)
        }
    }, 10)

    //Absolwenci//
    const target3 = 1000
    const counter3 = document.querySelector(".counter3")
    let count3 = 800 
    
    const interval3 = setInterval(() => {
        count3++
        counter3.innerHTML = count3
        if(count3 === target3) {
            clearInterval(interval3)
        }
    }, 10)

    //Lata z nami//
    const target4 = 1000
    const counter4 = document.querySelector(".counter4")
    let count4 = 800 
    
    const interval4 = setInterval(() => {
        count4++
        counter4.innerHTML = count4
        if(count4 === target4) {
            clearInterval(interval4)
        }
    }, 10)
})