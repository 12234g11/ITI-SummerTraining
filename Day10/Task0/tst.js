let audio = document.getElementsByTagName('audio')[0];

function play() {
  audio.play();
}

function pause() {
  audio.pause();
}

function stop() {
  audio.pause();
  audio.currentTime = 0;
}

function setVolume(value) {
  audio.volume = value;
}

function mute() {
  audio.muted = true;
}

function unmute() {
  audio.muted = false;
}
