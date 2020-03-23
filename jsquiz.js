
var startButton = document.querySelector('#startQuiz');
var jumbotron = document.querySelector('#frontPage');
var questionBox = document.querySelector('#questionBox');
var answerInputs = document.querySelectorAll('form-check-label');
var questionInputs = document.getElementById ('qSection');
var continueButton = document.getElementById('nextQ');
var timerText = document.getElementById('timer');
var secondsLeft = 120;
var timerId ;

var theGoods = [
    {title: "Which built-in loop method calls a function for each element in the array?",
    choices: ["while()", "for()", "forEach()", "none of the above"],
    answer: "forEach loop" == true,
},
    {title: "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    choices: ["getIndex()","location()","indexOf()","None of the above"],
    answer: "indexof()" == true,
},
    {title: "Which built-in method returns the length of the string?",
    choices: ["length()","size()","index()","none of the above"],
    answer: "length" == true,
},
    {title: "Which built-in method reverses the order of the elements of an array?",
    choices: ["changeOrder(order)","reverse()","sort(order)","None of the above"],
    answer: "reverse()",
},
    {title: "Which built-in method returns the characters in a string beginning at the specified location?",
    choices: ["substr()","getSubstring()","slice()", "None of the above"],
    answer: "substr()",
},
    {title: "Which built-in method returns the calling string value converted to lower case?",
    choices: ["toLowerCase", "toLower", "changeCase(case)", "none of the above"],
    answer: "toLowerCase",
},
    {title: "Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?",
    choices: ["toExponential()", "toFixed()", "toPrecision()", "toLocaleString()"],
    answer:"toFixed()",
},
    {title: "Which of the following function of Number object defines how many total digits to display of a number?",
    choices: ["toExponential()", "toFixed()","toLocaleString()","toPrecision()"],
    answer: "toPrecision()",
},
    {title: "Which of the following function of String object returns the character at the specified index?",
    choices: [ "charAt()", "charCodeAt()", "concat()", "indexOf()"],
    answer: "charAt()",
},
    {title:"Which of the following function of String object combines the text of two strings and returns a new string?",
    choices: ["add()", "merge()", "concat()", "append()"],
    answer: "concat()",
}];
//var questionKey = [ ]
//var answerKey = [a1== true];[a3== true]






//define function


 

function flipThrough () {
    for ( i =0; i< theGoods.length; i++) {
        questionInputs.textContent = theGoods[i].title;
    };
    for ( i =0; i< theGoods.length; i++) {
        answerInputs.textContent = theGoods[i].choices;
    };
};

function startDisplay () {
    if (jumbotron.style.display = 'block', questionBox.style.display = 'none') {
    return (startDisplay== true);
}};



function startQuiz () {
    var computerSec = 1000;

     timerId = setInterval(function(){

        secondsLeft -= 1;
        timerText.textContent = secondsLeft + " seconds left!";
        console.log( secondsLeft);
        if(secondsLeft <= 0) {
            clearInterval(timerId)
        } 
    }, computerSec);   
};

startButton.addEventListener('click', function() {
    if (startDisplay == true); {
        jumbotron.style.display = 'none';
        questionBox.style.display = 'block';
        startQuiz ();
       }
  });
  continueButton.addEventListener('click', function() {
          flipThrough();
  });
