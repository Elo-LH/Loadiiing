const playPause = document.querySelector('.play-pause');
const video = document.querySelector('.video');
let playing = false;

playPause.addEventListener('click', function() {
  playing = !playing; // la valeur de playing devient son opposé

  if (playing) {
    playPause.innerText = '█';
    video.play();
  } else {
    playPause.innerText = '►';
    video.pause();
  }
});