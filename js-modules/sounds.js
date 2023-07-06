function playSoundEffects(file) {
  effectSounds[file].play()
}

const effectSounds = {
  start: new Audio("/sounds/start.mp3"),
  controls: new Audio("./sounds/controls.mp3"),
  complete: new Audio("/sounds/complete.mp3"),
  click: new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  ),
}

const allSounds = {
  forest: new Audio("./sounds/forest.wav"),
  cloudy: new Audio("./sounds/cloudy.wav"),
  cafe: new Audio("./sounds/cafe.wav"),
  fire: new Audio("./sounds/fire.wav"),
}

function toggleSound(file) {
  pauseNotChosenAudio(file)
  // check if the chosen sound is already playing
  if (allSounds[file].paused) {
    allSounds[file].play()
  } else {
    allSounds[file].pause()
  }
}

// pause all sounds while this is not the chosen sound
function pauseNotChosenAudio(file) {
  for (const sound in allSounds) {
    if (sound != file) {
      allSounds[sound].pause()
    }
  }
}

function setVolume(audio, volume) {
  audio.volume = volume / 100
}

export { toggleSound, playSoundEffects, setVolume, allSounds }
