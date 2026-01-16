const navBar = document.querySelector('#nav-bar');
const navButton = document.querySelector('#ham-btn');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});