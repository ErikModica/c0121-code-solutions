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

var deck = [
  {
    rank: 1,
    suit: 'hearts'
  },
  {
    rank: 2,
    suit: 'hearts'
  },
  {
    rank: 3,
    suit: 'hearts'
  },
  {
    rank: 4,
    suit: 'hearts'
  },
  {
    rank: 5,
    suit: 'hearts'
  },
  {
    rank: 6,
    suit: 'hearts'
  },
  {
    rank: 7,
    suit: 'hearts'
  },
  {
    rank: 8,
    suit: 'hearts'
  },
  {
    rank: 9,
    suit: 'hearts'
  },
  {
    rank: 10,
    suit: 'hearts'
  },
  {
    rank: 'jack',
    suit: 'hearts'
  },
  {
    rank: 'queen',
    suit: 'hearts'
  },
  {
    rank: 'king',
    suit: 'hearts'
  },
  {
    rank: 'ace',
    suit: 'hearts'
  },
  {
    rank: 1,
    suit: 'clubs'
  },
  {
    rank: 2,
    suit: 'clubs'
  },
  {
    rank: 3,
    suit: 'clubs'
  },
  {
    rank: 4,
    suit: 'clubs'
  },
  {
    rank: 5,
    suit: 'clubs'
  },
  {
    rank: 6,
    suit: 'clubs'
  },
  {
    rank: 7,
    suit: 'clubs'
  },
  {
    rank: 8,
    suit: 'clubs'
  },
  {
    rank: 9,
    suit: 'clubs'
  },
  {
    rank: 10,
    suit: 'clubs'
  },
  {
    rank: 'jack',
    suit: 'clubs'
  },
  {
    rank: 'queen',
    suit: 'clubs'
  },
  {
    rank: 'king',
    suit: 'clubs'
  },
  {
    rank: 'ace',
    suit: 'clubs'
  },
  {
    rank: 1,
    suit: 'daimonds'
  },
  {
    rank: 2,
    suit: 'daimonds'
  },
  {
    rank: 3,
    suit: 'daimonds'
  },
  {
    rank: 4,
    suit: 'daimonds'
  },
  {
    rank: 5,
    suit: 'daimonds'
  },
  {
    rank: 6,
    suit: 'daimonds'
  },
  {
    rank: 7,
    suit: 'daimonds'
  },
  {
    rank: 8,
    suit: 'daimonds'
  },
  {
    rank: 9,
    suit: 'daimonds'
  },
  {
    rank: 10,
    suit: 'daimonds'
  },
  {
    rank: 'jack',
    suit: 'daimonds'
  },
  {
    rank: 'queen',
    suit: 'daimonds'
  },
  {
    rank: 'king',
    suit: 'daimonds'
  },
  {
    rank: 'ace',
    suit: 'daimonds'
  },
  {
    rank: 1,
    suit: 'spades'
  },
  {
    rank: 2,
    suit: 'spades'
  },
  {
    rank: 3,
    suit: 'spades'
  },
  {
    rank: 4,
    suit: 'spades'
  },
  {
    rank: 5,
    suit: 'spades'
  },
  {
    rank: 6,
    suit: 'spades'
  },
  {
    rank: 7,
    suit: 'spades'
  },
  {
    rank: 8,
    suit: 'spades'
  },
  {
    rank: 9,
    suit: 'spades'
  },
  {
    rank: 10,
    suit: 'spades'
  },
  {
    rank: 'jack',
    suit: 'spades'
  },
  {
    rank: 'queen',
    suit: 'spades'
  },
  {
    rank: 'king',
    suit: 'spades'
  },
  {
    rank: 'ace',
    suit: 'spades'
  }
];

deck = _.shuffle(deck);

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
