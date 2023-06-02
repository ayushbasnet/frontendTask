$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 4,
    loop: true,
    margin: 10,
    responsive: {
      600: {
        items: 2,
      },
    },
  });
});

$(document).ready(function () {
  $(".owl-carousel2").owlCarousel({
    center: true,
    items: 4,
    loop: true,
    margin: 30,
    responsive: {
      600: {
        items: 2,
      },
    },
  });
});

const swiper1 = new Swiper(".logo", {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".bi-arrow-right-square",
    prevEl: ".bi-arrow-left-square",
  },
});

const swiper4 = new Swiper(".product", {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

    navigation: {
      nextEl: ".swiper-button-prev",
      prevEl: ".swiper-button-next",
    },
  },
});

const swiper2 = new Swiper(".brand", {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper3 = new Swiper(".flavors", {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
