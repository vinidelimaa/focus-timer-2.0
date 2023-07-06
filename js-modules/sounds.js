// const allSounds = {
//   forest: new Audio("./sounds/forest.wav"),
//   cloudy: new Audio("./sounds/cloudy.wav"),
//   cafe: new Audio("./sounds/cafe.wav"),
//   fire: new Audio("./sounds/fire.wav"),
// }

// function playSound(file) {
//   allSounds[file].play()
// }

// function pauseAllAudios() {
//   for (const audio in allSounds) {
//     allSounds[audio].pause()
//   }
// }

// function forestSound() {
//   playSound("forest")
// }

// function cloudySound() {
//   playSound("cloudy")
// }

// function cafeSound() {
//   playSound("cafe")
// }

// function fireSound() {
//   playSound("fire")
// }

// export { forestSound, cloudySound, fireSound, cafeSound, pauseAllAudios }


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