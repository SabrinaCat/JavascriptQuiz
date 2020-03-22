var quizStart = document.querySelector('#startQuiz');
var jumbotron = document.querySelector('#frontPage');
var questionBox = document.querySelector('#questionBox');
var answerInputs = document.querySelectorAll('form-check-label');
var questionInputs = document.getElementById ('qSection');
var continueButton = document.getElementById('nextQ');
var questionKey = [ ]
var answerKey = [a1== true];[a3== true]

function submitAnswer() {
    answerKey;
    var i = 0, len = answerKey.length;
    var checked = false;
    var userAnswer =[]
    for(i=0; i < answerKey.length; i++ ) {
        if(answerKey[i].checked) {
          checked = true;
          userAnswer = answers[i].value;
        }
     } 
     // if user click submit button without selecting any option, alert box will say "please select choice answer".
     if(!checked) {
       alert("please select choice answer");
       return;
     }
     // Correct answer
     if(userAnswer === "Scripting") {
        alert("Answer is correct!");
     }
     // incorrect answer
     else {
        alert("Answer is wrong!");
     }}


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
});

function nextQuestion () {
    for (questionKey=1; i> questionKey.length; i++)
    return submitAnswer;
}
continueButton.addEventListener('click', function() {
//loop through questions but it will start at index 1 because question 1 already has appeared
if ('click') {
    nextQuestion;
}
});