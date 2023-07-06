import { reset, countdown, hold } from "./timer.js"
import {
  forestSound,
  cloudySound,
  fireSound,
  cafeSound,
  pauseAllAudios,
} from "./sounds.js"
import {
  buttonPlay,
  buttonStop,
  buttonAdd,
  buttonReduce,
  buttonForest,
  buttonCloudy,
  buttonCafe,
  buttonFire,
  buttonPause,
  minutesDisplay,
  buttonDarkMode,
} from "./elements.js"
import {
  play,
  pause,
  addTime,
  reduceTime,
  forestActivate,
  cloudyActivate,
  cafeActivate,
  fireActivate,
  resetControls,
  buttonForestReset,
  buttonCloudyReset,
  buttonCafeReset,
  buttonFireReset,
  darkMode,
} from "./controls.js"

export let minutes = Number(minutesDisplay.textContent)

// controls

buttonDarkMode.addEventListener("click", function () {
  darkMode(buttonDarkMode)
})

buttonPlay.addEventListener("click", function () {
  play(buttonPlay, buttonPause)
  countdown()
})

buttonPause.addEventListener("click", function () {
  pause(buttonPlay, buttonPause)
  hold()
})

buttonStop.addEventListener("click", function () {
  reset()
  resetControls(buttonPlay, buttonPause)
})

buttonAdd.addEventListener("click", function () {
  addTime(minutesDisplay)
})

buttonReduce.addEventListener("click", function () {
  reduceTime(minutesDisplay)
})

// moods

buttonForest.addEventListener("click", function () {
  forestActivate(buttonForest)
  pauseAllAudios()
  forestSound()
})

buttonCloudy.addEventListener("click", function () {
  cloudyActivate(buttonCloudy)
  pauseAllAudios()
  cloudySound()
})

buttonCafe.addEventListener("click", function () {
  cafeActivate(buttonCafe)
  pauseAllAudios()
  cafeSound()
})

buttonFire.addEventListener("click", function () {
  fireActivate(buttonFire)
  pauseAllAudios()
  fireSound()
})
