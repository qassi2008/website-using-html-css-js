document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('opened');
  });

  // Initialize Typed.js on the .mutiple-text element
  var typed = new Typed(".mutiple-text", {
    strings: ["your web with grid layout!"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});