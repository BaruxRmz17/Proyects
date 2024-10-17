const cards = [
'Diversidad', 'Diversidad',
'Compostaje', 'Compostaje',
'Rotación', 'Rotación',
'Polinizadores', 'Polinizadores',
'Agroforestería', 'Agroforestería',
'Biodiversidad', 'Biodiversidad'
];


let firstCard = null;
let secondCard = null;
let matchedCards = 0;


const gameBoard = document.getElementById('game-board');
const message = document.getElementById('message');


function shuffle(array) {
return array.sort(() => Math.random() - 0.5);
}


function createBoard() {
gameBoard.innerHTML = '';
const shuffledCards = shuffle([...cards]);


shuffledCards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.textContent = '?';
    cardElement.dataset.cardValue = card;


    cardElement.addEventListener('click', flipCard);
    gameBoard.appendChild(cardElement);
});
}


function flipCard() {
if (firstCard && secondCard) return;
this.classList.add('flipped');
this.textContent = this.dataset.cardValue;


    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        checkMatch();
    }
 }
 
 
 function checkMatch() {
    if (firstCard.dataset.cardValue === secondCard.dataset.cardValue) {
        matchedCards++;
        resetCards();
        if (matchedCards === cards.length / 2) {
            message.textContent = '¡Felicidades, encontraste todos los pares!';
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.textContent = '?';
            secondCard.textContent = '?';
            resetCards();
        }, 1000);
    }
 }
 
 
function resetCards() {
firstCard = null;
secondCard = null;
}


document.getElementById('restart-btn').addEventListener('click', () => {
matchedCards = 0;
message.textContent = '';
createBoard();
});


createBoard();

 
 
 
 
 
 