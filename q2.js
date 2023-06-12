// Add event listeners to all "Read more" buttons
var readMoreBtns = document.getElementsByClassName("readMoreBtn");
for (var i = 0; i < readMoreBtns.length; i++) {
  readMoreBtns[i].addEventListener("click", function() {
    var details = this.nextElementSibling;
    if (details.style.display === "none") {
      details.style.display = "block";
      this.innerText = "Read less";
    } else {
      details.style.display = "none";
      this.innerText = "Read more";
    }
  });
}
