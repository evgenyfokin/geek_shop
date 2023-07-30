const closeMenu = document.querySelector('.close');
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-img');

menuIcon.addEventListener('click', () => {
    menu.style.display = 'block';
});
closeMenu.addEventListener('click', () => {
    menu.style.display = 'none';
});
