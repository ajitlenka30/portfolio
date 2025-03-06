document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Load theme from local storage
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.textContent = "🌞"; // Change icon to sun in light mode
    } else {
        themeToggle.textContent = "🌙"; // Default to moon in dark mode
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        // Save theme preference in local storage
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌞"; // Sun icon for light mode
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "🌙"; // Moon icon for dark mode
        }
    });
});
