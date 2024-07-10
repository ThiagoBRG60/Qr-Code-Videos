function getQueryParam(param) {
   const urlParams = new URLSearchParams(window.location.search)
   return urlParams.get(param);
}

const videoId = getQueryParam('video');

const videoSources = {
   'video1': './assets/videos/video1.mp4',
   'video2': './assets/videos/video2.mp4',
   'video3': './assets/videos/video3.mp4'
}

/* change the themes */

const themeButton = document.querySelector(".theme-mode");
const closeButton = document.querySelector(".close-button button");
const linksContainer = document.querySelector(".links ul")
const links = document.querySelectorAll(".links ul li a")

themeButton.addEventListener("click", switchTheme);

function switchTheme() {
   document.body.classList.toggle("switch-theme");
   themeButton.classList.toggle("switch-theme");
   themeButton.firstElementChild.classList.toggle("fa-moon")
   closeButton.classList.toggle("switch-theme");
   linksContainer.classList.toggle("switch-theme")
   playButton.classList.toggle("switch-theme")
   links.forEach((link) => {
      link.classList.toggle("switch-theme")
   })
}

/* play, pause the video and control volume */

const video = document.querySelector(".video-container video");
const playButton = document.querySelector(".video-controls .fa-pause");

if (videoSources[videoId]) {
   video.src = videoSources[videoId]
}

if (video) {
   video.addEventListener("ended", videoEnded)
}

playButton.addEventListener("click", playPauseVideo)

function playPauseVideo() {
   const hasPauseButton = playButton.classList.contains("fa-pause");
   playButton.classList.toggle("fa-pause")
   playButton.classList.toggle("fa-play")
   hasPauseButton ? video.pause() : video.play()
}

function videoEnded() {
   playButton.classList.remove("fa-pause")
   playButton.classList.add("fa-play")
   setTimeout(() => {
      openLinksSection()
   }, 1200)
}

/* close the video and show the links */

const videoSection = document.querySelector(".video-player");

closeButton.addEventListener("click", openLinksSection)

function openLinksSection() {
   video.pause()
   videoSection.classList.add("closed")
   setTimeout(() => {
      videoSection.style.display = "none"
      linksContainer.style.display = "flex"
   }, 1000)
   setTimeout(() => {
      linksContainer.classList.add("opened")
   }, 1200)
}