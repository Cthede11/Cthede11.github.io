
// Simplified expandFunction
function expandFunction() {
  var x = document.getElementById("expandGallery");
  x.style.display = (x.style.display === "none") ? "block" : "none";
}

// Handle JavaScript disabled case
var expandButton = document.getElementById("expandButton");
var expandGallery = document.getElementById("expandGallery");

expandGallery.style.display = "none";
if (expandButton && expandGallery) {
  
  expandButton.addEventListener("click", expandFunction);
}

// Use appropriate variable names
var projectsButton = document.getElementById("projectsButton");

if (projectsButton) {
  projectsButton.addEventListener("mouseover", function() {
      this.classList.add("hover");
  });

  projectsButton.addEventListener("mouseout", function() {
      this.classList.remove("hover");
  });
}
