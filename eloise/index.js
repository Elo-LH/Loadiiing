window.addEventListener('DOMContentLoaded', function () {
  //header burger menu
  let navbar = document.getElementById('navbar')
  let burgerIcon = document.getElementById('burger-icon')
  burgerIcon.addEventListener('click', toggleBurgerMenu)

  function toggleBurgerMenu() {
    console.log('enter toggle')
    navbar.classList.toggle('burger-display')
  }
  //music click
  let ukuChords = document.getElementById('ukulele-chords')
  let bassChords = document.getElementById('bass-chords')
  ukuChords.addEventListener('click', makeUkuSound)
  bassChords.addEventListener('click', makeBassSound)
  function makeUkuSound() {
    let random = Math.floor(Math.random() * 4) + 1
    switch (random) {
      case 1:
        var audio = new Audio('./assets/uku-1.mp3')
        break
      case 2:
        var audio = new Audio('./assets/uku-2.mp3')
        break
      case 3:
        var audio = new Audio('./assets/uku-3.mp3')
        break
      case 4:
        var audio = new Audio('./assets/uku-4.mp3')
        break
    }
    audio.play()
  }
  function makeBassSound() {
    let random = Math.floor(Math.random() * 4) + 1
    switch (random) {
      case 1:
        var audio = new Audio('./assets/bass-1.mp3')
        break
      case 2:
        var audio = new Audio('./assets/bass-2.mp3')
        break
      case 3:
        var audio = new Audio('./assets/bass-3.mp3')
        break
      case 4:
        var audio = new Audio('./assets/bass-4.mp3')
        break
    }
    audio.play()
  }

  //aim game
  let score = 0
  let timer = 30
  let count = ''
  const gameContainer = document.getElementById('game-container')
  let scoreElement = document.getElementById('score-value')
  let timerElement = document.getElementById('timer-value')
  function startGame() {
    resetGame()
    count = setInterval(updateTimer, 1000)
    createTarget()
  }

  function createTarget() {
    const target = document.createElement('div')
    target.className = 'target'
    target.style.left = `${Math.random() * (gameContainer.clientWidth - 50)}px`
    target.style.top = `${Math.random() * (gameContainer.clientHeight - 50)}px`
    target.addEventListener('click', hitTarget)
    gameContainer.appendChild(target)
  }

  function hitTarget() {
    console.log(scoreElement)
    score++
    scoreElement.textContent = score
    this.remove() // Remove clicked target
    createTarget() // Create a new target
  }

  function updateTimer() {
    timer--
    timerElement.textContent = timer
    if (timer <= 0) {
      endGame()
    }
  }

  function endGame() {
    alert(`Game Over! Your score is ${score}`)
    resetGame()
  }

  function resetGame() {
    score = 0
    timer = 30
    scoreElement.textContent = score
    timerElement.textContent = timer + 's'
    gameContainer.innerHTML = '' // Clear all targets
    //Regenerate score and timer
    let scoreDiv = document.createElement('div')
    scoreDiv.innerText = 'Score: '
    scoreDiv.setAttribute('id', 'score')
    let timerDiv = document.createElement('div')
    timerDiv.innerText = 'Time: '
    timerDiv.setAttribute('id', 'timer')
    let scoreSpan = document.createElement('span')
    scoreSpan.setAttribute('id', 'score-value')
    scoreSpan.innerText = '0'
    let timerSpan = document.createElement('span')
    timerSpan.setAttribute('id', 'timer-value')
    timerSpan.innerText = '30'
    scoreDiv.appendChild(scoreSpan)
    timerDiv.appendChild(timerSpan)
    gameContainer.appendChild(timerDiv)
    gameContainer.appendChild(scoreDiv)
    if (count !== '') {
      clearInterval(count)
    }
    scoreElement = document.getElementById('score-value')
    timerElement = document.getElementById('timer-value')
    console.log(scoreElement)
  }
  const startButton = document.getElementById('aim-start')
  startButton.addEventListener('click', startGame)
  //end of DOMloaded function
})
