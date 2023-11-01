'use strict';

document.addEventListener("DOMContentLoaded", function () {
  // Initialize your variables
  var dropdownIcon = document.getElementById("bc-banner");
  var mediaDropdown = document.getElementById("media-dropdown");
  var video = document.getElementById('jaiVideo');
  var loadingScreen = document.getElementById('loadingScreen');
  var lazyloadThrottleTimeout;
  dropdownIcon.addEventListener("click", function () {
    if (mediaDropdown.style.display === "flex") {
      mediaDropdown.style.display = "none";
    } else {
      mediaDropdown.style.display = "flex";
    }
  }); // Close the dropdown when clicking outside of it

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
      loadingScreen.style.display = 'none'; // Set opacity to 1 to trigger the fade-in effect

      video.style.opacity = 1;
      video.addEventListener('canplaythrough', function () {
        // Video has loaded, hide the loading screen and show the video
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

  function lazyLoadImages() {} // Your lazy load image code here
  // Attach event listeners


  document.body.addEventListener("touchstart", playVideo);
  initCloudinary();
  lazyLoadImages();
});