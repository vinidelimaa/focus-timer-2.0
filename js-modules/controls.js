let updateNewMinutes = 0

function darkMode(buttonDarkModeSun, buttonDarkModeMoon, body) {
  buttonDarkModeSun.classList.toggle("hide")
  buttonDarkModeMoon.classList.toggle("hide")
  body.classList.toggle("dark-mode")
}

function lightMode(buttonDarkModeSun, buttonDarkModeMoon, body) {
  buttonDarkModeSun.classList.toggle("hide")
  buttonDarkModeMoon.classList.toggle("hide")
  body.classList.toggle("dark-mode")
}

function play(buttonPlay, buttonPause) {
  buttonPlay.classList.toggle("hide")
  buttonPause.classList.toggle("hide")
}

function pause(buttonPlay, buttonPause) {
  buttonPlay.classList.toggle("hide")
  buttonPause.classList.toggle("hide")
}

function resetControls(buttonPlay, buttonPause) {
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")
}

function addTime(newMinutes) {
  let addMinutes = Number(newMinutes.textContent)
  newMinutes.innerHTML = String(addMinutes + 5).padStart(2, "0")

  updateNewMinutes = addMinutes + 5
}

function reduceTime(newMinutes) {
  let reduceMinutes = Number(newMinutes.textContent)
  if (reduceMinutes > 0) {
    newMinutes.innerHTML = String(reduceMinutes - 5).padStart(2, "0")

    updateNewMinutes = reduceMinutes - 5
  }
}

function forestActivate(buttonForest) {
  buttonForest.classList.toggle("invert")
}

function cloudyActivate(buttonCloudy) {
  buttonCloudy.classList.toggle("invert")
}

function cafeActivate(buttonCafe) {
  buttonCafe.classList.toggle("invert")
}

function fireActivate(buttonFire) {
  buttonFire.classList.toggle("invert")
}

function buttonForestReset(buttonFire, buttonCloudy, buttonCafe) {
  buttonFire.classList.remove("invert")
  buttonCloudy.classList.remove("invert")
  buttonCafe.classList.remove("invert")
}

function buttonCloudyReset(buttonFire, buttonForest, buttonCafe) {
  buttonFire.classList.remove("invert")
  buttonForest.classList.remove("invert")
  buttonCafe.classList.remove("invert")
}

function buttonCafeReset(buttonFire, buttonForest, buttonCloudy) {
  buttonFire.classList.remove("invert")
  buttonForest.classList.remove("invert")
  buttonCloudy.classList.remove("invert")
}

function buttonFireReset(buttonCafe, buttonForest, buttonCloudy) {
  buttonCafe.classList.remove("invert")
  buttonForest.classList.remove("invert")
  buttonCloudy.classList.remove("invert")
}

export {
  play,
  pause,
  addTime,
  reduceTime,
  forestActivate,
  cloudyActivate,
  cafeActivate,
  fireActivate,
  resetControls,
  updateNewMinutes,
  buttonForestReset,
  buttonCloudyReset,
  buttonCafeReset,
  buttonFireReset,
  darkMode,
  lightMode,
}
