// const mobileHeader = document.querySelector(".mobile-header");
// console.log(mobileHeader);
// const mbHeader = document.querySelector(".mb-header");
// console.log(mbHeader);
// const burger = document.querySelector(".burger");
// console.log(burger);
// const mobileNav = document.querySelector(".mobile-nav");
// console.log(mbNav);

// burger.addEventListener("click", function () {
//   burger.classList.toggle("active");
//   mobileNav.classList.toggle("active");
// });

const mobileHeader = document.querySelector(".mobile-header");
console.log(mobileHeader);

const burger = document.querySelector(".burger");
console.log(burger);

const mobileNav = document.querySelector(".mobile-nav");
console.log(mobileNav);

const mbNav = document.querySelector(".mb-nav");
console.log(mbNav);

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});
