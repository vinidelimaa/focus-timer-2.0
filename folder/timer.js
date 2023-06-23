import { minutesDi`splay, secondsDisplay } from "./elements.js"

export const Timer = {
  updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")

    return
  },

  reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)

    return
  },

  countdown() {
    setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      if (seconds == 0 && minutes == 0) {
        Timer.resetControls()
      }

      if (seconds == 0) {
        seconds = 60
      }

      secondsDisplay.textContent = seconds - 1

      Timer.countdown()
    }, 1000)

    return
  },

  hold() {
    return
  },
}
