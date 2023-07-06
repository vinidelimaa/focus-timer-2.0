import { reset, countdown, hold } from "./timer.js"
import {
  toggleSound,
  playSoundEffects,
  setVolume,
  allSounds,
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
  forestVolume,
  cloudyVolume,
  cafeVolume,
  fireVolume,
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
  playSoundEffects("click")
  darkMode(buttonDarkMode)
})

buttonPlay.addEventListener("click", function () {
  playSoundEffects("start")
  play(buttonPlay, buttonPause)
  countdown()
})

buttonPause.addEventListener("click", function () {
  playSoundEffects("controls")
  pause(buttonPlay, buttonPause)
  hold()
})

buttonStop.addEventListener("click", function () {
  playSoundEffects("controls")

  reset()
  resetControls(buttonPlay, buttonPause)
})

buttonAdd.addEventListener("click", function () {
  playSoundEffects("controls")
  addTime(minutesDisplay)
})

buttonReduce.addEventListener("click", function () {
  playSoundEffects("controls")
  reduceTime(minutesDisplay)
})

// moods

buttonForest.addEventListener("click", function () {
  playSoundEffects("click")
  forestActivate(buttonForest)
  buttonForestReset(buttonFire, buttonCloudy, buttonCafe)
  toggleSound("forest")
})

buttonCloudy.addEventListener("click", function () {
  playSoundEffects("click")
  cloudyActivate(buttonCloudy)
  buttonCloudyReset(buttonFire, buttonForest, buttonCafe)
  toggleSound("cloudy")
})

buttonCafe.addEventListener("click", function () {
  playSoundEffects("click")
  cafeActivate(buttonCafe)
  buttonCafeReset(buttonFire, buttonForest, buttonCloudy)
  toggleSound("cafe")
})

buttonFire.addEventListener("click", function () {
  playSoundEffects("click")
  fireActivate(buttonFire)
  buttonFireReset(buttonCafe, buttonForest, buttonCloudy)
  toggleSound("fire")
})

// volume

forestVolume.addEventListener("input", function () {
  let audio = allSounds["forest"]
  let volume = forestVolume.value
  setVolume(audio, volume)
})

cloudyVolume.addEventListener("input", function () {
  let audio = allSounds["cloudy"]
  let volume = cloudyVolume.value
  setVolume(audio, volume)
})

cafeVolume.addEventListener("input", function () {
  let audio = allSounds["cafe"]
  let volume = cafeVolume.value
  setVolume(audio, volume)
})

fireVolume.addEventListener("input", function () {
  let audio = allSounds["fire"]
  let volume = fireVolume.values
  setVolume(audio, volume)
})
