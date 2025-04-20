import { throttle } from './helpers.js';
const parallaxElements = document.querySelectorAll('[data-parallax]');

const updateParallax = () => {
  const scrollTop = window.scrollY;
  const viewportHeight = window.innerHeight;

  parallaxElements.forEach(el => {
    const speed = parseFloat(el.dataset.parallax) || 0;
    const rect = el.getBoundingClientRect();
    const offsetTop = rect.top + scrollTop;

    const elementCenter = offsetTop + rect.height / 2;
    const viewportCenter = scrollTop + viewportHeight / 2;

    const distance = elementCenter - viewportCenter;

    const translateY = distance * -speed;

    el.style.transform = `translateY(${translateY}px)`;
  });
};

const onScroll = () => {
  requestAnimationFrame(updateParallax);
};

// window.addEventListener(
//   'scroll',
//   throttle(() => {
//     onScroll();
//   }, 40)
// );
window.addEventListener('scroll', onScroll);
window.addEventListener('resize', onScroll);
document.addEventListener('DOMContentLoaded', updateParallax);
