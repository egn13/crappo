const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.header__nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navList.classList.toggle('active')
})