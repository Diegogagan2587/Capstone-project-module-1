function displayMobileMenu() {
  const topNavBar = document.querySelector('#nav-bar-1');
  const mainNavBar = document.querySelector('#nav-bar-2');
  const exitContainer = document.querySelector('#li-exit');
  exitContainer.classList.remove('hidden');
  topNavBar.classList.add('show-mobile-menu-top');
  mainNavBar.classList.add('show-mobile-menu-main');
}

function closeMobileMenu() {
  const topNavBar = document.querySelector('#nav-bar-1');
  const mainNavBar = document.querySelector('#nav-bar-2');
  const exitContainer = document.querySelector('#li-exit');
  topNavBar.classList.remove('show-mobile-menu-top');
  mainNavBar.classList.remove('show-mobile-menu-main');
  exitContainer.classList.add('hidden');
}

const hamburgerButton = document.querySelector('#hamburger-button');
const closeMobileButton = document.querySelector('#exitMobile');
const navListAnchors = document.getElementById('nav-bar').querySelectorAll('li');
hamburgerButton.addEventListener('click', displayMobileMenu);
closeMobileButton.addEventListener('click', closeMobileMenu);

for (let i = 0; i < navListAnchors.length; i += 1) {
  navListAnchors[i].addEventListener('click', closeMobileMenu);
}