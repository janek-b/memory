function Memory() {
}

Memory.prototype.getCards = function(size) {
  var cards = [];
  for (var i = 1; i <= size; i++) {
    cards.push("img/"+i+".png");
    cards.push("img/"+i+".png");
  }
  return shuffleArray(cards);
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

exports.memoryModule = Memory;
