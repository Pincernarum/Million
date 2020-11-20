const view = {}
view.setActiveScreen = (screenName) => {
    switch(screenName) {
        case "welcomeScreen":
            document.getElementById("app").innerHTML = components.welcomePage
        break
    }
}
// document.getElementById("start-btn").addEventListener("click", () => {
//     document.getElementById("welcome-container").innerHTML=``
// })
// let theme = document.getElementById("main-theme")
// // theme.play()
// var audio = false
// document.getElementById("sound-btn").addEventListener("click", ()=>{
//     if(audio) {
//         theme.pause()
//         audio = false
//         document.getElementById("sound-btn").style = "background-image: url(images/soundOff.png); background-size: contain; background-repeat: no-repeat;"
//     } else {
//         theme.play()
//         audio = true
//         document.getElementById("sound-btn").style = "background-image: url(images/soundOn.png); background-size: contain; background-repeat: no-repeat;"
//     }
// })

let currentQuestionIndex = 0

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

nextButton.classList.remove("hide")
questionContainerElement.classList.remove("hide")

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function setNextQuestion() {
    resetState()
    if(currentQuestionIndex > questions.length) {
        console.log("You won")
    } else {
        showQuestion(questions[currentQuestionIndex])
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
    element.classList.add('correct')
    } else {
    element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {},
    {
        question: 'Điền từ còn thiếu: "Đục nước béo..."?',
        answers: [
            {text : "Vạc", correct: false},
            {text: "Cò", correct: true},
            {text : "Cá", correct: false},
            {text : "Mèo", correct: false},
        ]
    },
    {
        question: 'Việt Nam có chung biên giới với quốc gia nào dưới đây?',
        answers: [
            {text : "Thái Lan", correct: false},
            {text: "Myanmar", correct: false},
            {text : "Trung Quốc",correct: true},
            {text : "Bruney", correct: false},
        ]
    },
    {
        question: 'Đâu là tên một ngôi chùa nổi tiếng ở Hà Nam?',
        answers: [
            {text : "Bái Đính", correct: false},
            {text: "Trấn Quốc", correct: false},
            {text : "Bổ Đà",correct: false},
            {text : "Tam Chúc", correct: true},
        ]
    },
    {
        question: 'Sóng biển thường được tạo ra do cái gì?',
        answers: [
            {text : "Nắng", correct: false},
            {text: "Gió", correct: true},
            {text : "Mưa",correct: false},
            {text : "Sương Mù", correct: false},
        ]
    },
    {
        question: 'Âm thanh có tần số lớn hơn 20KHz gọi là gì?',
        answers: [
            {text : "Siêu âm", correct: true},
            {text: "Hạ âm", correct: false},
            {text : "Cận âm",correct: false},
            {text : "Quá Âm", correct: false},
        ]
    },
]