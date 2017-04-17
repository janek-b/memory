var Memory = require('../js/memory.js').memoryModule;

$(function() {
  var hiddenImg = "http://media-hearth.cursecdn.com/attachments/39/684/cardback_20.png";
  var memoryGame = new Memory();
  var cards = memoryGame.getCards(5);

  var insertImg = function(src) {
    return "<img src='"+src+"'/>"
  }

  var correctGuesses = 0;
  var clicks = [];
  var reveal = function(index) {
    if (clicks.length === 0) {
      clicks.push(index)
      $("#card"+(index)).html(insertImg(cards[index]));
    } else if (clicks.length === 1) {
      clicks.push(index)
      if (cards[clicks[0]] === cards[index]) {
        $("#card"+(index)).html(insertImg(cards[index]));
        $("#card"+(index)).off("click");
        $("#card"+(clicks[0])).off("click");
        correctGuesses += 2;
        if (correctGuesses === cards.length) {
          var won = setTimeout(function() {
            alert("you WOn");
          }, 100)
        }
        clicks = [];
      } else {
        $("#card"+(index)).html(insertImg(cards[index]));
        var reset = setTimeout(function() {
          $("#card"+(index)).html(insertImg(hiddenImg));
          $("#card"+(clicks[0])).html(insertImg(hiddenImg));
          clicks = [];
        }, 1000);
      }
    }

  }

  for (var i = 0; i < cards.length; i++) {
    $("#card"+i).html(insertImg(hiddenImg));
    $("#card"+i).attr("data-index", i);
    $("#card"+i).click(function() {
      reveal($(this).attr("data-index"))
    })
  }
})
