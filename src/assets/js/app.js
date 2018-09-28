
function play() {
  const deck = new Deck();
  deck.shuffle();
  console.log(deck);
  let startBtn = document.getElementById('betBtn');
  let stand = document.getElementById('stand');
  let hit = document.getElementById('hit');
  startBtn.addEventListener('click', () => {
    deck.index = 0;
    deck.hit();
  });
  hit.addEventListener('click', () => {
    deck.hit();
  });
  stand.addEventListener('click', () => {
    if(deck.index === 4){
      deck.stand();
    } else {
      deck.reveal();
    }
  });
}


document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards
   play();
});
