// scroll up flesh
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $(".flesh").css("display", "flex");
    } else {
      $(".flesh").hide();
    }
  });
  $(".flesh").click(function () {
    $("body , html").animate({ scrollTop: 0 }, 1000, "swing");
  });
});

// fixed menu while scrolling
const header = document.querySelector(".header-main");
const headOffsetTop = header.offsetTop;
window.addEventListener("scroll", function () {
  let scroll = window.scrollY;
  if (scroll > headOffsetTop) {
    header.classList.add("fixed-menu");
  } else {
    header.classList.remove("fixed-menu");
  }
});

// first page slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// second page (best sellers) slider
var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
