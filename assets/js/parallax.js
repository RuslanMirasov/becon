const parallaxElements = document.querySelectorAll('[data-parallax]');

const updateParallax = () => {
  const scrollTop = window.scrollY;
  const viewportHeight = window.innerHeight;

  parallaxElements.forEach(el => {
    const speed = parseFloat(el.dataset.parallax) || 0;
    const rect = el.getBoundingClientRect();

    const elTop = rect.top;
    const elBottom = rect.bottom;

    if (elTop >= 0 && elBottom <= viewportHeight) {
      el.style.transform = `translate(-50%, 0px)`;
      return;
    }

    const offsetTop = rect.top + scrollTop;
    const elementCenter = offsetTop + rect.height / 2;
    const viewportCenter = scrollTop + viewportHeight / 2;
    const distance = elementCenter - viewportCenter;

    const translateY = distance * -speed;

    el.style.transform = `translate(-50%, ${translateY}px)`;
  });
};

const onScroll = () => {
  requestAnimationFrame(updateParallax);
};

window.addEventListener('scroll', onScroll);
window.addEventListener('resize', onScroll);
document.addEventListener('DOMContentLoaded', updateParallax);
