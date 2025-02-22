document.addEventListener("DOMContentLoaded", () => {
    // Add fade-in animation to elements with the 'animated-fade-in' class
    document.querySelectorAll(".animated-fade-in").forEach(element => {
        element.style.opacity = 0;
        element.style.transition = "opacity 1s ease-in-out";
        setTimeout(() => {
            element.style.opacity = 1;
        }, 200);
    });

    // Add button hover animation
    document.querySelectorAll(".animated-button").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.05)";
            button.style.transition = "transform 0.2s ease-in-out";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });
});
