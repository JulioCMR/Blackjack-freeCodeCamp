/* BlackJack game main JavaScript file */

//  Variables ---

let player = {
    name : "Julio",
    money : 150
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.money


// Get Random Card function ---

function getRandomCard() {
    randomCard = Math.floor(Math.random() * 13) + 1

    if (randomCard === 1) {
        return 11
    } else if (randomCard >= 11){
        return 10
    }

    return randomCard
}

// Start Game function ---

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    sum = firstCard + secondCard

    cards = [firstCard, secondCard]

    renderGame()
}

// Main game Function ---

function renderGame() {

    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] +  " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
    
    
    messageEl.textContent = message

}


// New Card Function ---

function newCard() {
    if (isAlive && hasBlackjack === false) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
        
}



