/*
 * Generates a random integer from min to max.
 */
function randint(min, max) {
  return Math.round(min + Math.random() * (max - min));
}
let index = 0;
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
    let currentCard = this.cards[index];
    index++;
    return currentCard;
  }

   stand(){
    let card;
        for(let i=0; i < index; i++) {
          card = document.getElementById('card'+ i);
          if (card.classList.contains("face-revers")){
            card.className = `card face-${cards[i].rank}-of-${cards[i].suit}`;
          }
          
        }
       
        
 /*    let scoredealer = document.getElementById('scoredealer');
    scoredealer.innerHTML = "";
    scoredealer.innerHTML = "Score: " + this.dealerScore;  */
   }

  calValue(dealer, player){
    if (this.playerScore <= 21){
       this.playerScore += player;
    } else {
      stand();
    }

    if (this.dealerScore <= 17){
       this.dealerScore += dealer;
    } else{
      stand();
    }

    let score = document.getElementById('score');
        score.innerHTML = "";
        score.innerHTML = "Score: " + this.playerScore; 
     
    
  } 



  displayCards() {
    let currentCard = this.getCards();
    let nextCard = this.getCards();
    this.calValue(currentCard.value, nextCard.value);
    let dealerCards = document.getElementById('dealer_cards');
    let playerCards = document.getElementById('player_cards');
    let game = document.getElementById('game');
    bet.style.display = 'none';
    game.style.display = 'block';
    if(index === 4){
      dealerCards.innerHTML += `<div id="card${index}" class="card face-revers"></div>`;  
    } else {
      dealerCards.innerHTML += `<div id="card${index}" class="card face-${currentCard.rank}-of-${currentCard.suit}"></div>`;
    }
    playerCards.innerHTML += `<div id="card${index}" class="card face-${nextCard.rank}-of-${nextCard.suit}"></div>`;
    
  }
  hit(){
    this.displayCards();
  }
  
}
