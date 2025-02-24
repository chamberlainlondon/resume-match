document.addEventListener("DOMContentLoaded", function() {
    // Smooth fade-in effect
    const fadeInElements = document.querySelectorAll('.animated-fade-in');
    fadeInElements.forEach(element => {
        element.style.opacity = 1;
    });

    // Button click effect
    const button = document.querySelector('.btn');
    if (button) {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
        });
        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    }
});
