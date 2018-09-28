/*
 * Generates a random integer from min to max.
 */
function randint(min, max) {
  return Math.round(min + Math.random() * (max - min));
}
let bet = document.getElementById('bet');
/*
 * The deck of cards to deal from.
 */
class Deck {
  constructor() {
    this.cards = [
      new Card('ace', 'clubs', 11),
      new Card('2', 'clubs', 2),
      new Card('3', 'clubs', 3),
      new Card('4', 'clubs', 4),
      new Card('5', 'clubs', 5),
      new Card('6', 'clubs', 6),
      new Card('7', 'clubs', 7),
      new Card('8', 'clubs', 8),
      new Card('9', 'clubs', 9),
      new Card('10', 'clubs', 10),
      new Card('jack', 'clubs', 10),
      new Card('queen', 'clubs', 10),
      new Card('king', 'clubs', 10),
      new Card('ace', 'hearts', 11),
      new Card('2', 'hearts', 2),
      new Card('3', 'hearts', 3),
      new Card('4', 'hearts', 4),
      new Card('5', 'hearts', 5),
      new Card('6', 'hearts', 6),
      new Card('7', 'hearts', 7),
      new Card('8', 'hearts', 8),
      new Card('9', 'hearts', 9),
      new Card('10', 'hearts', 10),
      new Card('jack', 'hearts', 10),
      new Card('queen', 'hearts', 10),
      new Card('king', 'hearts', 10),
      new Card('ace', 'spades', 11),
      new Card('2', 'spades', 2),
      new Card('3', 'spades', 3),
      new Card('4', 'spades', 4),
      new Card('5', 'spades', 5),
      new Card('6', 'spades', 6),
      new Card('7', 'spades', 7),
      new Card('8', 'spades', 8),
      new Card('9', 'spades', 9),
      new Card('10', 'spades', 10),
      new Card('jack', 'spades', 10),
      new Card('queen', 'spades', 10),
      new Card('king', 'spades', 10),
      new Card('ace', 'diamonds', 11),
      new Card('2', 'diamonds', 2),
      new Card('3', 'diamonds', 3),
      new Card('4', 'diamonds', 4),
      new Card('5', 'diamonds', 5),
      new Card('6', 'diamonds', 6),
      new Card('7', 'diamonds', 7),
      new Card('8', 'diamonds', 8),
      new Card('9', 'diamonds', 9),
      new Card('10', 'diamonds', 10),
      new Card('jack', 'diamonds', 10),
      new Card('queen', 'diamonds', 10),
      new Card('king', 'diamonds', 10),
    ];
    this.playerScore = 0;
    this.dealerScore = 0;
    this.dead = false;
    this.index = 0;
    this.betValue = 0;
  }

  /*
   * Fisher–Yates shuffle of the cards in the deck.
   */
  shuffle() {
    for(let i = 0; i < this.cards.length - 1; i++) {
      let j = randint(i, this.cards.length - 1);
      let swap = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = swap;
    }
  }
  getCards() {
    let currentCard = this.cards[this.index];
    this.index++;
    return currentCard;
  }
  newGame(){
    let dealerCards = document.getElementById('dealer_cards');
    let playerCards = document.getElementById('player_cards');
    let game = document.getElementById('game');
    game.style.display = 'none';
    dealerCards.innerHTML = '';
    playerCards.innerHTML = '';
    bet.style.display = 'block';
    this.index = 0;
  }

  result(num){
    let result = document.getElementById('result');
    this.betValue = parseInt(document.getElementById('betValue').value);
    console.log(this.betValue);
    if(this.dealerScore > this.playerScore && this.dealerScore <= 21){
      this.betValue = 0;
      result.innerHTML = `<p class=\'result-text\'>The Dealer won.You balance is ${this.betValue}.</p>`;
    } else if(this.dealerScore < this.playerScore && this.playerScore <= 21){
      this.betValue *= 2; 
      result.innerHTML = `<p class=\'result-text\'>You won.You balance is ${this.betValue}.</p>`;
    } else if(this.dealerScore === this.playerScore){
      result.innerHTML = '<p class=\'result-text\'>It is tie.</p>';
    } else if(this.dealerScore < this.playerScore && this.playerScore >= 21) {
      this.betValue = 0;
      result.innerHTML = `<p class=\'result-text\'>The Dealer won. You balance is ${this.betValue}.</p>`;
    } else if(this.playerScore === num) {
      this.betValue *= 1.5; 
      result.innerHTML = `<p class=\'result-text\'>BlackJack.You balance is ${this.betValue}.</p>`;
    } else if(this.dealerScore > this.playerScore && this.dealerScore > 21){
      this.betValue *= 2;
      result.innerHTML = `<p class=\'result-text\'>You won.You balance is ${this.betValue}.</p>`;
    }
    result.innerHTML += `</br><button class='newBet' onclick='play()'>NEW BET</button>`;
  }

   reveal(){
    this.dead =true;
    let scoredealer = document.getElementById('scoredealer');
    scoredealer.innerHTML = "";
    scoredealer.innerHTML = "Score: " + this.dealerScore;
    let score = document.getElementById('score');
    score.innerHTML = "";
    score.innerHTML = "Score: " + this.playerScore; 
    this.result(1);
   }
   stand(){
    let card;
    console.log('stand');
    card = document.getElementById('card-reverse');
    card.className = `card face-${this.cards[2].rank}-of-${this.cards[2].suit}`;
    this.reveal();
  }
  
  calValue(dealer, player){
      this.playerScore += player;
      this.dealerScore += dealer;
    if (this.playerScore >= 21 || this.dealerScore >= 17){
      this.stand(); 
    }
    let score = document.getElementById('score');
    score.innerHTML = "";
    score.innerHTML = "Score: " + this.playerScore; 
  } 

 displayCards() {
    let currentCard = this.getCards();
    let nextCard = this.getCards();
    let dealerCards = document.getElementById('dealer_cards');
    let playerCards = document.getElementById('player_cards');
    let game = document.getElementById('game');
    bet.style.display = 'none';
    game.style.display = 'block';
    if(this.playerScore >= 21 || this.dealerScore >= 17) {
      this.stand()
    } else {
      if(this.dead === false){
        if(this.index === 4){
          dealerCards.innerHTML += `<div id="card-reverse" class="card face-revers"></div>`;  
          if(playerCards.rank === 'ace'){
            switch(this.cards[1]){
              case 'king': 
              this.result(21);
              break;
              case 'queen': 
              this.result(21);
              break;
              case 'jack': 
              this.result(21);
              break;
              case '10': 
              this.result(21);
              break;
              default:
              this.result(1);
              break;
            }
          } else if(playerCards.rank === 'king' || playerCards.rank === 'queen' || playerCards.rank === 'jack' || playerCards.rank === '10'){
              if(this.cards[1] == 'ace'){
                this.result(21);
              }
            }
        } else {
          dealerCards.innerHTML += `<div id="card${this.index}" class="card face-${currentCard.rank}-of-${currentCard.suit}"></div>`;
        }
        playerCards.innerHTML += `<div id="card${this.index}" class="card face-${nextCard.rank}-of-${nextCard.suit}"></div>`;  
        this.calValue(currentCard.value, nextCard.value); 
      }
    }
  }
  hit(){
    this.displayCards();
  }
  
}
