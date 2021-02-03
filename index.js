$(document).ready(function() {
var subscribePopup = document.getElementById("popup");

// Get the button that opens the subscribePopup
var btn = document.getElementById("subscribeBtn");

// Get the <span> element that closes the subscribePopup
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the subscribePopup
btn.onclick = function() {
  subscribePopup.style.display = "block";
}

// When the user clicks on <span> (x), close the subscribePopup
span.onclick = function() {
  subscribePopup.style.display = "none";
}

// When the user clicks anywhere outside of the subscribePopup, close it
window.onclick = function(event) {
  if (event.target == subscribePopup) {
    subscribePopup.style.display = "none";
  }
}
});