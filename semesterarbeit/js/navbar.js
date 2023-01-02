const navButton = document.getElementById("menu-button");
const navMenu = document.getElementById("navBar");

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
