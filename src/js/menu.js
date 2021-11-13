export const closeMenu = (button) => {
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'открыть меню');

  const menu = button.parentElement;
  menu.classList.remove('main-nav--shown');
};

export const openMenu = (button) => {
  button.setAttribute('aria-expanded', 'true');
  button.setAttribute('aria-label', 'закрыть меню');

  const menu = button.parentElement;
  menu.classList.add('main-nav--shown');
};

const mainMenuButton = document.querySelector('.main-nav__toggle');
mainMenuButton.addEventListener('click', (evt) => {
  if (evt.currentTarget.getAttribute('aria-expanded') === 'true') {
    closeMenu(evt.currentTarget);
  } else {
    openMenu(evt.currentTarget);
  }
});
