export const Controls = {
  play(buttonPlay, buttonPause) {
    buttonPlay.classList.toggle("hide")
    buttonPause.classList.toggle("hide")
  },

  pause(buttonPlay, buttonPause) {
    buttonPlay.classList.toggle("hide")
    buttonPause.classList.toggle("hide")
  },

  addTime(minutes) {},

  reduceTime(minutes) {},

  forestActivate(buttonForest) {
    buttonForest.classList.add("invert")
  },

  cloudyActivate(buttonCloudy) {
    buttonCloudy.classList.add("invert")
  },

  cafeActivate(buttonCafe) {
    buttonCafe.classList.add("invert")
  },

  fireActivate(buttonFire) {
    buttonFire.classList.add("invert")
  },
}
