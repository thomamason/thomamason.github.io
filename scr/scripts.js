document.addEventListener("DOMContentLoaded", function () {
    const dropdownIcon = document.getElementById("bc-banner");
    const mediaDropdown = document.getElementById("media-dropdown");

    dropdownIcon.addEventListener("click", function () {
        if (mediaDropdown.style.display === "flex") {
            mediaDropdown.style.display = "none";
        } else {
            mediaDropdown.style.display = "flex";
        }
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target != dropdownIcon) {
            mediaDropdown.style.display = "none";
        }
    });
});
