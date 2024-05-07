/* Seting Sidebar width when open and closed */
function openNav() {
    document.getElementById("sideBar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

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

window.addEventListener('load', function () {
    document.getElementById("navbtn").click();
  });