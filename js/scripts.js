var suits = ["of Spades","of Clubs","of Hearts","of Diamonds"];
var types = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

var deck = [];

order = function() {
  deck = [];
  suits.forEach(function (suit) {
    types.forEach(function (type) {
      deck.push(type + " " + suit);
    })
 });
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

$(document).ready(function () {

  order(deck);

  deck.forEach(function(card){
    $('#output').append("<li class='remove'>" + card + "</li>");
  });

  $("#sur").click(function() {
    $(".remove").remove();
    shuffleArray(deck)
    deck.forEach(function(card){
      $('#output').append("<li class='remove'>" + card + "</li>");
    });
  });

  $("#order").click(function() {

    $(".remove").remove();
    order(deck);
    deck.forEach(function(card){
      $('#output').append("<li class='remove'>" + card + "</li>");
    });
  })
});
