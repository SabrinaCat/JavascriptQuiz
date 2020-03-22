var quizStart = document.querySelector('#startQuiz');
var jumbotron = document.querySelector('#frontPage');
var questionBox = document.querySelector ('#questionBox');
//var quizArray 


//define function
function startDisplay () {
 if (jumbotron.style.display = 'block', questionBox.style.display = 'none') {
 return (startDisplay== true);
  }}

quizStart.addEventListener('click', function() {
  if (startDisplay == true); {
      jumbotron.style.display = 'none';
      questionBox.style.display = 'block';
  }
})
