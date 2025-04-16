const sliders = document.querySelectorAll('[data-slider]');
const heroSlider = document.querySelector('.swiper--hero');
const heroSliderThumb = document.querySelector('.swiper--thumb');

export const slidersInit = () => {
  if (sliders.length > 0) {
    sliders.forEach(sliderWrapper => {
      const swiper = sliderWrapper.querySelector('.swiper');
      const { effect = 'slide', speed = '600' } = sliderWrapper.dataset;
      const options = {
        allowTouchMove: true,
        effect,
        speed,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
      };
      new Swiper(swiper, options);
    });
  }

  if (heroSlider) {
    const heroSwiperThumb = new Swiper(heroSliderThumb, {
      slidesPerView: 'auto',
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      spaceBetween: 30,
      freeMode: true,
      loop: false,
      allowTouchMove: true,
    });

    const heroSwiper = new Swiper(heroSlider, {
      allowTouchMove: false,
      effect: 'fade',
      loop: false,
      speed: '1000',
      watchSlidesProgress: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      thumbs: {
        swiper: heroSwiperThumb,
      },
    });

    heroSwiper.on('slideChange', () => {
      const realIndex = heroSwiper.realIndex;
      heroSwiperThumb.slides.forEach(slide => slide.classList.remove('swiper-slide-thumb-active'));
      const activeSlide = heroSwiperThumb.slides[realIndex];
      if (activeSlide) {
        activeSlide.classList.add('swiper-slide-thumb-active');
      }
      heroSwiperThumb.slideTo(realIndex);
    });
  }
};
