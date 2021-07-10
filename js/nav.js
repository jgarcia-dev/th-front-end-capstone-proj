// Mobile Navigation
const hamburgerBtn = document.querySelector('.hamburger-btn');
const siteLink = document.querySelector('.site-link');
const navBarLinks = document.querySelector('.nav-bar-links');
const body = document.querySelector('body');

hamburgerBtn.addEventListener('click', ()=> {
    siteLink.classList.toggle('dark');
    navBarLinks.classList.toggle('show-nav-bar-links');
    hamburgerBtn.classList.toggle('x');
    body.classList.toggle('suppress-y-scroll');
});