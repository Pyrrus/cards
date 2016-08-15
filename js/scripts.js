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

function hearts(have) {
  if (have == "suithearts")
    return true;
}
function diamonds(change) {
  if (change == "suitdiamonds")
  return true;
}
function spades(have) {
  if (have == "suitspades")
  return true;
}
function clubs(have) {
  if (have == "suitclubs")
  return true;
}
$(document).ready(function () {

  order(deck);

  deck.forEach(function(card){

    var str = card.toString();
    var array = str.split(" ");

    $(".output").append("<div class='card " + array[1] +" remove'><p>"+ array[0] + "</p></div>");
  });

  $("#sur").click(function() {
    $(".remove").remove();
    shuffleArray(deck)
    deck.forEach(function(card){
      var str = card.toString();
      var array = str.split(" ");

      $(".output").append("<div class='card " + array[1] +" remove'><p>"+ array[0] + "</p></div>");
    });
  });

  $("#order").click(function() {

    $(".remove").remove();
    order(deck);
    deck.forEach(function(card){
      var str = card.toString();
      var array = str.split(" ");

      $(".output").append("<div class='card " + array[1] +" remove'><p>"+ array[0] + "</p></div>");
    });
  });

  $("#hearts").click(function() {
    $(".remove").remove();
    deck.forEach(function(card){
      var str = card.toString();
      var array = str.split(" ");

      if (hearts(array[1]))
        $(".output").append("<div class='card " + array[1] +" remove'><p>"+ array[0] + "</p></div>");
    });
  });
  $("#diamonds").click(function() {
    $(".remove").remove();
    deck.forEach(function(card){
      var str = card.toString();
      var array = str.split(" ");

      if (diamonds(array[1]))
        $(".output").append("<div class='card " + array[1] +" remove'><p>"+ array[0] + "</p></div>");
    });
  });
  $("#spades").click(function() {
    $(".remove").remove();
    deck.forEach(function(card){
      var str = card.toString();
      var array = str.split(" ");

      if (spades(array[1]))
        $(".output").append("<div class='card " + array[1] +" remove'><p>"+ array[0] + "</p></div>");
    });
  });
  $("#clubs").click(function() {
    $(".remove").remove();
    deck.forEach(function(card){
      var str = card.toString();
      var array = str.split(" ");

      if (clubs(array[1]))
        $(".output").append("<div class='card " + array[1] +" remove'><p>"+ array[0] + "</p></div>");
    });
  });
});
