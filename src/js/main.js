/* MENU */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');

/* MENU SHOW */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/* MENU HIDDEN */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/* HIDDEN MENU WHEN CLICK ON ITEM */

function linkAction() {
  navMenu.classList.remove('show-menu');
}

navLink.forEach(el => el.addEventListener('click', linkAction))

/* HOMWE SWIPER */

const homeSwiper = new Swiper('.home-swiper', {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

/* HEADER */

function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header')
  } else {
    header.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)


/* NEW SWIPER */

const newSwiper = new Swiper('.new-swiper', {
  centeredSlides: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  loop: true,
});


/* SCROLL SECTION*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/* SCROLLUP */

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  if (this.scrollY >= 460) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp)


/* SCROLL ANIMATION */

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal('.home-swiper, .new-swiper, .newsletter__container');
sr.reveal('.category__data, .trick__content, .footer__content', { interval: 100 });
sr.reveal('.about__data , .discount__img', { origin: 'left' });
sr.reveal('.about__img, .discount__data', { origin: 'right' });


/* CHANGE THEME*/

const body = document.body;
const btnDark = document.getElementById('dark-theme');
const btnSun = document.getElementById('sun-theme');

function darkTheme() {
  body.setAttribute('dark', '');
  btnDark.classList.toggle('theme-inactive');
  btnSun.classList.toggle('theme-inactive');
}

function sunTheme() {
  body.removeAttribute('dark');
  btnSun.classList.toggle('theme-inactive');
  btnDark.classList.toggle('theme-inactive');
}

btnDark.addEventListener('click', darkTheme);
btnSun.addEventListener('click', sunTheme);


