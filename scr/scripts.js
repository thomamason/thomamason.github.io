'use strict';

document.addEventListener("DOMContentLoaded", function () {
    // Initialize your variables
    const bcBanner = document.getElementById("bc-banner");
    const ytBanner = document.getElementById("yt-banner");
    const bcmediaDropdown = document.getElementById("bcmedia-dropdown");
    const ytmediaDropdown = document.getElementById("ytmedia-dropdown");
    const video = document.getElementById('jaiVideo');
    const loadingScreen = document.getElementById('loadingScreen');
    let lazyloadThrottleTimeout;

    bcBanner.addEventListener("click", function () {
        if (bcmediaDropdown.style.display === "flex") {
            bcmediaDropdown.style.display = "none";
        } else {
            bcmediaDropdown.style.display = "flex";
        }
    });

    ytBanner.addEventListener("click", function () {
        if (ytmediaDropdown.style.display === "flex") {
            ytmediaDropdown.style.display = "none";
        } else {
            ytmediaDropdown.style.display = "flex";
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