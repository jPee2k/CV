export default () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      const section = document.querySelector(evt.target.getAttribute('href'));
      // section.scrollIntoView({ behavior: 'smooth' });
      // or
      const yOffset = -50;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
};
