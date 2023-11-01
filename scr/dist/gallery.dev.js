"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var linksContainer = document.getElementById("links-container");

  function loadLinks() {
    fetch("scr/links.txt").then(function (response) {
      return response.text();
    }).then(function (data) {
      var links = data.trim().split('\n');
      shuffleLinks(links);
    })["catch"](function (error) {
      return console.error("Error loading links:", error);
    });
  }

  function shuffleLinks(links) {
    for (var i = links.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var _ref = [links[j], links[i]];
      links[i] = _ref[0];
      links[j] = _ref[1];
    }

    displayLinks(links);
  }

  function displayLinks(links) {
    linksContainer.innerHTML = links.join("<br>"); // Use "<br>" for line breaks
  }

  loadLinks();
});
document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll("img.lazy");

  function lazyLoad() {
    images.forEach(function (image) {
      if (image.getBoundingClientRect().top < window.innerHeight && image.dataset.src) {
        image.src = image.dataset.src;
        image.dataset.src = ""; // Clear the data-src attribute to prevent double-loading

        image.classList.remove("lazy");
      }
    });
  } // Attach the lazyLoad function to the scroll event and call it once on page load


  window.addEventListener("scroll", lazyLoad);
  window.addEventListener("load", lazyLoad);
});