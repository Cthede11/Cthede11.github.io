/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("sideBar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
      document.getElementById("sideBar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
}


var changeBtn = document.getElementById("navbtn");
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