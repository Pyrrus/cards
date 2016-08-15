var suits = ["suitspades","suitclubs","suithearts","suitdiamonds"];
var types = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

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

function same(have, need) {
  if (have == "suit" + need)
    return true;
}

$(document).ready(function () {

  order(deck);

  deck.forEach(function(card){
    var str = card.toString();
    var array = str.split(" ");

    $(".output").append("<div class='card " + array[1] +" remove'><p>"+ array[0] + "</p></div>");
  });

  $("a").click(function() {
    $(".remove").remove();
    var data = $(this).attr('id');

    var small = true;

    if (data === "sur") {
      shuffleArray(deck);
      small = false;
    } else if (data === "order") {
      order(deck);
      small = false;
    }
    
    deck.forEach(function(card){
      var str = card.toString();
      var array = str.split(" ");
      if (same(array[1], data) && small === true) {
        $(".output").append("<div class='card " + array[1] +" remove'><p>"+ array[0] + "</p></div>");
      }

      if (small === false) {
        $(".output").append("<div class='card " + array[1] +" remove'><p>"+ array[0] + "</p></div>");
      }
    });
  });

});
