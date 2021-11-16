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
      window.scrollTo({top: y, behavior: 'smooth'});
    });
  });

  /* --- animate elements --- */
  const animatedElements = document.querySelectorAll('[data-animation-state="hidden"]');
  if (animatedElements.length === 0) {
    return;
  }

  const getCurrentYOffset = (el) => {
    const {top} = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return top + scrollTop;
  };

  const animateOnScroll = () => {
    animatedElements.forEach((el) => {
      const elHeight = el.offsetHeight;
      const elTopOffset = getCurrentYOffset(el);
      const windowHeight = document.documentElement.clientHeight || window.innerHeight;
      const constOffset = 6;

      let startPoint = windowHeight - elHeight / constOffset;
      if (elHeight > windowHeight) {
        startPoint = windowHeight - windowHeight / constOffset;
      }

      if ((window.pageYOffset > elTopOffset - startPoint) && window.pageYOffset < (elTopOffset + elHeight)) {
        el.dataset.animationState = 'shown';
      }
    });
  };

  setTimeout(() => {
    animateOnScroll();
  }, 500);

  window.addEventListener('scroll', animateOnScroll);
};
