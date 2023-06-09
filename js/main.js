const checkbox_t = document.querySelector(".checkbox_t");
const darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

if (darkModeEnabled === true) {
    document.documentElement.classList.add("dark-mode");
    checkbox_t.checked = true;
}

checkbox_t.addEventListener('change', function() {
    document.documentElement.classList.toggle("dark-mode");
    localStorage.setItem("darkModeEnabled", checkbox_t.checked);
});

window.addEventListener("load", function() {
    let loader = document.querySelector(".loader");
    loader.style.display = "none";
});