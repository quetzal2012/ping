//back
function pingPong(userInput){
var result = [];
for (var i = 1; i <= userInput; i++){
  if ((i % 15) === 0){
    result.push ("Ping-Pong!");
  } else if ((i % 5) === 0){
    result.push ("Pong!");
  } else if ((i % 3) === 0){
    result.push ("Ping!");
  } else
    result.push (i);
}
return result;
}

//front
$(document).ready(function() {
  $("form#formPing").submit(function(event) {
    $("#userAnswer").empty();
    var userInput = parseInt($("input#num").val());
    var result = pingPong(userInput);
    result.forEach(function(output) {
    $("#userAnswer").append("<li>" + output + "</li>");
    event.preventDefault();
  });
});
});
