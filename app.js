// console.log('connected');

const navMenu = document.querySelector('.nav__bar');
const mobileNav = document.querySelector('.mobile__navbar');


navMenu.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden')

})