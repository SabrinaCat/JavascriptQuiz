const startButton = document.querySelector('#startQuiz');
const jumbotron = document.querySelector('#frontPage');
const questionBox = document.querySelector('#questionBox');
//variable for question and answer arrays
let questionInputs = document.getElementById ('qSection');
let choice1 =document.getElementById('#a1')
let choice2 =document.getElementById('#a2')
let choice3 =document.getElementById('#a3')
let choice4 =document.getElementById('#a4')
const continueButton = document.getElementById('nextQ');
let start = true;
//timer variables
var timerText = document.getElementById('timer');
var secondsLeft = 120;
var timerId ;


let i= 0
 
function get1stQuestion() {
    // update the DOM with the current question
    document.querySelector("#qSection").innerHTML= questionsArray[i]
    // update the DOM with the current answer choices
    document.getElementById("a1").innerHTML= aChoiceArray[i]
    document.getElementById("a2").innerHTML= bChoiceArray[i]
    document.getElementById("a3").innerHTML= cChoiceArray[i]
    document.getElementById("a4").innerHTML= dChoiceArray[i]
    i++
};

function getNextQuestion () {
    
    // update the DOM with the current question
    document.querySelector("#qSection").innerHTML= questionsArray[i]
    // update the DOM with the current answer choices
    document.getElementById("a1").innerHTML= aChoiceArray[i]
    document.getElementById("a2").innerHTML= bChoiceArray[i]
    document.getElementById("a3").innerHTML= cChoiceArray[i]
    document.getElementById("a4").innerHTML= dChoiceArray[i]
    i++
    if (i<= questionsArray.length){
    //go to score page
    }
}

function calculateScore() {
    // Compare answers
    if ((answer === true && questions[i].aChoiceArray === ) {
        // Increase score
        score++;
        alert("Correct!");
      }
      else {
        alert("Wrong!");
      } 
}
   
 



function startDisplay () {
    if (jumbotron.style.display = 'block', questionBox.style.display = 'none') {
    return (start===true);
}};

function countdown () {
    var computerSec = 1000;
        timerId = setInterval(function(){
        secondsLeft -= 1;
        timerText.textContent = secondsLeft + " seconds left!";
        console.log( secondsLeft);
        if(secondsLeft <= 0) {
            alert("game over") ;
            clearInterval(timerId);
            
        } 
    }, computerSec);  
    
};

startButton.addEventListener('click', function() {
    if (start=== true); {
        jumbotron.style.display = 'none';
        questionBox.style.display = 'block';
        countdown ();
        get1stQuestion ();
       }
});

continueButton.addEventListener('click', function(event) {
event.preventDefault()
getNextQuestion()
    
});
