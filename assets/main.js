const navItems = document.querySelectorAll(".navbar__item");

navItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    navItems.forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".navbar__link").classList.remove("active");
    });

    this.classList.add("active"); //tham chiếu đến mục menu mà người dùng vừa click vào
    this.querySelector(".navbar__link").classList.add("active");
  });
});
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  slidesPerView: "auto",
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPreView: 1,
    },
    769: {
      slidesPreView: 2,
    },
    1024: {
      slidesPreView: 3,
    },
  },
});
