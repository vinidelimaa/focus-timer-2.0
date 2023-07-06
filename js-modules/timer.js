import { resetControls, updateNewMinutes } from "./controls.js"
import {
  minutesDisplay,
  secondsDisplay,
  buttonPause,
  buttonPlay,
} from "./elements.js"
import { playSoundEffects } from "./sounds.js"

let timerTimeOut

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")

  return
}

function reset() {
  updateDisplay(updateNewMinutes, 0)
  clearTimeout(timerTimeOut)

  return
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (seconds == 0 && minutes == 0) {
      resetControls(buttonPlay, buttonPause)
      playSoundEffects("complete")

      return
    }

    if (seconds <= 0) {
      seconds = 60
    }

    let newSeconds = seconds - 1
    secondsDisplay.textContent = String(newSeconds).padStart(2, "0")

    countdown()
  }, 1000)

  return
}

function hold() {
  clearTimeout(timerTimeOut)

  return
}

export { updateDisplay, reset, countdown, hold }
