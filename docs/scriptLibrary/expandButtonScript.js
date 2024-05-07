window.onload = function() {
  // expandGallery button effects
  function expandFunction() {
      var x = document.getElementById("expandGallery");
      var expandButton = document.getElementById("expandButton");
      var retractButton = document.getElementById("retractButton");

      if (x.style.display === "none") {
          x.style.display = "block";
          expandButton.innerText = "Retract";
          retractButton.style.display = "block";
      } else {
          x.style.display = "none";
          expandButton.innerText = "Expand";
          retractButton.style.display = "none";
      }
  }

  // Handle JavaScript disabled case
  var expandButton = document.getElementById("expandButton");
  var retractButton = document.getElementById("retractButton");
  var expandGallery = document.getElementById("expandGallery");

  expandGallery.style.display = "none";
  retractButton.style.display = "none";
  if (expandButton && expandGallery) {
      expandButton.addEventListener("click", expandFunction);
  }
  if (retractButton && expandGallery) {
      retractButton.addEventListener("click", expandFunction);
  }
}