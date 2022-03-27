export const languageHandler = (i18n, render, languages = []) => {
  const selector = document.querySelector('[data-lng]');
  selector.addEventListener('change', (evt) => {
    const value = evt.target.value.trim();
    if (languages.includes(value)) {
      document.documentElement.setAttribute('lang', value);
      i18n.changeLanguage(value).then(() => render(i18n));
    }
  });
};

export const renderTextContent = (i18n) => {
  const i18nContents = document.querySelectorAll('[data-i18n]');
  i18nContents.forEach((item) => {
    item.innerHTML = i18n.t(item.dataset.i18n);
  });

  const i18nAttrs = document.querySelectorAll('[data-i18n-attr]');
  i18nAttrs.forEach((item) => {
    const path = item.dataset.i18nAttr;
    const attr = path.split('.').slice(-1)[0];
    if (attr) {
      item.setAttribute(attr, i18n.t(path));
    }
  });
};
