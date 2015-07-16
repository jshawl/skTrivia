$(document).ready(function(){

var startButton = $( "#start" );
var submitButton = $( "button.submit" );
var score = $("h3 .score")
var numberQs = $(".questions").children().length;
var next = $("#next");
var score = 0;

var timer;
var seconds = 60;

// startButton.on("click", function(){
// })
// please remove commented out code before submitting in the future
function updateTime(){
  seconds--;
  $("#timer").html("Time:" + " " + seconds)
if(seconds === 0){
  alert("Time's Up!")
  clearInterval(seconds)
  $(".questions").css("display", "none")
  $("#timer").css("display", "none")
  // I recommend toggling a class here^ instead of manipulating inline styles.
  // This will allow you to separate your concerns by keeping behavior in JS files
  // and styles in CSS files.
}
if(seconds <= 10){
  // ^^ this is a nice touch!
  $("#timer").css("color", "red")
}
} // difficult to see which curly this corresponds to. indenting code correctly will help with that.


startButton.on("click", function(){
  timer = setInterval(updateTime, 1000);
  $(".q1.xx").css( "display", "block" );
  $("#start").css("display", "none");
});

$(".next").on("click", function(){
  var form = $(this).parent();
  // excellent DRY solution!!!
  form.hide();
  form.next().show();
})
//This refers to what I'm clicking, so the parent of that,
//being the current question, is going to hide, and the next
//question is going to show.
// ^^ helpful code comments

$("div .next").on("click", function(){
  $("div .right, div .wrong").css("display", "none")
});

$("#finish.finish10").on("click", function(){
  $("div .q10").css("display", "none")
  // or maybe just hide the last question without having to hardcode the class that the last question has.
  $("h2").css("display", "none")
  clearInterval(timer)
  //$("#timer").css("display", "none")
})

var checkAnswer = function() {
    if($(this).parent().find('input[value=correct]').is(":checked") ) {
      // love the idea of adding (in)correct as a value attribute! clever!
      $(this).prop('disabled', true);
//'this' refets to what im clicking (submitButton)
      $("div .right").css("display", "inline-block") // again, prefer toggling classes to manipulating inline styles.
      // alert('Correct! +1');
      score++
     } else {
      $(this).prop('disabled', true); // excellent!
      $("div .wrong").css("display", "inline-block")
    //   alert('Sorry...');
      score--
    }
    $(".score").html("Score:" + " " + score)
};

submitButton.on("click", checkAnswer);


});

// awesome JS!!! can you think of a way to reset the game without having to reload the page?
