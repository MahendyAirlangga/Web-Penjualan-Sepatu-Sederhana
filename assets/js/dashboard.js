var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  centerSlide:'true',
  fade:'true',
  grabCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


$(document).ready(function () {
  // Get the navbar element
  var navbar = $("#navbar");

  // Set a scroll event listener
  $(window).scroll(function () {
      // If the scroll position is greater than 50px, add a background color
      if ($(this).scrollTop() > 50) {
          navbar.removeClass("navbar-trans");
      } else {
          navbar.addClass("navbar-trans");
      }
  });
});
