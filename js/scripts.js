$(document).ready(function(){

var startButton = $( "#start" );
var submitButton = $( "button.submit" );
var score = $("h3 .score")
var numberQs = $(".questions").children().length;
var next = $("#next");
score = 0;

var timer;
seconds = 60;

// startButton.on("click", function(){
// })
function updateTime(){
  seconds--;
  $("#timer").html("Time:" + " " + seconds)
if(seconds === 0){
  alert("Time's Up!")
  clearInterval(seconds)
  $(".questions").css("display", "none")
  $("#timer").css("display", "none")
}
if(seconds <= 10){
  $("#timer").css("color", "red")
}
}


startButton.on("click", function(){
  timer = setInterval(updateTime, 1000);
  $(".q1.xx").css( "display", "block" );
  $("#start").css("display", "none");
});

$(".next").on("click", function(){
  var form = $(this).parent();
  form.hide();
  form.next().show();
})
//This refers to what I'm clicking, so the parent of that,
//being the current question, is going to hide, and the next
//question is going to show.

$("div .next").on("click", function(){
  $("div .right, div .wrong").css("display", "none")
});

$("#finish.finish10").on("click", function(){
  $("div .q10").css("display", "none")
  $("h2").css("display", "none")
  clearInterval(timer)
  //$("#timer").css("display", "none")
})

var checkAnswer = function() {
    if($(this).parent().find('input[value=correct]').is(":checked") ) {
      $(this).prop('disabled', true);
//'this' refets to what im clicking (submitButton)
      $("div .right").css("display", "inline-block")
      // alert('Correct! +1');
      score++
     } else {
      $(this).prop('disabled', true);
      $("div .wrong").css("display", "inline-block")
    //   alert('Sorry...');
      score--
    }
    $(".score").html("Score:" + " " + score)
};

submitButton.on("click", checkAnswer);


});
