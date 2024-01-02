// expandGallery button effects
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
  