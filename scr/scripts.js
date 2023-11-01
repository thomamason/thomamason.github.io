'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const bcBanner = document.getElementById("bc-banner");
    const ytBanner = document.getElementById("yt-banner");
    const bcmediaDropdown = document.getElementById("bcmedia-dropdown");
    const ytmediaDropdown = document.getElementById("ytmedia-dropdown");
    const video = document.getElementById('jaiVideo');
    const loadingScreen = document.getElementById('loadingScreen');
    let lazyloadThrottleTimeout;

    function toggleDropdown(dropdown, state) {
        if (state === "flex") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "flex";
        }
    }

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

    bcBanner.addEventListener("click", function () {
        toggleDropdown(bcmediaDropdown, bcmediaDropdown.style.display);
    });

    ytBanner.addEventListener("click", function () {
        toggleDropdown(ytmediaDropdown, ytmediaDropdown.style.display);
    });

    document.body.addEventListener("touchstart", playVideo);
    initCloudinary();
});
