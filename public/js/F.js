const container = document.querySelector('.image-container');
const scrollIcon = document.querySelector('.scroll-icon');

scrollIcon.addEventListener('click', () => {
  container.scrollLeft += container.clientWidth;
});
