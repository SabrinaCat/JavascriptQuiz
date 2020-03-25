
//var theGoods = questions.js.object
const startButton = document.querySelector('#startQuiz');
const jumbotron = document.querySelector('#frontPage');
const questionBox = document.querySelector('#questionBox');
var questionInputs = document.getElementById ('qSection');
var answerInputs = document.querySelectorAll('form-check-label');
var continueButton = document.getElementById('nextQ');
var start = true;
var timerText = document.getElementById('timer');
var secondsLeft = 120;
var timerId ;


 
function getQuestion() {
    
    var i = 0;
    // get the question/answer object from your questions array based on the current question index
    for ( i=0; i< theGoods.length; i++) {
        let j = i
        for( j=0; j< theGoods[i].title.length; j++){
    // update the DOM with the current question
    
    document.querySelector("#qSection").innerHTML= theGoods.title[j]
    // update the DOM with the current answer choices
    document.querySelectorAll("#form-check-label").innerHTML= theGoods.title[j].choices['']
        };};
    
   
 
      
        // creates a button
         var button = document.createElement("BUTTON");

        // set a class attribute of "choice"
         button.setAttribute("class", "choice");

        // set a value attribute of choice
         button.setAttribute( value = "Choice1");

        // set text content of button to be choice
        button.textContent = "Choice Options"
        // append button to the DOM
        
        document.body.appendChild(button);
    };
   
 



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
        getQuestion ();
       }
});

  continueButton.addEventListener('click', function () {
    getQuestion ();
    
});
