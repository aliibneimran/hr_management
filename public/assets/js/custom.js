document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-button");
    const leftbar = document.getElementById("leftbar");
    const toggleIcon = document.getElementById("toggle-icon");

    toggleButton.addEventListener("click", function() {
        if (leftbar.classList.contains("open")) {
            leftbar.classList.remove("open");
            toggleIcon.classList.remove("fa-times"); // Change to your close icon class
            toggleIcon.classList.add("fa-bars"); // Change to your open icon class
        } else {
            leftbar.classList.add("open");
            toggleIcon.classList.remove("fa-bars"); // Change to your open icon class
            toggleIcon.classList.add("fa-times"); // Change to your close icon class
        }
    });
});
