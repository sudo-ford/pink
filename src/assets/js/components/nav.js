var nav = document.querySelector(".nav__list");
var button = document.querySelector(".nav__wrapper button");
var navWrapper = document.querySelector(".nav__wrapper");

button.addEventListener("click", function(e) {
    e.preventDefault();
    nav.classList.toggle("nav__list--block");
    button.classList.toggle("nav__button--open");
    button.classList.toggle("nav__button--close");
    navWrapper.classList.toggle("js-nav__wrapper");
});