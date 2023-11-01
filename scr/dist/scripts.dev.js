'use strict';

document.addEventListener("DOMContentLoaded", function () {
  var bcBanner = document.getElementById("bc-banner");
  var ytBanner = document.getElementById("yt-banner");
  var bcmediaDropdown = document.getElementById("bcmedia-dropdown");
  var ytmediaDropdown = document.getElementById("ytmedia-dropdown");
  var video = document.getElementById('jaiVideo');
  var loadingScreen = document.getElementById('loadingScreen');
  var lazyloadThrottleTimeout;

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
    var cl = cloudinary.Cloudinary["new"]({
      cloud_name: '<Cloud Name>'
    });
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