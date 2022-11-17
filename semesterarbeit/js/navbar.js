const navButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#navBar");

const toggleMenu = () => {
    if (navMenu.className === "") {
        navButton.innerText = "Menu schließen";
        navMenu.className = "visible";
    }
    else {
        navButton.innerText = "Menu ausklappen";
        navMenu.className = "";
    }
}
