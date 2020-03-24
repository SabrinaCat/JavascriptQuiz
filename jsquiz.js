//Used once to start quiz
const startButton = document.querySelector('#startQuiz');
//used in function startQuiz to hide front page and display questionBox
const jumbotron = document.querySelector('#frontPage');
const questionBox = document.querySelector('#questionBox');
//where we will loop our titles and choices (questions and answers)
var answerInputs = document.querySelectorAll('form-check-label');
var questionInputs = document.getElementById ('qSection');
// will be used to switch the question and answer sets
const continueButton = document.getElementById('nextQ');
//timer variables
var timerText = document.getElementById('timer');
var secondsLeft = 120;
var timerId ;



function getQuestion() {
     
    // get the question/answer object from your questions array based on the current question index
    //for ( i=0; i<= titleArray.length; i++){

    // update the DOM with the current question
   //questionInputs.textContent = titleArray [i];
   // };
    // update the DOM with the current answer choices
    //answerInputs.textContent = theGoods[currentQ].choices;
    // for loop that goes through the answer choices
      //  for( j=0; j<=theGoods.choices.length; j++) {
       // answerInputs.appendChild(theGoods.choices[j]);

// };
    
                // creates a button
				// set a class attribute of "choice"
				// set a value attribute of choice
				// set text content of button to be choice
                // append button to the DOM
        

    }; 
 



function startDisplay () {
    if (jumbotron.style.display = 'block', questionBox.style.display = 'none') {
    return (startDisplay===true);
}};

function startQuiz () {
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
    if (startDisplay=== true); {
        jumbotron.style.display = 'none';
        questionBox.style.display = 'block';
        startQuiz ();
        getQuestion ();
       }
  });

  continueButton.addEventListener('click', function() {
        getQuestion ();
  });
