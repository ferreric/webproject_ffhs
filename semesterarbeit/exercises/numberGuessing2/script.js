const numberButton = document.getElementById('btnStart')
let randNumber = 0
const inputField = document.getElementById('inpGuess')
numberButton.addEventListener('click', () => {
    randNumber = Math.floor(Math.random() * 100)
    console.log(randNumber)
    inputField.removeAttribute('disabled') // input textfeld aktivieren
    inputField.value = ""
    feedback.innerText = "Nummer nicht gesetzt"
})

const guessButton = document.getElementById('btnGuess')
inputField.addEventListener('input', () => {
    guessButton.removeAttribute('disabled') // enable button if text was entered
})

const feedback = document.getElementById('spnFeedback')
guessButton.addEventListener('click', ()=>{
    console.log(parseInt(inputField.value))
    console.log(parseInt(inputField.value) === randNumber)
    if (parseInt(inputField.value) === randNumber) {
        feedback.innerText = "Du hast die Zahl erraten!"
    }
    else if ((parseInt(inputField.value) < randNumber)){
        feedback.innerText = "Deine Zahl ist zu klein"
    }
    else feedback.innerText = 'Deine Zahl ist zu groß'
})
