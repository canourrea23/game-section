function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
lastIndex = -1;


function answerQuestion() {
    let answers = [
        "Chances are good.", 
        "Future uncertain.", 
        "Definitely yes.",
        "If you try hard.",
        "Ask again later.",
        "Outlook good", 
        "Yes", 
        "Signs point to yes",
        "Don't count on it", 
        "My reply is no",
        "My sources say no", 
        "Outlook not so good",
        "Very doubtful", 
        "Reply hazy, try again", 
        "Ask again later", 
        "Better not tell you now",
        "Cannot predict now", 
        "Concentrate and ask again"
    ];

    let index = 0;

    // index = getRandomIntInclusive(0, answers.length);

    // makeAnswerAppear(answers[index]);

    do {
    index = getRandomIntInclusive(0, answers.length);
    } while (index == lastIndex);
    console.log(index)
    lastIndex = index;
    makeAnswerAppear(answers[index]);

    makeBlack();
};
// Get the input field
let enter = document.getElementById("question");
let btn = document.querySelector('enter')

// Execute a function when the user releases a key on the keyboard
enter.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13 || btn) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    answerQuestion();
    // document.getElementById("question").click();
    }
});

function makeBlack(){
let liquid = document.getElementById('window')
    liquid.style.background = 'black'
}


// // let answers = ['It\'s difficult','Awesome!','It will be interesting','Time to shine','It gonna be fun!'];
// answers_exist = []; // create array that store the existed answer index
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }



// /* Write a function that handles the magic 8-ball being clicked. Here are the steps:

//    - Create an array containing at least 5 possible answers as strings.
//    - Generate a random array index by calling 
//        getRandomIntInclusive function.
//    - Call 'makeAnswerAppear' using the random
//        answer you selected.
//    - (Level-up) Prevent your code from selecting the 
//        same answer multiple times in a row 
//        (loops could be required).
// */

// function answerQuestion() {
//    let question = document.getElementById('question').value;
//    if(question.length < 1){
//       alert("You need enter a question");
//       return
//    }else{
//       if(answers_exist.length == 5){
//         alert("You saw all the answer");
//         return;
//       }else{
//         let arrayIdex = getRandomIntInclusive(0,5);
//         while(answers_exist.indexOf(arrayIdex) >= 0){
//           arrayIdex = getRandomIntInclusive(0,5);
//         }
//         answers_exist.push(arrayIdex);
//         let answer = answers[arrayIdex]
//         makeAnswerAppear(answer);
//       }
      
//    }
   
// }

// let eight_ball = document.getElementById('eight-ball');
// eight_ball.addEventListener('click',answerQuestion);



    setTimeout(() => {
        document.getElementById("answer-text").classList.add("hidden");
        document.getElementById("triangle").classList.add("hidden");
        document.getElementById("eight").classList.remove("hidden");
    }, 5000);

function isPaulaHappy() {
    if(carolinaIsGood === true){
        return "Paula ummpa lummpa yay"
    } else {
        return "try again"
    }
}

// write a function named BobRoss and return a message saying "happy trees" 
function BobRoss() {
    return "happy trees"
}

// write a function named hello return a console.log message saying "helloWorld"    
function hello() {
    console.log("helloWorld");
}

// write function named oddsOrEvens that takes a number and returns "odd" or "even"
function oddsOrEvens(num) {
    if (num % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}
console.log(oddsOrEvens(2));


