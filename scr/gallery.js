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