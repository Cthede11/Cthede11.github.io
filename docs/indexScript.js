function expandFunction() {
  var x = document.getElementById("expandGallery");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var expandButton = document.getElementById("expandButton");
var expandGallery = document.getElementById("expandGallery");

expandGallery.style.display = "none";
expandButton.addEventListener("click", expandFunction);



projectsButton.addEventListener("mouseover", function() {
  this.classList.add("hover");
});

projectsButton.addEventListener("mouseout", function() {
  this.classList.remove("hover");
});

