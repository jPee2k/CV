import i18next from 'i18next';
import runProgressBarApp from './progress.js';
import runScrollApp from './scroll.js';
import closeMenus from './menu.js';
import { languageHandler, renderTextContent } from './lang.js';
import translations from './locale/index.js';

const languages = ['en', 'ua', 'ru'];

const app = async () => {
  const defaultLanguage = 'ru';

  const i18n = i18next.createInstance();
  await i18n.init({
    lng: defaultLanguage,
    debug: false,
    resources: translations,
  });

  languageHandler(i18n, renderTextContent, languages);
  renderTextContent(i18n);

  runProgressBarApp();
  runScrollApp();
};

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.no-js');
  elements.forEach((el) => {
    el.classList.remove('no-js');
  });

  closeMenus();
});

export default app;
