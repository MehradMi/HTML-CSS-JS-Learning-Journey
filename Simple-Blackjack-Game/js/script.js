
let cardsSum = 0;
let cards = [];

let message = "";
let cardsMessage = "Cards: ";
let cardsSumMessage = "Sum: ";

let hasBlackJack = false;
let isAlive = true;

let messageEl = document.querySelector("#message-el");
let cardsEl   = document.querySelector("#cards-el");
let sumEl     = document.querySelector("#sum-el");
let playerEl  = document.getElementById("player-el");

let player = {
    name: "You",
    chips: 145
}

playerEl.textContent = player.name + ": $" + player.chips;

let genRandomNumber  = (min, max) => {
    const minCeiled  = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let randomNumber = Math.floor( Math.random() * (maxFloored - minCeiled + 1) + minCeiled );
    
    console.log(randomNumber);
    
    if (randomNumber > 10 && randomNumber <= 13) {
        randomNumber = 10;
    } else if (randomNumber === 1) {
        randomNumber = 11;
    }

    return randomNumber;
};

function drawCard() {
    let card = genRandomNumber(1, 13);
    return card;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = drawCard();
        cards.push(newCard);
        renderGame();
        return;
    }
    
    if (hasBlackJack) {
        alert("You Can't Draw a New Card Since You Got a Blackjack Already!");
        return;
    }

    alert("You Can't Draw a New Card! You've Lost!");
    return;
}

function resetMessages() {
    cardsMessage = "Cards: ";
    cardsSumMessage = "Sum: ";

    cardsEl.textContent = cardsMessage;
    sumEl.textContent   = cardsSumMessage;
}

function resetSum() { 
    cardsSum = 0; 
}

function resetOtherValues() {
    cards = [];
    hasBlackJack = false;
    isAlive = true;
}

function resetGame() { 
    resetOtherValues();
    resetSum();
    resetMessages();
}

function startGame() { 
    resetGame();
    
    let firstCard  = drawCard();
    let secondCard = drawCard();
    cards.push(firstCard);
    cards.push(secondCard);

    renderGame();
}

function renderGame() {
    
    resetSum();
    resetMessages();
    
    cards.forEach( function(value, ) {
        cardsMessage += (value + " ");
        cardsSum += value; 
    })
    
    cardsSumMessage += cardsSum;
    
    cardsEl.textContent = cardsMessage;
    sumEl.textContent   = cardsSumMessage;

    if (cardsSum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (cardsSum === 21) {
        message = "Wohooo! You've got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false
    }
    messageEl.textContent = message;
}
