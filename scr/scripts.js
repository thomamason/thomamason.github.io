// 'use strict';

// document.addEventListener("DOMContentLoaded", function () {
//     const dropdownIcon = document.getElementById("bc-banner");
//     const mediaDropdown = document.getElementById("media-dropdown");

//     dropdownIcon.addEventListener("click", function () {
//         if (mediaDropdown.style.display === "flex") {
//             mediaDropdown.style.display = "none";
//         } else {
//             mediaDropdown.style.display = "flex";
//         }
//     });

//     // Close the dropdown when clicking outside of it
//     window.addEventListener("click", function (event) {
//         if (event.target != dropdownIcon) {
//             mediaDropdown.style.display = "none";
//         }
//     });
// });


// function playVideo() {
//   const video = document.getElementById('jaiVideo');
//   const loadingScreen = document.getElementById('loadingScreen');

//   if (!video.paused) {
//       video.play();
//   } else {
//       video.style.display = 'block';
//       loadingScreen.style.display = 'none';

//       // Set opacity to 1 to trigger the fade-in effect
//       video.style.opacity = 1;

//       video.addEventListener('canplaythrough', function () {
//           // Video has loaded, hide the loading screen and show the video
//           loadingScreen.style.display = 'none';
//           video.play();
//       });
//   }
// }


// function initCloudinary() {
//     const cl = cloudinary.Cloudinary.new({ cloud_name: '<Cloud Name>' });
//     cl.responsive();
// }

// function lazyLoadImages() {
//     if ("IntersectionObserver" in window) {
//         const lazyloadImages = document.querySelectorAll(".lazy");
//         const imageObserver = new IntersectionObserver(function (entries, observer) {
//             entries.forEach(function (entry) {
//                 if (entry.isIntersecting) {
//                     const image = entry.target;
//                     image.src = image.dataset.src;
//                     image.classList.remove("lazy");
//                     imageObserver.unobserve(image);
//                 }
//             });
//         });

//         lazyloadImages.forEach(function (image) {
//             imageObserver.observe(image);
//         });
//     } else {
//         const lazyloadImages = document.querySelectorAll(".lazy");

//         function lazyload() {
//             if (lazyloadThrottleTimeout) {
//                 clearTimeout(lazyloadThrottleTimeout);
//             }

//             lazyloadThrottleTimeout = setTimeout(function () {
//                 const scrollTop = window.pageYOffset;
//                 lazyloadImages.forEach(function (img) {
//                     if (img.offsetTop < (window.innerHeight + scrollTop)) {
//                         img.src = img.dataset.src;
//                         img.classList.remove('lazy');
//                     }
//                 });
//                 if (lazyloadImages.length === 0) {
//                     document.removeEventListener("scroll", lazyload);
//                     window.removeEventListener("resize", lazyload);
//                     window.removeEventListener("orientationChange", lazyload);
//                 }
//             }, 20);
//         }

//         let lazyloadThrottleTimeout;
//         document.addEventListener("scroll", lazyload);
//         window.addEventListener("resize", lazyload);
//         window.addEventListener("orientationChange", lazyload);
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     document.body.addEventListener("touchstart", playVideo);
//     initCloudinary();
// });

// document.addEventListener("DOMContentLoaded", lazyLoadImages);

'use strict';

document.addEventListener("DOMContentLoaded", function () {
    // Initialize your variables
    const dropdownIcon = document.getElementById("bc-banner");
    const mediaDropdown = document.getElementById("media-dropdown");
    const video = document.getElementById('jaiVideo');
    const loadingScreen = document.getElementById('loadingScreen');
    let lazyloadThrottleTimeout;

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

    function playVideo() {
        if (!video.paused) {
            video.play();
        } else {
            video.style.display = 'block';
            loadingScreen.style.display = 'none';

            // Set opacity to 1 to trigger the fade-in effect
            video.style.opacity = 1;

            video.addEventListener('canplaythrough', function () {
                // Video has loaded, hide the loading screen and show the video
                loadingScreen.style.display = 'none';
                video.play();
            });
        }
    }

    function initCloudinary() {
        const cl = cloudinary.Cloudinary.new({ cloud_name: '<Cloud Name>' });
        cl.responsive();
    }

    function lazyLoadImages() {
        // Your lazy load image code here
    }

    // Attach event listeners
    document.body.addEventListener("touchstart", playVideo);
    initCloudinary();
    lazyLoadImages();
});
