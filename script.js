var startbutton = document.getElementById("startbutton");
var quizIntro = document.querySelector('.quiz-intro')
var rightanswer = document.querySelector('#rightAnswer')
var index = 0
var Questions = [
    {
        question: 'Question 1: "Where is the correct place to insert a JavaScript?',
        choices: ['a. The <head> section', 'b. The <body> section', 'c. Both the <head> section and the <body> section are correct.', 'd. None of the above'],
        answer: 'c. Both the <head> section and the <body> section are correct.'
    }
    , {
        question: 'Question 2: "How can you add a comment in JavaScript?',
        choices: ['a. <!--This is a comment-->', 'b. //This is a comment', 'c.This is a comment', 'd. This is a comment'],
        answer: 'b. //This is a comment'
    }
    , {
        question: 'Question 3: What is the correct way to write a JavaScript array?',
        choices: ['a. var colors = ["red", "green", "blue"]', 'b. var colors = ("red"), 2 =("green"), 3 =("blue")', 'c. var colors = "red", "green", "blue"', 'd. var colors = (1:"red", 2:"green", 3:"blue")'],
        answer: 'a. var colors = ["red", "green", "blue"]'
    }

    , {
        question: 'Question 4: What does HTML stand for?',
        choices: ['a. Home Tool Markup Language', 'b. Hyper Text Markup Language', 'c. Hyperlinks and Text Markup Language', 'd. None of the above'],
        answer: 'b. Hyper Text Markup Language'
    }

    , {
        question: 'Question 5: What does CSS stand for?',
        choices: ['a. Computer Style Sheets', 'b. Creative Style Sheets', 'c. Cascading Style Sheets', 'd. Colorful Style Sheets']
        answer: 'c. Cascading Style Sheets'
    }
]
startbutton.addEventListener('click', function () {
    startGame()
})

function checkAnswer() {
    if (question[index].answer === event.target.textContent) {
        index++
        startGame()
    } else {
        //minus time
        return
    }

}

function startGame() {
    console.log('Game has started')
    var h2El = document.querySelector('#question')
    h2El.textContent = Questions[index].question

}

rightanswer.addEventListener('click', checkAnswer)