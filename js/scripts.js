$(document).ready(function(){

var startButton = $( "#start" );
var submitButton = $( "button.submit" );
var score = $("h3 .score")
var numberQs = $(".questions").children().length;
var next = $("#next");
score = 0;

//
var timer;
seconds = 60;
startButton.on("click", function(){
  timer = setInterval(updateTime, 1000);
})
function updateTime(){
  seconds--;
  $("#timer").html(seconds)
if(seconds === 0){
  alert("Time's Up!")
  clearInterval(seconds)
  $(".questions").css("display", "none")
  $("#timer").css("display", "none")
}
}
//

startButton.on("click", function(){
  $(".q1.xx").css( "display", "block" );
  $("#start").css("display", "none");
});

// startButton.on("click", function(){
//   $("#start").css("display", "none");
// });

$(".next").on("click", function(){
  var form = $(this).parent();
  form.hide();
  form.next().show();
})

$("div .next").on("click", function(){
  $("div .right, div .wrong").css("display", "none")
});

$("#finish.finish10").on("click", function(){
  $("div .q10").css("display", "none")
  $("h2").css("display", "none")
})

var checkAnswer = function() {
    if($(this).parent().find('input[value=correct]').is(":checked") ) {
      $(this).prop('disabled', true);
      $("div .right").css("display", "inline-block")
      // alert('Correct! +1');
      score++
     } else {
      $(this).prop('disabled', true);
      $("div .wrong").css("display", "inline-block")
    //   alert('Sorry...');
      score--
    }
    $(".score").html(score)
};

submitButton.on("click", checkAnswer);


});
