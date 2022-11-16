/* jshint esversion: 6 */
const navbar = document.querySelector("#navbar");
const content = document.querySelector("#content");
const hMenu = document.querySelector(".h-menu");

window.onscroll = function () {
    if (window.scrollY >= hMenu.offsetTop) {
        navbar.classList.add("sticky");
        content.classList.add("add-top-padding");
    } else {
        navbar.classList.remove("sticky");
        content.classList.remove("add-top-padding");
    }
};