
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

window.onload = function() {
  // popup on page load
  document.getElementById('popup').style.display = 'block';

  if (!localStorage.getItem('visited')) {
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

document.querySelector('.collapsible').addEventListener('click', function() {
  var content = document.querySelector('.collapsible-content');
  if (content.style.height) {
      content.style.height = null;

  } else {
      content.style.height = content.scrollHeight + 'px';
  }
});