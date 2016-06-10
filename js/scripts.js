// Back End

function countDown(inputNumber){
  for (var index = 1; index <= inputNumber; index += 1){
    $("#results").append("<li>" + isDivisible(index) + " </li>");
  }
}

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
    $("#results li").remove();

    var inputNumber = parseInt($("input#input-number").val());
    var result = countDown(inputNumber);

    // var result = isDivisible(inputNumber);
    //
    // $("#result").text(result);

    $("#result").fadeIn();
  });
});
