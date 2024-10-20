const navItems = document.querySelector('.nav-items');
const openNavButton = document.querySelector('#open-nav-button');
const closeNavButton = document.querySelector('#close-nav-button');

const openNav = () => {
    navItems.style.display = 'flex';
    openNavButton.style.display = 'none';
    closeNavButton.style.display = 'inline-block';
}

const closeNav = () => {
    navItems.style.display = 'none';
    openNavButton.style.display = 'inline-block';
    closeNavButton.style.display = 'none';
}

openNavButton.addEventListener('click', openNav);
closeNavButton.addEventListener('click', closeNav);
