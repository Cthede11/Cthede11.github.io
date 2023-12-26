var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });

  coll[i].addEventListener("mouseover", function() {
    this.classList.add("hover");
  });

  coll[i].addEventListener("mouseout", function() {
    this.classList.remove("hover");
  });
}

/* this.classList.toggle("active"); */
