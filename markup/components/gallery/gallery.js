import Swiper, { Navigation, Pagination } from 'swiper';

const swiperGallery = new Swiper('.gallery__slider', {
  modules: [Navigation, Pagination],
  slidesPerGroup: 1,
  loop: true,
  speed: 500,
  navigation: {
    prevEl: '.gallery__btn.-prev',
    nextEl: '.gallery__btn.-next',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    //bulletClass: 'gallery__previewItem',
    bulletActiveClass: 'swiper-pagination-bullet-active',
    clickable: true,
  },
  breakpoints: {
    
    977: {
      pagination: {
        el: '.gallery__previewItems',
        type: 'custom',
        bulletClass: 'gallery__previewItem',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        clickable: true,
      },
    }
  }
  
});

function createActivePreview() {
  const activePreview = document.querySelector('.active-item');

  if (activePreview) {
    activePreview.classList.remove('active-item');
  }
  
  document.querySelectorAll('.gallery__previewItem')[swiperGallery.realIndex].classList.add('active-item');
}

createActivePreview();

swiperGallery.on('slideChange', function () {
  createActivePreview();
});

const overlay = document.querySelector('.overlay');
const overlayBtn = document.querySelector('.overlay__btn');

overlayBtn.addEventListener('click', function() {
  let timerId = setTimeout(() => overlay.classList.add('overlay-hidden'), 500);
})

