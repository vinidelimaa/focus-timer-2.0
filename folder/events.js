import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
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
} from "./elements.js"

export default function () {
  buttonPlay.addEventListener("click", function () {
    Controls.play(buttonPlay, buttonPause)
    Timer.countdown()
  })

  buttonPause.addEventListener("click", function () {
    Controls.pause(buttonPlay, buttonPause)
    Timer.hold()
  })

  buttonStop.addEventListener("click", function () {
    Timer.reset()
  })

  buttonAdd.addEventListener("click", function () {
    Controls.addTime()
  })

  buttonReduce.addEventListener("click", function () {
    Controls.reduceTime()
  })

  buttonForest.addEventListener("click", function () {
    Controls.forestActivate()
    Sounds.forestActivate()
  })

  buttonCloudy.addEventListener("click", function () {
    Controls.cloudyActivate()
    Sounds.cloudyActivate()
  })

  buttonCafe.addEventListener("click", function () {
    Controls.cafeActivate()
    Sounds.cafeActivate()
  })

  buttonFire.addEventListener("click", function () {
    Controls.fireActivate()
    Sounds.fireActivate()
  })
}
