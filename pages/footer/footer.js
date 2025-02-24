document.addEventListener("DOMContentLoaded", function() {
    let footerPath = "footer/footer.html"; // Default path for index.html

    // Adjust the path if the script is running from pages/tool.html
    if (window.location.pathname.includes("/pages/")) {
        footerPath = "../footer/footer.html";
    }

    fetch(footerPath)
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error("Error loading footer:", error));
});
