const questions = [
    {
        question: "How old am I?",
        answers: [
            {text: "10", correct: false},
            {text: "12", correct: false},
            {text: "14", correct: false},
            {text: "18", correct: true}
        ]
    },
    {
        question: "How old are you?",
        answers: [
            {text: "10", correct: false},
            {text: "12", correct: false},
            {text: "14", correct: true},
            {text: "18", correct: false}
        ]
    },
    {
        question: "Who am I?",
        answers: [
            {text: 'Nobody', correct: true},
            {text: 'Me', correct: false},
            {text: 'I', correct: false},
            {text: 'Name', correct: false}
        ]
    },  
]
const questionsList = document.getElementById("answer-buttons")
const nextBtn = document.getElementById("next-btn")
let currentQuestion = document.getElementById("question")
let questionIndex = 0

nextBtn.addEventListener("click", () => {
    questionIndex++
    showQuestion()
    nextBtn.classList.add("hide")
    document.getElementById("under").classList.remove("hide")
})

let showQuestion = () => {
    showPrize()
    if(questionIndex < questions.length) {
        questionsList.innerHTML = ""
        currentQuestion.innerText = questions[questionIndex].question
        questions[questionIndex].answers.forEach(answer => {
            let button = document.createElement("button")
            button.innerText = answer.text
            button.classList.add("btn")
            button.classList.add("hover")
            questionsList.appendChild(button)
            button.addEventListener("click", () => {
                document.getElementById("under").classList.add("hide")
                removeHover()
                if(answer.correct) {
                    button.classList.add("correct")
                    nextBtn.classList.remove("hide")
                } else {
                    alert("False")
                }
            })
        })
    }
}

let removeHover = () => {
    let btns = questionsList.children
    for (let btn of btns) {
        btn.classList.remove("hover")
    }
}

let showPrize = () => {
    if(questionIndex > 0) {
        let currentPrize = document.getElementById(questionIndex - 1)
        currentPrize.classList.add("current")
    }
}

showQuestion()