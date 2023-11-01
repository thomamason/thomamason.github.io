document.addEventListener("DOMContentLoaded", function() {
    const linksContainer = document.getElementById("links-container");


    function loadLinks() {
        fetch("scr/links.txt")
            .then(response => response.text())
            .then(data => {
                const links = data.trim().split('\n');
                shuffleLinks(links);
            })
            .catch(error => console.error("Error loading links:", error));
    }

    function shuffleLinks(links) {
        for (let i = links.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [links[i], links[j]] = [links[j], links[i]];
        }

        displayLinks(links);
    }

    function displayLinks(links) {
        linksContainer.innerHTML = links.join("<br>"); // Use "<br>" for line breaks
    }

    loadLinks();
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img.lazy");

    function lazyLoad() {
        images.forEach(function(image) {
            if (image.getBoundingClientRect().top < window.innerHeight && image.dataset.src) {
                image.src = image.dataset.src;
                image.dataset.src = ""; // Clear the data-src attribute to prevent double-loading
                image.classList.remove("lazy");
            }
        });
    }

    // Attach the lazyLoad function to the scroll event and call it once on page load
    window.addEventListener("scroll", lazyLoad);
    window.addEventListener("load", lazyLoad);
});
