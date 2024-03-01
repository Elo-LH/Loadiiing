window.addEventListener('DOMContentLoaded', function () {
  //header burger menu
  let navbar = document.getElementById('navbar')
  let burgerIcon = document.getElementById('burger-icon')
  burgerIcon.addEventListener('click', toggleBurgerMenu)

  function toggleBurgerMenu() {
    console.log('enter toggle')
    navbar.classList.toggle('burger-display')
  }

  let score = 0
  let timer = 30
  function startGame() {
    resetGame()
    setInterval(updateTimer, 1000)
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
    const gameContainer = document.getElementById('game-container')
    score = 0
    timer = 30
    scoreElement.textContent = score
    timerElement.textContent = timer + 's'
    gameContainer.innerHTML = '' // Clear all targets
    //Regenerate score and timer
    let scoreDiv = document.createElement('div')
    scoreDiv.innerText = 'Score: '
    scoreDiv.id = 'score'
    let timerDiv = document.createElement('div')
    timerDiv.innerText = 'Time: '
    timerDiv.id = 'timer'
    let scoreSpan = document.createElement('span')
    scoreSpan.classList.add('score-value')
    scoreSpan.innerText = '0'
    let timerSpan = document.createElement('span')
    timerSpan.classList.add('timer-value')
    timerSpan.innerText = '30'
    scoreDiv.appendChild(scoreSpan)
    timerDiv.appendChild(timerSpan)
    gameContainer.appendChild(timerDiv)
    gameContainer.appendChild(scoreDiv)

    const scoreElement = document.getElementById('score-value')
    const timerElement = document.getElementById('timer-value')
    const startButton = document.getElementById('aim-start')
  }

  startButton.addEventListener('click', startGame)
  //end of DOMloaded function
})
