let currentSound = null

function toggleSound(file) {
  if (currentSound) {
    currentSound.pause()
    currentSound.currentTime = 0
    currentSound = null
  } else {
    currentSound = new Audio(file)
    currentSound.play()
  }
}

function forestSound() {
  toggleSound("./sounds/forest.wav")
}

function cloudySound() {
  toggleSound("./sounds/cloudy.wav")
}

function cafeSound() {
  toggleSound("./sounds/cafe.wav")
}

function fireSound() {
  toggleSound("./sounds/fire.wav")
}

export { forestSound, cloudySound, fireSound, cafeSound }
