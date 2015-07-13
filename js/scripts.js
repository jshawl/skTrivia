$(document).ready(function(){

var startButton = $( "#start" );
var submitButton = $( "#submit" )

startButton.on("click", function(){
  $( ".questions" ).css( "display", "block" );
});

startButton.on("click", function(){
  $( "#start" ).css( "display", "none" );
});

startButton.on("click", function(){
  $( "#submit" ).css( "display", "block" );
});

// var nextQuestion = submitButton.on("click", function(){
//   $( ".questions .q1" ).css( "display", "none" );
// $( ".questions .q2" ).css( "display", "block" );
// });

submitButton.on("click", function() {
  if($('input[value=correct]').is(":checked") ) {
    alert('Correct! +1');
  } else {
    alert('Sorry...');
  }
});









});
