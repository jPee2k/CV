import '@popperjs/core';
import 'regenerator-runtime/runtime.js';
import '../scss/index.scss';

import { closeMenu } from './menu.js';
import runProgressBarApp from './progress.js';
import runScrollApp from './scroll.js';

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.no-js');
  elements.forEach((el) => {
    el.classList.remove('no-js');
  });

  const buttons = document.querySelectorAll('button[aria-expanded="true"]');
  buttons.forEach((button) => {
    closeMenu(button);
  });
});

runProgressBarApp();
runScrollApp();
