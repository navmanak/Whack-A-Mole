const squares = document.querySelectorAll('.square');
const score = document.querySelector('.score')
const timeLeft = document.querySelector('.time-left')
const mole = document.querySelector('.mole')

let result = 0
let hitPosition
let currentTime = 60
let timeId = null;
function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id
} 

squares.forEach(square =>{
    square.addEventListener('mousedown', ()=>{
        if(square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition =null
        }
    })
})

function moveMole() {
    timeId = setInterval(randomSquare,500)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if(currentTime ==0){
        clearInterval(timeId)
        clearInterval(countDownTimerId)
        alert("Times Up!!!\nYour Final Score is "+result)
    }
}
let countDownTimerId = setInterval(countDown, 1000)