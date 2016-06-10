// Back End

function isDivisible (inputNumber){
  if ((inputNumber % 15) === 0){
    return "pingpong"
  } else if ((inputNumber % 5) === 0){
    return "pong";
  } else if ((inputNumber % 3) === 0){
    return "ping";
  } else {
    return inputNumber;
  }
}


// Front End
$(document).ready(function(){
  $("form#pingpong").submit(function(event){
    event.preventDefault();

    var inputNumber = parseInt($("input#input-number").val());

    var result = isDivisible(inputNumber);

    $("#result").text(result);
  });
});
