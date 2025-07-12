// Swiper Configuration
const SWIPER_CONFIG = {
  slidesPerView: getSlidesPerView(),
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

// Get slides per view based on screen width
function getSlidesPerView() {
  const width = document.body.offsetWidth;
  return width <= 420 ? 1.15 : 3.7;
}

// Initialize Swiper instances
function initializeSwipers() {
  const swiperSelectors = [
    ".mySwiper.swiper1",
    ".mySwiper.swiper2",
    ".mySwiper.swiper3"
  ];

  swiperSelectors.forEach(selector => {
    new Swiper(selector, SWIPER_CONFIG);
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSwipers);