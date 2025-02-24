document.addEventListener("DOMContentLoaded", function() {
    let footerPath = "footer/footer.html"; // Default path for index.html

    // Adjust the path if the script is running from pages/tool.html
    if (window.location.pathname.includes("/pages/")) {
        footerPath = "../footer/footer.html";
    }

    console.log("Loading footer from:", footerPath); // Debugging log

    fetch(footerPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log("Footer loaded successfully!"); // Debugging log
            document.body.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error("Error loading footer:", error));
});
