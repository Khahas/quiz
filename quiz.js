const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const wrongScoreElement = document.getElementById('wrong-score')
const correctScoreElement = document.getElementById('correct-score')
const scoreBoard = document.getElementById('score-board')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestion, currentQuestionIndex
let correctScore = 0
let wrongScore = 0

scoreBoard.style.visibility = 'hidden';

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    wrongScoreElement.innerText = wrongScore
    correctScoreElement.innerText = correctScore
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
    questionElement.setAttribute('src', question.question)
    shuffledAnswers = question.answer.sort(() => Math.random() - .5)
    shuffledAnswers.forEach(answer => {
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
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (correct) {
        correctScore = correctScore + 1
    } else {
        wrongScore = wrongScore + 1
    }
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        scoreBoard.style.visibility = 'visible';
        questionContainerElement.remove()
    }

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
    {
        question: 'fed20-profile-photos-20201106_susanne_eneroth.jpeg',
        answer: [
            { text: 'Linda', correct: false },
            { text: 'Pernilla', correct: false },
            { text: 'Sussane', correct: true },
            { text: 'August', correct: false }
        ]
    },
    {
        question: 'fed20-profile-photos-20201106_saga-swahn.jpg',
        answer: [
            { text: 'Elin', correct: false },
            { text: 'Marko', correct: false },
            { text: 'Sussane', correct: false },
            { text: 'Saga', correct: true }
        ]
    }, {
        question: 'fed20-profile-photos-20201106_svitlana-rybakova.jpg',
        answer: [
            { text: 'Svitlana', correct: true },
            { text: 'Saga', correct: false },
            { text: 'Celil', correct: false },
            { text: 'Kyd', correct: false }
        ]
    }, {
        question: 'fed20-profile-photos-20201106_august-ronnle (3).jpg',
        answer: [
            { text: 'Johannes', correct: false },
            { text: 'Elin', correct: false },
            { text: 'August', correct: true },
            { text: 'Linda', correct: false }
        ]
    }, {
        question: 'fed20-profile-photos-20201106_pernilla-lundahl.jpg',
        answer: [
            { text: 'August', correct: false },
            { text: 'Pernilla', correct: true },
            { text: 'Sussane', correct: false },
            { text: 'Svitlana', correct: false }
        ]
    }, {
        question: 'fed20-profile-photos-20201106_marko-zdravkovski.jpg',
        answer: [
            { text: 'Miranda', correct: false },
            { text: 'Pernilla', correct: false },
            { text: 'Marko', correct: true },
            { text: 'August', correct: false }
        ]
    },
    {
        question: 'fed20-profile-photos-20201106_kyd-kitchaiya.jpg',
        answer: [
            { text: 'Kyd', correct: true },
            { text: 'Pernilla', correct: false },
            { text: 'Isabella', correct: false },
            { text: 'Linda', correct: false }
        ]
    }, {
        question: 'fed20-profile-photos-20201106_johannes-hernehult.jpg',
        answer: [
            { text: 'Celil', correct: false },
            { text: 'Pernilla', correct: false },
            { text: 'Johan', correct: false },
            { text: 'Johannes', correct: true }
        ]
    }, {
        question: 'fed20-profile-photos-20201106_johan-markstrom.jpg',
        answer: [
            { text: 'Kyd', correct: false },
            { text: 'Linda', correct: false },
            { text: 'Johan', correct: true },
            { text: 'Johannes', correct: false }
        ]
    }, {
        question: 'fed20-profile-photos-20201106_Isabella-bjelobrk.jpg',
        answer: [
            { text: 'Johannes', correct: false },
            { text: 'Isabella', correct: true },
            { text: 'Kyd', correct: false },
            { text: 'Saga', correct: false }
        ]
    }, {
        question: 'fed20-profile-photos-20201106_frida-stenberg (1).jpg',
        answer: [
            { text: 'Frida', correct: true },
            { text: 'Svitlana', correct: false },
            { text: 'Marko', correct: false },
            { text: 'Christopher', correct: false }
        ]
    }, {
        question: 'fed20-profile-photos-20201106_elin-stenquist.jpg',
        answer: [
            { text: 'Saga', correct: false },
            { text: 'Johan', correct: false },
            { text: 'Elin', correct: true },
            { text: 'Isabella', correct: false }
        ]
    }, {
        question: 'fed20-profile-photos-20201106_christopher-lindstro╠êm.jpg',
        answer: [
            { text: 'Celil', correct: false },
            { text: 'Frida', correct: false },
            { text: 'Miranda', correct: false },
            { text: 'Christopher', correct: true }
        ]
    }, {
        question: 'fed20-profile-photos-20201106_christina-mannerberg.jpg',
        answer: [
            { text: 'Christopher', correct: false },
            { text: 'Christina', correct: true },
            { text: 'Marko', correct: false },
            { text: 'Linda', correct: false }
        ]
    }, {
        question: 'fed20-profile-photos-20201106_celil-tat.jpg',
        answer: [
            { text: 'Celil', correct: true },
            { text: 'Pernilla', correct: false },
            { text: 'Marko', correct: false },
            { text: 'Linda', correct: false }
        ]
    }

]

