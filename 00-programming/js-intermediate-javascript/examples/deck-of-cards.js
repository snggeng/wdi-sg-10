var Card = function(opt) {
  this.suit = opt.suit;
  this.value = opt.value;
  this.color = opt.color;
}

var Deck = function() {
  this.cards = [];
  this.discardPile = [];
}

Deck.prototype.generateCards = function(suit, color) {
  for (var i=1; i<14; i++) {
    var card = new Card({
      suit: suit,
      color: color,
      value: i
    });
    this.cards.push(card);
  }
}

Deck.prototype.create = function() {
  this.generateCards("Spades", "Black");
  this.generateCards("Hearts", "Red");
  this.generateCards("Clubs", "Black");
  this.generateCards("Diamonds", "Red");
  this.shuffle();
}

// Dirty code!!
Deck.prototype.shuffle = function() {
  var o = this.cards;
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  this.cards = o;
}

Deck.prototype.draw = function() {
  return this.cards.pop();
}

Deck.prototype.discard = function(card) {
  this.discardPile.unshift(card);
}

var deck = new Deck();
deck.create();

var card = deck.draw();
console.log(card.suit, card.color, card.value);

deck.discard(card);
console.log(deck.discardPile);
