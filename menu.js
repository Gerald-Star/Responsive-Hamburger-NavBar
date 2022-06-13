const hamburger = document.querySelector('hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links');

/* add event listener */
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
}
)
