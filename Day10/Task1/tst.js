let video = document.getElementById("myVideo");
let playBtn = document.getElementById("playBtn");
let muteBtn = document.getElementById("muteBtn");
let volumeSlider = document.getElementById("volume");
let speedSlider = document.getElementById("speed");
let progress = document.getElementById("progress");
let currentTimeDisplay = document.getElementById("currentTime");

video.controls = false;

function play() {
    video.play();
}
function stop() {
    video.pause();
}
function toggleMute() {
    if(video.muted){
        muteBtn.textContent = 'Mute';
        video.muted = false;
    }
    else if(!video.muted){
        muteBtn.textContent = 'Unmute';
        video.muted = true;
    }
}
function changeVolume(val) {
    video.volume = val;
}
function changeSpeed(val) {
    video.playbackRate = val;
}
function change(seconds) {
    video.currentTime += seconds;
}
video.ontimeupdate = function () {
    progress.value = (video.currentTime / video.duration) * 100;
    let curMin = Math.floor(video.currentTime / 60);
    let curSec = Math.floor(video.currentTime % 60);

    let durMin = Math.floor(video.duration / 60);
    let durSec = Math.floor(video.duration % 60);

    currentTimeDisplay.textContent =
    curMin + ":" + (curSec < 10 ? "0" + curSec : curSec) +
    " / " +
    durMin + ":" + (durSec < 10 ? "0" + durSec : durSec);

}

progress.oninput = function () {
  video.currentTime = (progress.value / 100) * video.duration;
} 

volumeSlider.value = video.volume;
speedSlider.value = video.playbackRate;