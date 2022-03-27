const body = document.querySelector('.page');
const menuButton = body.querySelector('.main-nav__toggle');

const closeMenu = (button) => {
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'открыть меню');

  const menu = button.parentElement;
  menu.classList.remove('main-nav--shown');
  body.classList.remove('page--lock');
};

const openMenu = (button) => {
  button.setAttribute('aria-expanded', 'true');
  button.setAttribute('aria-label', 'закрыть меню');

  const menu = button.parentElement;
  menu.classList.add('main-nav--shown');
  body.classList.add('page--lock');
};

const closeMenus = () => {
  const buttons = document.querySelectorAll('button[aria-expanded="true"]');
  buttons.forEach((button) => {
    closeMenu(button);
  });
};

const mainMenuButton = document.querySelector('.main-nav__toggle');
mainMenuButton.addEventListener('click', (evt) => {
  if (evt.currentTarget.getAttribute('aria-expanded') === 'true') {
    closeMenu(evt.currentTarget);
  } else {
    openMenu(evt.currentTarget);
  }
});

window.addEventListener('keyup', (evt) => {
  if (evt.code === 'Escape') {
    closeMenu(menuButton);
  }
});

body.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('page--lock')) {
    closeMenu(menuButton);
  }
});

export default closeMenus;
