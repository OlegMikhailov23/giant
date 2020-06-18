'use strict';

var gallerySwiper = new Swiper ('#swiper-gallery', {
  effect: 'coverflow',
  grabCursor: false, 
  initialSlide: 3,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 35,
    depth: 120,
    modifier: 2.5,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev',
  },
});

var feedbackSwiper = new Swiper ('#swiper-feedback', {
  grabCursor: 'true',
  slidesPerView: 'auto',
  spaceBetween: 32,
  initialSlide: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev',
  },
});