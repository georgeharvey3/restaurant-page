import populateHome from './home.js';
import populateAbout from './about.js';
import populateMenu from './menu.js';
import populateContact from './contact.js';

let pageContentDiv = document.getElementById("page-content")

populateHome(pageContentDiv);

let logoBox = document.getElementById('logo-box');
logoBox.addEventListener('click', () => {
    populateHome(pageContentDiv);
});

let aboutButton = document.getElementById('about');
aboutButton.addEventListener('click', () => {
    populateAbout(pageContentDiv);
});

let menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => {
    populateMenu(pageContentDiv);
});

let contactButton = document.getElementById('contact');
contactButton.addEventListener('click', () => {
    populateContact(pageContentDiv);
});
