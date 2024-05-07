/* This script handles the opening and closing of a sidebar navigation menu */

// Function to open the sidebar
function openNav() {
    // Set the width of the sidebar to 250px
    document.getElementById("sideBar").style.width = "250px";
    // Shift the main content to the right by 250px
    document.getElementById("main").style.marginLeft = "250px";
}

// Function to close the sidebar
function closeNav() {
    document.getElementById("sideBar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

var changeBtn = document.getElementById("navbtn");

// Add an event listener for the hover event on the button
changeBtn.addEventListener("hover", function() {
});

changeBtn.addEventListener("click", function() {
    var sideBar = document.getElementById("sideBar");

    if (sideBar.style.width === "0px") {
        openNav();
        changeBtn.innerText = "Close Nav";
    } else {
        closeNav();
        changeBtn.innerText = "Open Nav";
    }
});

// Add an event listener for the load event on the window
window.addEventListener('load', function () {
    // Click the navigation button as soon as the window loads
    document.getElementById("navbtn").click();
});