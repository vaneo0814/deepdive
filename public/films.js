$(document).ready(function() {
    var videoPopup = document.getElementById("videopopup");
    
    // Get the button that opens the videoPopup
    var btn = document.getElementById("playbtn");
    
    // Get the <span> element that closes the videoPopup
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on the button, open the videoPopup
    btn.onclick = function() {
      videoPopup.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the videoPopup
    span.onclick = function() {
      videoPopup.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the videoPopup, close it
    window.onclick = function(event) {
      if (event.target == videoPopup) {
        videoPopup.style.display = "none";
      }
    }
    });