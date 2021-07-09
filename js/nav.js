// Mobile Navigation
const hamburgerBtn = document.querySelector('.hamburger-btn');
const dynamicNavLinks = document.querySelector('.dynamic-nav-links-container');
const siteName = document.querySelector('.site-name');
const body = document.querySelector('body');

hamburgerBtn.addEventListener('click', ()=> {
    dynamicNavLinks.classList.toggle('nav-active');
    hamburgerBtn.classList.toggle('x');
    siteName.classList.toggle('dark');
    body.classList.toggle('overflow-y-hidden');
});