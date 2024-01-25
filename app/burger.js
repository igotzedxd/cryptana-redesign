const burgerBtn = document.querySelector(".burger-btn");
const navUl = document.querySelector(".nav-list");

burgerBtn.addEventListener("click", function () {
  navUl.classList.toggle("show");
  burgerBtn.classList.toggle("rotate");
});

navUl.addEventListener("click", function () {
  navUl.classList.toggle("show");
  burgerBtn.classList.toggle("rotate");
});
