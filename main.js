const checkbox_t = document.querySelector(".checkbox_t")

checkbox_t.addEventListener('change', function() {
    document.documentElement.classList.toggle("dark-mode")
})