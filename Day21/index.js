const quizData = [
  {
      question: "What does DOM stand for?",
      options: [
          "Document Order Model",
          "Document Object Model",
          "Data Object Method",
          "Direct Object Management"
      ],
      correct: 1
  },
  {
      question: "Which method selects by ID?",
      options: [
        "getElementById()",
        "querySelectorAll()",
        "getElement()",
        "getElementsByClassName()"
      ],
      correct: 0
    },
    {
      question: "Which event fires on input change?",
      options: ["click", "submit", "change", "keydown"],
      correct: 2
    }
];

const questions  = [...quizData].sort(()=>Math.random()-0.5)

// Utils elements
let currentQuestion =0;
// Cache the main items
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");

function loadQuestions()
{   
    // show the Question
    questionEl.textContent =`Q ${currentQuestion+1}. ${questions[currentQuestion].question}`;
    // show the options
    questions[currentQuestion].options.forEach(q=>{
        const btn = document.createElement('btn');
        btn.classList.add('option-btn')
        btn.textContent =q
        
        optionsEl.appendChild(btn);
    })

}

loadQuestions()