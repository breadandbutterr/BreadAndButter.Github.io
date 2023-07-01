//BREAD GIF
var inc = 90; //starting degrees of the gradient
function increment(){
  inc += 1;
  if (inc >= 360) {
    document.getElementById("breadGif").style.transform = 'translateY(150%)'; //After 360 increments (~5 seconds), slide in Bread Gif
  }
  if (inc >= 720) {
    document.getElementById("breadGif").style.transform = 'translateY(0%)'; //After anothjer ~5 seconds, hide Bread Gif then start over
    inc = 0;
  }
}

var interval = setInterval(increment, 14.5);
window.onload = increment();

//BACK TO TOP BUTTON
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.transform = "translateY(0%)";
    document.getElementById("myBtn").style.bottom = "50px"; // When the user scrolls down 20px from the top of the document, Slide up button
  } else {
    document.getElementById("myBtn").style.transform = "translateY(100%)";
    document.getElementById("myBtn").style.bottom = "-75px";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; //Click button, back to top of window
}

function hamburgerMenu() {
  if (document.getElementById("links").style.display === "block") {
    document.getElementById("links").style.display = "none";
    document.getElementById("content-wrapper").style.top = "75px";
    document.getElementById("hamburger-menu").src = "Pics/hamburger2.png"
    document.getElementById("navbar").style.height = "75px";
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.0)";

  } else {
    document.getElementById("links").style.display = "block";
    document.getElementById("content-wrapper").style.top = "225px";
    document.getElementById("hamburger-menu").src = "Pics/hamburger3.png"
    document.getElementById("navbar").style.height = "175px";
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  }
}

$(function() {
  $('.a-link').click(function() {
    $('.a-link').removeClass("active");
    $(this).addClass("active");
    x = $(this).attr("data-title");

    if (x == "chess") {
      $('body').addClass("chess-body");
    } else {
      $('body').removeClass("chess-body");
    }
    $('#landing').addClass("hidden");
    $('#chess').addClass("hidden");
    $('#webDesign').addClass("hidden");
    $('#videoEditing').addClass("hidden");
    $('#twitchWidgets').addClass("hidden");

    $('#' + x).removeClass("hidden");
  })
});
