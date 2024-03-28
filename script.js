// Add this JavaScript to toggle the menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const container = document.querySelector('.container');

    menuToggle.addEventListener('click', function() {
        container.classList.toggle('open');
    });
});
