
// projectsButton effects
var projectsButton = document.getElementById("projectsButton");

if (projectsButton) {
  projectsButton.addEventListener("mouseover", function() {
      this.classList.add("hover");
  });

  projectsButton.addEventListener("mouseout", function() {
      this.classList.remove("hover");
  });
}
