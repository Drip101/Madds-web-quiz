let startbutton = document.getElementById("startbutton");
let quizIntro = document.querySelector('.quiz-intro')
let rightanswer = document.querySelector('#rightAnswer')
let _s = (e) => document.querySelector(e)
let index = 0, points = 0, timer = 30
let Questions = [
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
        choices: ['a. Computer Style Sheets', 'b. Creative Style Sheets', 'c. Cascading Style Sheets', 'd. Colorful Style Sheets'],
        answer: 'c. Cascading Style Sheets'
    }
]
startbutton.addEventListener('click', function () {
    startGame()
})

function checkAnswer(event, question) {
    console.log(question.answer, event.target.textContent);
    if (question.answer === event.target.textContent) {
        points += 20
        _s("#incorrect").innerText = "correct"
    } else {
        //minus time
        timer -= 5
        _s("#incorrect").innerText = "wrong"
    }

}
function getNextQuestion() {
    if (index === 4) endgame()
    _s(".choices").innerHTML = ""
    _s("#incorrect").innerHTML = ""
    _s("#question").textContent = Questions[index].question
    Questions[index].choices.forEach(choice => {
        let btn = document.createElement("button")
        btn.textContent = choice
        _s(".choices").append(btn)
        btn.addEventListener("click", (e) => {
            checkAnswer(e, Questions[index])
            index++
            setTimeout(() => {
                getNextQuestion()
            }, 2000);

        })
    })
}
function startGame() {
    let tick = setInterval(() => {
        if (timer <= 0) {
            endgame()
            clearInterval(tick)
        }
        timer--
        _s("#timer").innerText = timer
    }, 1000)
    _s(".intro").classList.add("hidden")
    _s(".questions").classList.remove("hidden")
    console.log('Game has started')
    getNextQuestion()


}
function endgame() {
    _s(".outro").classList.remove("hidden")
    _s(".questions").classList.add("hidden")
    _s("#score").innerText = points
    index = 0
    points = 0
    timer = 60
}



