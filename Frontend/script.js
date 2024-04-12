"use strict";

const mobileNav = document.querySelector(".mobile-nav");
const mobileIcon = document.querySelector(".nav-open");
const overlay = document.querySelector(".overlay");

mobileIcon.addEventListener("click", function () {
  mobileNav.classList.toggle("active");

  if (mobileNav.classList.contains("active")) {
    mobileIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    overlay.classList.add("dark-overlay");
  } else {
    mobileIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    overlay.classList.remove("dark-overlay");
  }
});
