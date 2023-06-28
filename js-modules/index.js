import { reset, countdown, hold } from "./timer.js"
import { forestSound, cloudySound, fireSound, cafeSound } from "./sounds.js"
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
} from "./controls.js"

export let minutes = Number(minutesDisplay.textContent)

// controls

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
  buttonForestReset(buttonFire, buttonCloudy, buttonCafe)
  forestSound()
})

buttonCloudy.addEventListener("click", function () {
  cloudyActivate(buttonCloudy)
  buttonCloudyReset(buttonFire, buttonForest, buttonCafe)
  cloudySound()
})

buttonCafe.addEventListener("click", function () {
  cafeActivate(buttonCafe)
  buttonCafeReset(buttonFire, buttonForest, buttonCloudy)
  cafeSound()
})

buttonFire.addEventListener("click", function () {
  fireActivate(buttonFire)
  buttonFireReset(buttonCafe, buttonForest, buttonCloudy)
  fireSound()
})
