function expandFunction() {
  var x = document.getElementById("expandGallary");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var expandButton = document.getElementById("expandButton");
var expandGallary = document.getElementById("expandGallary");

expandGallary.style.display = "none";
expandButton.addEventListener("click", expandFunction);



projectsButton.addEventListener("mouseover", function() {
  this.classList.add("hover");
});

projectsButton.addEventListener("mouseout", function() {
  this.classList.remove("hover");
});

