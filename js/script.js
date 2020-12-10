"use strict";
// my-script.js
document.addEventListener("DOMContentLoaded", function () {
  const defNav = document.querySelector(".default-nav");
  const navDropBtn = document.querySelector(".drop-down");
  document.querySelector("body").onresize = function () {
    if (window.innerWidth <= 850) {
      defNav.classList.toggle("hidden");
    } else {
      defNav.classList.remove("hidden");
    }
  };
  navDropBtn.addEventListener("click", function () {
    defNav.classList.toggle("hidden");
  });
});
