'use strict';

document.addEventListener("DOMContentLoaded", function () {
    // Initialize your variables
    const bcBanner = document.getElementById("bc-banner");
    const mediaDropdown = document.getElementById("media-dropdown");
    const video = document.getElementById('jaiVideo');
    const loadingScreen = document.getElementById('loadingScreen');
    let lazyloadThrottleTimeout;

    bcBanner.addEventListener("click", function () {
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

    function playVideo() {
        if (!video.paused) {
            video.play();
        } else {
            video.style.display = 'block';
            loadingScreen.style.display = 'none';

            video.style.opacity = 1;

            video.addEventListener('canplaythrough', function () {
                loadingScreen.style.display = 'none';
                video.play();
            });
        }
    }

    function initCloudinary() {
        const cl = cloudinary.Cloudinary.new({ cloud_name: '<Cloud Name>' });
        cl.responsive();
    }
 
    document.body.addEventListener("touchstart", playVideo);
    initCloudinary();
    lazyLoadImages();
});