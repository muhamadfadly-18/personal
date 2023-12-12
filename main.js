var typed = new Typed('.text',{

    strings: ["backend dev","pelajar"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
// Add this script in your existing JavaScript file or in a new file
const mobileMenuToggle = document.getElementById('mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});
