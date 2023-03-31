import { Game } from './script.js'

export function CheckAnswer(answer, i, answerId, answerText) {
  if (answer === true) {
    const answerchanger = document.getElementById(answerId)
    answerchanger.style = 'background-color: green'
  } else {
    const answerchanger = document.getElementById(answerId)
    answerchanger.style = 'background-color: red'
    
  }
  i++
  setTimeout(() => {
    Game(i)
  }, 500)
}
