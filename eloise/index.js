window.addEventListener('DOMContentLoaded', function () {
  const gameContainer = document.getElementById('game-container')
  const scoreElement = document.getElementById('score-value')
  const timerElement = document.getElementById('timer-value')
  const startButton = document.getElementById('aim-start')

  let score = 0
  let timer = 30
  function startGame() {
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
    timerElement.textContent = timer + 's'

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
    startGame()
  }

  startButton.addEventListener('click', startGame)
  //end of DOMloaded function
})
