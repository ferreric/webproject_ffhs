const btnStart = document.getElementById('btnStart')
const btnGuess = document.getElementById('btnGuess')
const inpGuess = document.getElementById('inpGuess')
const spnFeedback = document.getElementById('spnFeedback')

let numberToGuess = 0
let maxNumber = 100

btnStart.addEventListener('click', (e) => {
    console.log('get new number')
    numberToGuess = Math.ceil(Math.random() * maxNumber)
    inpGuess.disabled = false
    btnGuess.disabled = false
    spnFeedback.innerText = 'Rate die Zahl'
})

btnGuess.addEventListener('click', (e) => {
    let guess = Number(inpGuess.value)

    if(guess === numberToGuess){
        spnFeedback.innerText = `Die geratene Zahl (${guess}) ist korrekt!`
    }else{
        if(guess > numberToGuess){
            spnFeedback.innerText = `Die geratene Zahl (${guess}) ist zu hoch!`
        }else{
            spnFeedback.innerText = `Die geratene Zahl (${guess}) ist zu tief!`
        }
    }
})
