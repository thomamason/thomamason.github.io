'use strict';

document.addEventListener("DOMContentLoaded", function () {
  // Initialize your variables
  var bcBanner = document.getElementById("bc-banner");
  var ytBanner = document.getElementById("yt-banner");
  var bcmediaDropdown = document.getElementById("bcmedia-dropdown");
  var ytmediaDropdown = document.getElementById("ytmedia-dropdown");
  var video = document.getElementById('jaiVideo');
  var loadingScreen = document.getElementById('loadingScreen');
  var lazyloadThrottleTimeout;
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
    var cl = cloudinary.Cloudinary["new"]({
      cloud_name: '<Cloud Name>'
    });
    cl.responsive();
  }

  document.body.addEventListener("touchstart", playVideo);
  initCloudinary();
  lazyLoadImages();
});