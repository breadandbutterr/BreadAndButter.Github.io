//BACKGROUND & BREAD GIF
//rotate the Background Gradient & Bring in Bread Gif
var inc = 90; //starting degrees of the gradient
function increment(){
  inc += 1;
  if (inc >= 360) {
    document.getElementById("breadGif").style.transform = 'translateX(-150%)'; //After 360 increments (~5 seconds), slide in Bread Gif
  }
  if (inc >= 720) {
    document.getElementById("breadGif").style.transform = 'translateX(0%)'; //After anothjer ~5 seconds, hide Bread Gif then start over
    inc = 0;
  }
  document.getElementById("rotateGradient").style.background = '-webkit-linear-gradient(-' + inc + 'deg, hsla(31, 97%, 53%, 1) 0%, hsla(45, 83%, 67%, 1) 100%)';
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

//change to 8 8bit
function changeToEightBit() {

  let headers = document.querySelectorAll('h1');
  for(var i = 0; i < headers.length; i++) {
    headers[i].style.fontFamily = "dragon_font";
  }
  document.getElementById('myBtn').style.fontFamily = "dragon_font";
  document.getElementById('rotateGradient').classList.add('eightbit');
  document.getElementById('game').style.display = 'block';
  document.getElementById('profile-pic').setAttribute("src","Pics/eightbit/profpicNew3.png");
  document.getElementById('twitch-logo').setAttribute("src","Pics/eightbit/TwitchFULL.wine.png");
  document.getElementById('youtube-logo').setAttribute("src","Pics/eightbit/YouTube.wine.png");
  document.getElementById('tiktok-logo').setAttribute("src","Pics/eightbit/Tiktok.wine.png");
  document.getElementById('discord-logo').setAttribute("src","Pics/eightbit/Discord.wine.png");
  document.getElementById('reddit-logo').setAttribute("src","Pics/eightbit/Reddit-Logo.wine.png");
  document.getElementById('twitter-logo').setAttribute("src","Pics/eightbit/TwitterFULL.wine.png");
  document.getElementById('instagram-logo').setAttribute("src","Pics/eightbit/Instagram.Fullwine.png");
}



//TWITCH PLAYER
var options = {
  width: '100%',
  height: '100%',
  channel: 'breadandbutterr',
  parent: ['localhost']
};
var player = new Twitch.Player('twitchplayer', options);
player.setVolume(0.5);
