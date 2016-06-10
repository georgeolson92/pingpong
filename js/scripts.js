// Back End

function countDown(inputNumber, resultList){
  for (var index = 1; index <= inputNumber; index += 1){
    $(resultList).append("<li>" + isDivisible(index) + " </li>");
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
    $(".alertmsg").remove();
    $("#results li").remove();

    var inputNumber = parseInt($("input#input-number").val());

    if (inputNumber !== inputNumber){
      $(".form-group").append("<span class='alertmsg'>Please enter a valid number.</span>");
      return false;
    } else if (inputNumber < 0){
      $(".form-group").append("<span class='alertmsg'>Please enter a positive integer.</span>");
      return false;
    } 

    var result = countDown(inputNumber, "#results");
    $("#result-full").fadeIn();
  });
});
