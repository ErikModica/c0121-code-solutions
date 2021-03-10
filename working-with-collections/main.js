console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Gerald',
    hand: [],
    score: 0
  },
  {
    name: 'Garry',
    hand: [],
    score: 0
  },
  {
    name: 'Geoff',
    hand: [],
    score: 0
  },
  {
    name: 'Greg',
    hand: [],
    score: 0
  }
];

function createDeck() {
  const deck = [];
  let currentSuit = 'hearts';
  for (let j = 0; j < 4; j++) {
    for (let i = 2; i <= 14; i++) {
      if (i <= 10) {
        deck.push({ rank: i, suit: currentSuit });
      } else if (i === 11) {
        deck.push({ rank: 'jack', suit: currentSuit });
      } else if (i === 12) {
        deck.push({ rank: 'queen', suit: currentSuit });
      } else if (i === 13) {
        deck.push({ rank: 'king', suit: currentSuit });
      } else {
        deck.push({ rank: 'ace', suit: currentSuit });
      }
    }
    if (j === 0) {
      currentSuit = 'clubs';
    } else if (j === 1) {
      currentSuit = 'diamonds';
    } else if (j === 2) {
      currentSuit = 'spades';
    }
  }
  return deck;
}

const deck = _.shuffle(createDeck());

function dealTwoCards() {
  var cardReceiver = 0;
  for (var i = 0; i < players.length * 2; i++) {
    if (cardReceiver === 4) {
      cardReceiver = 0;
    }
    players[cardReceiver].hand.push(deck[i]);
    cardReceiver++;
  }
}

function countScore() {
  var playerScore = 0;
  var cardNum = 0;
  for (var i = 0; i < players.length; i++) {

    while (cardNum < 2) {

      if (typeof players[i].hand[cardNum].rank === 'number') {
        playerScore += players[i].hand[cardNum].rank;
      } else if (players[i].hand[cardNum].rank === 'jack' || players[i].hand[cardNum].rank === 'queen' || players[i].hand[cardNum].rank === 'king') {
        playerScore += 10;
      } else {
        playerScore += 11;
      }
      cardNum++;
    }
    cardNum = 0;
    players[i].score = playerScore;
    playerScore = 0;
  }
}

function decideWinner() {
  var winner = null;
  var currentScore = 0;
  for (var i = 0; i < players.length; i++) {
    if (currentScore > players[i].score) {
      winner = currentScore;
    } else if (currentScore < players[i].score) {
      winner = players[i].score;
      currentScore = winner;
    }
  }

  for (i = 0; i < players.length; i++) {
    if (winner === players[i].score) {
      console.log(players[i].name + ' has won the hand with ' + winner + ' points!');
    }
  }
}

dealTwoCards();

countScore();

decideWinner();
