export default () => {
  const html = document.documentElement;
  const body = document.querySelector('.page');
  const progress = body.querySelector('.progress');

  window.addEventListener('scroll', () => {
    const offset = body.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
    const height = html.scrollHeight - html.clientHeight;
    const value = (offset / height) * 100;
    progress.setAttribute('value', value.toString());
  });
};
