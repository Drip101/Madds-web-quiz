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
        question: 'What is 2 + 2',
        choices: 1,
        answer: 1
    }
    // {
    //         question:
    //             choices:
    // answer:
    // }
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