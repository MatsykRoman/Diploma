new Swiper('.second-slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slideToClickedSlide: true,
  keyboard: {
    enable: true,
    onlyInViewport: true,
    pageUpDown: true
  },
  loop: true,
  speed: 800,
  mousewheel: {
    sensitivity: 1
  },
});
