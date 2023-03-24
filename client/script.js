import { CheckAnswer } from './checkAnswer.js'

let body = document.querySelector('body')
body.innerHTML = ''

let playButton = document.createElement('button')
playButton.addEventListener('click', Game)
playButton.classList.add('playButton')
playButton.textContent = 'You want to play? Lets play!'

body.append(playButton)

function Game() {
  fetch('http://localhost:3000/questions/')
    .then((response) => response.json())
    .then((data) => {
      let i = 0
      //     data.forEach((afsd) => {
      //       console.log(data)
      //       let answer1 = data[i].options[0].text
      //       let answer1IsCorrect = data[i].options[0].isCorrect
      //       let answer2 = data[i].options[1].text
      //       let answer2IsCorrect = data[i].options[1].isCorrect
      //       let answer3 = data[i].options[2].text
      //       let answer3IsCorrect = data[i].options[2].isCorrect
      //       let answer4 = data[i].options[3].text
      //       let answer4IsCorrect = data[i].options[3].isCorrect

      //       let question = data[i].question
      //       body.innerHTML = `
      //   <div class="container">
      //   <Title>QUIZ UP</Title>
      //   <div class="questionBox">${question}</div>
      //   <div class="answers">
      //     <div class="buttons">
      //       <button id="button-1" role="button">
      //         ${answer1}
      //       </button>
      //       <button id="button-2" role="button">
      //         ${answer2}
      //       </button>
      //     </div>
      //     <div class="buttons">
      //       <button id="button-3" role="button">
      //         ${answer3}
      //       </button>
      //       <button id="button-4" role="button">
      //         ${answer4}
      //       </button>
      //     </div>
      //   </div>
      // </div>
      //   `
      //       let checkAnswer1 = document.getElementById('button-1')
      //       checkAnswer1.addEventListener('click', () =>
      //         CheckAnswer(answer1IsCorrect)
      //       )

      //       let checkAnswer2 = document.getElementById('button-2')
      //       checkAnswer2.addEventListener('click', () =>
      //         CheckAnswer(answer2IsCorrect)
      //       )

      //       let checkAnswer3 = document.getElementById('button-3')
      //       checkAnswer3.addEventListener('click', () =>
      //         CheckAnswer(answer3IsCorrect)
      //       )

      //       let checkAnswer4 = document.getElementById('button-4')
      //       checkAnswer4.addEventListener('click', () =>
      //         CheckAnswer(answer4IsCorrect)
      //       )
      //     })
      console.log(data)
      let answer1 = data[0].options[0].text
      let answer1IsCorrect = data[0].options[0].isCorrect
      let answer2 = data[0].options[1].text
      let answer2IsCorrect = data[0].options[1].isCorrect
      let answer3 = data[0].options[2].text
      let answer3IsCorrect = data[0].options[2].isCorrect
      let answer4 = data[0].options[3].text
      let answer4IsCorrect = data[0].options[3].isCorrect

      let question = data[0].question
      body.innerHTML = `
        <div class="container">
        <Title>QUIZ UP</Title>
        <div class="questionBox">${question}</div>
        <div class="answers">
          <div class="buttons">
            <button id="button-1" role="button">
              ${answer1}
            </button>
            <button id="button-2" role="button">
              ${answer2}
            </button>
          </div>
          <div class="buttons">
            <button id="button-3" role="button">
              ${answer3}
            </button>
            <button id="button-4" role="button">
              ${answer4}
            </button>
          </div>
        </div>
      </div>
        `
      let checkAnswer1 = document.getElementById('button-1')
      checkAnswer1.addEventListener('click', () =>
        CheckAnswer(answer1IsCorrect)
      )

      let checkAnswer2 = document.getElementById('button-2')
      checkAnswer2.addEventListener('click', () =>
        CheckAnswer(answer2IsCorrect)
      )

      let checkAnswer3 = document.getElementById('button-3')
      checkAnswer3.addEventListener('click', () =>
        CheckAnswer(answer3IsCorrect)
      )

      let checkAnswer4 = document.getElementById('button-4')
      checkAnswer4.addEventListener('click', () =>
        CheckAnswer(answer4IsCorrect)
      )
    })
}
