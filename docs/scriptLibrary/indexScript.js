
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

// popup on page load
window.onload = function() {
  document.getElementById('popup').style.display = 'block';
}

document.getElementById('closePopup').onclick = function() {
  document.getElementById('popup').style.display = 'none';
}

window.onload = function() {
  // Check if 'visited' flag is in local storage
  if (!localStorage.getItem('visited')) {
      // If not, show the popup
      document.getElementById('popup').style.display = 'block';
  }
}

document.getElementById('closePopup').onclick = function() {
  document.getElementById('popup').style.display = 'none';

  // If the checkbox is checked, set the 'visited' flag in local storage
  if (document.getElementById('noShow').checked) {
      localStorage.setItem('visited', 'true');
  }
}
