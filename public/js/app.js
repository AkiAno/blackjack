document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards
  const deck = new Deck();
  deck.shuffle();
  console.log(deck);
  let startBtn = document.getElementById('betBtn');
  let hit = document.getElementById('hit');
  startBtn.addEventListener('click', () => {
    deck.displayCards();
  });
  hit.addEventListener('click', () => {
    deck.hit();
  });
});