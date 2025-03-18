const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
document.getElementById("hamburger").addEventListener("click", function() {
    var sideMenu = document.getElementById("side-menu");
    sideMenu.classList.toggle("show");
});
