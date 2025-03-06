// Theme Toggle
const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

// Check for saved user preference
if (localStorage.getItem("theme") === "light") {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    themeSwitch.checked = false;
} else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    themeSwitch.checked = true;
}

// Toggle theme on switch
themeSwitch.addEventListener("change", () => {
    if (themeSwitch.checked) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
    }
});