const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.header__nav');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active')
})