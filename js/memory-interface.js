


$(function() {
  var words = ["tony", "tony", "todd", "todd", "janet", "janet", "megan", "megan", "alfred", "alfred"];
  var hiddenArray = [];
  for (var i = 1; i < 11; i++) {
    hiddenArray.push("hidden")
  }


  var clicks = [];
  var reveal = function(index) {
    if (clicks.length < 1) {
      clicks.push(index)
      $("#card"+(index)).text(words[index]);
    } else {
      if (words[clicks[0]] === words[index]) {
        $("#card"+(index)).text(words[index]);
        $("#card"+(index)).off("click");
        $("#card"+(clicks[0])).off("click");
        clicks = [];
      } else {
        $("#card"+(index)).text(words[index]);
        var reset = setTimeout(function() {
          $("#card"+(index)).text("hidden");
          $("#card"+(clicks[0])).text("hidden");
          clicks = [];
        }, 1000);
      }
    }
  }

  for (var i = 0; i < hiddenArray.length; i++) {
    $("#card"+i).text(hiddenArray[i]);
    $("#card"+i).attr("data-index", i);
    $("#card"+i).click(function() {
      reveal($(this).attr("data-index"))
    })
  }
})
