document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    
    // Apply theme from local storage
    function applyTheme(theme) {
        if (theme === "dark") {
            body.classList.add("dark");
        } else {
            body.classList.remove("dark");
        }
    }

    // Retrieve theme from localStorage or default to light
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    // Toggle theme when button is clicked
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.checked = savedTheme === "dark";

        themeToggle.addEventListener("change", function () {
            const newTheme = this.checked ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            applyTheme(newTheme);
        });
    }
});
