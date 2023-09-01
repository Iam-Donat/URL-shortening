// console.log('connected');

const navMenu = document.querySelector('.nav__bar');
const mobileNav = document.querySelector('.mobile__navbar');
const mobileNavLinks = document.querySelectorAll('.mobile-nav__link')

console.log(mobileNavLinks);



navMenu.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden')

});

mobileNavLinks.forEach(link => {

  link.addEventListener('click', () => {
    let isNavOpen = link.classList.contains('hidden');

    if (isNavOpen) {
      mobileNav.classList.remove('hidden')
    }

  })
})