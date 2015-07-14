$(document).ready(function(){

var startButton = $( "#start" );
var submitButton = $( "button.submit" );
var score = $("h3 .score")
var numberQs = $(".questions").children().length;


score = 0;

startButton.on("click", function(){
  $( ".q1.xx" ).css( "display", "block" );
});

startButton.on("click", function(){
  $("#start").css("display", "none");
});

$("#next.next1").on("click", function(){
  $(".q1.xx").css("display", "none");
  $(".q2.xx").css("display", "block");
  $("div .right, div .wrong").css("display", "none")
})

$("#next.next2").on("click", function(){
  $(".q2.xx").css("display", "none");
  $(".q3.xx").css("display", "block");
  $("div .right, div .wrong").css("display", "none")
})

$("#next.next3").on("click", function(){
  $(".q3.xx").css("display", "none");
  $(".q4.xx").css("display", "block");
  $("div .right, div .wrong").css("display", "none")
})

$("#next.next4").on("click", function(){
  $(".q4.xx").css("display", "none");
  $(".q5.xx").css("display", "block");
  $("div .right, div .wrong").css("display", "none")
})

$("#next.next5").on("click", function(){
  $(".q5.xx").css("display", "none");
  $(".q6.xx").css("display", "block");
  $("div .right, div .wrong").css("display", "none")
})

$("#next.next6").on("click", function(){
  $(".q6.xx").css("display", "none");
  $(".q7.xx").css("display", "block");
  $("div .right, div .wrong").css("display", "none")
})

$("#next.next7").on("click", function(){
  $(".q7.xx").css("display", "none");
  $(".q8.xx").css("display", "block");
  $("div .right, div .wrong").css("display", "none")
})

$("#next.next8").on("click", function(){
  $(".q8.xx").css("display", "none");
  $(".q9.xx").css("display", "block");
  $("div .right, div .wrong").css("display", "none")
})

$("#next.next9").on("click", function(){
  $(".q9.xx").css("display", "none");
  $(".q10.xx").css("display", "block");
  $("div .right, div .wrong").css("display", "none")
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

// var nextQuestion = function(){
//   $( ".questions .q1" ).css( "display", "none" );
// $( ".questions .q2" ).css( "display", "block" );
// });




});
