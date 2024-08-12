const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home tool Markup Language", "Hyper Link Markup language", "Hyper Tool Markup language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What tag attribute can you put CSS code into?",
        options: ["Title", "Height", "Width", "Style"],
        answer: "Style"
    },
    {
        question: "What CSS property makes the colour of the page change?",
        options: ["Font-Color", "Color", "Background-color", "Page-Color"],
        answer: "Background-color"
    },
    {
        question: "Which programming language is often used for server-side scripting?",
        options: ["Java", "Python", "JavaScript", "Node JS"],
        answer: "Node JS"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What is the purpose of the <meta> tag in HTML?",
        options: ["To define a paragraph", "To create a link", "To set character encoding", "To insert an image"],
        answer: "To set character encoding"
    }
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit-btn');

function loadQuiz() {
    quizContainer.innerHTML = '';
    quizData.forEach((item, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p>${index + 1}. ${item.question}</p>
            ${item.options.map((option, i) => `
                <label class="option">
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });
}

function getSelectedAnswers() {
    const answers = [];
    quizData.forEach((item, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            answers.push(selectedOption.value);
        } else {
            answers.push(null); 
        }
    });
    return answers;
}

function showResult() {
    const answers = getSelectedAnswers();
    let score = 0;

    answers.forEach((answer, index) => {
        if (answer === quizData[index].answer) {
            score++;
        }
    });

    resultContainer.textContent = `You scored ${score} out of ${quizData.length}`;
}

submitButton.addEventListener('click', showResult);

loadQuiz();
