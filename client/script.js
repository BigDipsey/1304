let body = document.querySelector('body')
body.innerHTML = ''

let playButton = document.createElement('button')
playButton.addEventListener('click', Game)
playButton.classList.add('playButton')
playButton.textContent = 'You want to play? Lets play!'

body.append(playButton)

fetch('http://localhost:3000/questions/')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })

function Game() {
  body.innerHTML = `
  <div class="container">
  <Title>QUIZ UP</Title>
  <div class="questionBox">100</div>
  <div class="answers">
    <div class="buttons">
      <button id="button-28" role="button">
        Button 1
      </button>
      <button id="button-28" role="button">
        Button 2
      </button>
    </div>
    <div class="buttons">
      <button id="button-28" role="button">
        Button 3
      </button>
      <button id="button-28" role="button">
        Button 4S
      </button>
    </div>
  </div>
</div>
  `
}
