/* jshint esversion: 6 */
const navMenu = document.querySelector("nav");
const navButton = document.querySelector(".menu-button");
let menuOpen = false;

const showMenu = () => {
    if (menuOpen) {
        navButton.innerText = "Menu schließen";
        menuOpen = true;
    }
    else navButton.innerText = "Menu ausklappen";
    menuOpen = false;
    }
