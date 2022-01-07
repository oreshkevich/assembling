const video = document.getElementById("video-one");
const videoControls = document.getElementById("video-controls");

const videoWorks = !!document.createElement("video").canPlayType;
if (videoWorks) {
  video.controls = false;
  videoControls.classList.remove("hidden");
}
const playbackAnimation = document.getElementById("playback-animation");

const playbackIc = document.querySelector(".button-play img");

function animatePlayback() {
  playbackIc.classList.toggle("hidden");
}
// video.addEventListener("click", animatePlayback);
video.addEventListener("play", animatePlayback);
video.addEventListener("pause", animatePlayback);
const playButton = document.getElementById("play");

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

playButton.addEventListener("click", togglePlay);

const playbackIcons = document.querySelectorAll(".playback-icons img");
function updatePlayButton() {
  playbackIcons.forEach((icon) => icon.classList.toggle("hidden"));
//  playbackIc.classList.add("hidden");
  if (video.paused) {
    playButton.setAttribute("data-title", "Play (k)");
  } else {
    playButton.setAttribute("data-title", "Pause (k)");
  }
}

video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);

const timeElapsed = document.getElementById("time-elapsed");
const duration = document.getElementById("duration");

function formatTime(timeInSeconds) {
  const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

  return {
    minutes: result.substr(3, 2),
    seconds: result.substr(6, 2),
  };
}

function initializeVideo() {
  const videoDuration = Math.round(video.duration);
  const time = formatTime(videoDuration);
  duration.innerText = `${time.minutes}:${time.seconds}`;
  duration.setAttribute("datetime", `${time.minutes}m ${time.seconds}s`);
}
video.addEventListener("loadedmetadata", initializeVideo);

function updateTimeElapsed() {
  const time = formatTime(Math.round(video.currentTime));
  timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
  timeElapsed.setAttribute("datetime", `${time.minutes}m ${time.seconds}s`);
}
video.addEventListener("timeupdate", updateTimeElapsed);

const progressBar = document.getElementById("progress-bar");
const seek = document.getElementById("seek");

function initializeVideo() {
  const videoDuration = Math.round(video.duration);
  seek.setAttribute("max", videoDuration);
  progressBar.setAttribute("max", videoDuration);
  const time = formatTime(videoDuration);
  duration.innerText = `${time.minutes}:${time.seconds}`;
  duration.setAttribute("datetime", `${time.minutes}m ${time.seconds}s`);
}

function updateProgress() {
  seek.value = Math.floor(video.currentTime);
  progressBar.value = Math.floor(video.currentTime);
}

video.addEventListener("timeupdate", updateProgress);

const seekTooltip = document.getElementById("seek-tooltip");

function updateSeekTooltip(event) {
  const skipTo = Math.round(
    (event.offsetX / event.target.clientWidth) *
      parseInt(event.target.getAttribute("max"), 10)
  );
  seek.setAttribute("data-seek", skipTo);
  const t = formatTime(skipTo);
  seekTooltip.textContent = `${t.minutes}:${t.seconds}`;
  const rect = video.getBoundingClientRect();
  seekTooltip.style.left = `${event.pageX - rect.left}px`;
}

seek.addEventListener("mousemove", updateSeekTooltip);

function skipAhead(event) {
  const skipTo = event.target.dataset.seek
    ? event.target.dataset.seek
    : event.target.value;
  video.currentTime = skipTo;
  progressBar.value = skipTo;
  seek.value = skipTo;
}
seek.addEventListener("input", skipAhead);

const volumeButton = document.getElementById("volume-button");
const volumeIcons = document.querySelectorAll(".volume-button use");
const volumeMute = document.querySelector(".mute");

const volumeHigh = document.querySelector(".sound");
const volume = document.getElementById("volume");

function updateVolume() {
  if (video.muted) {
    video.muted = false;
  }

  video.volume = volume.value;
}

volume.addEventListener("input", updateVolume);

function updateVolumeIcon() {
  volumeIcons.forEach((icon) => {
    icon.classList.add("hidden");
  });

  volumeButton.setAttribute("data-title", "Mute (m)");

  if (video.muted || video.volume === 0) {
    volumeMute.classList.remove("hidden");
    volumeHigh.classList.add("hidden");
    volumeButton.setAttribute("data-title", "Unmute (m)");
  } else {
    volumeHigh.classList.remove("hidden");
    volumeMute.classList.add("hidden");
  }
}
video.addEventListener("volumechange", updateVolumeIcon);

function toggleMute() {
  video.muted = !video.muted;

  if (video.muted) {
    volume.setAttribute("data-volume", volume.value);
    volume.value = 0;
  } else {
    volume.value = volume.dataset.volume;
  }
}

volumeButton.addEventListener("click", toggleMute);

video.addEventListener("click", togglePlay);



const fullscreenButton = document.getElementById("fullscreen-button");
const videoContainer = document.getElementById("video-container");

function toggleFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (document.webkitFullscreenElement) {
    document.webkitExitFullscreen();
  } else if (videoContainer.webkitRequestFullscreen) {
    videoContainer.webkitRequestFullscreen();
  } else {
    videoContainer.requestFullscreen();
  }
}
fullscreenButton.onclick = toggleFullScreen;

const fullscreenIconsImg = document.querySelectorAll(".fullscreen-button img");

function smile() {
  fullscreenIconsImg.forEach((icon) => icon.classList.toggle("hidden"));
}

fullscreenButton.addEventListener("click", smile);

function updateFullscreenButton() {
  if (document.fullscreenElement) {
    fullscreenButton.setAttribute("data-title", "Exit full screen (f)");
  } else {
    fullscreenButton.setAttribute("data-title", "Full screen (f)");
  }
}
videoContainer.addEventListener("fullscreenchange", updateFullscreenButton);
function hideControls() {
  if (video.paused) {
    return;
  }

  videoControls.classList.add("hide");
}

function showControls() {
  videoControls.classList.remove("hide");
}

video.addEventListener("mouseenter", showControls);
video.addEventListener("mouseleave", hideControls);
videoControls.addEventListener("mouseenter", showControls);
videoControls.addEventListener("mouseleave", hideControls);

function keyboardShortcuts(event) {
  const { key } = event;
  switch (key) {
    case " ":
      togglePlay();
     
      if (video.paused) {
        showControls();
      } else {
        setTimeout(() => {
          hideControls();
        }, 2000);
      }
      break;
    case "m":
      toggleMute();
      break;
    case "f":
      toggleFullScreen();
      break;
  }


}

document.addEventListener("keyup", keyboardShortcuts);



  var SPACE_KEYCODE=32;
document.onkeydown=function(e){
    var keycode=e.keyCode||e.charCode,
        body=document.body;
    if(keycode!=SPACE_KEYCODE)
        return;
    e.preventDefault();

}
const videoHeight = document.querySelector(".volume-controls");

videoHeight.addEventListener("pointerdown", (evt) => {
  const destination = evt.target;
  if (!destination) return;
  if (destination.classList.contains("seek-volume")) {
    destination.addEventListener("pointermove", () => {
      destination.style.background = `linear-gradient(to right, #710707 ${
        destination.value
      }%, #710707 ${destination.value * 100}%, #fff ${
        destination.value * 100
      }%, #fff 100%)`;
    });
  }
});
