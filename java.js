function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
}

// Display the popup when the page loads
window.onload = function() {
    document.getElementById('popup-container').style.display = 'block';
};