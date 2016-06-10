// Back End

function isDivisible (inputNumber){
  return inputNumber;
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
