// Cкопіюй код з минулого уроку
document.addEventListener('DOMContentLoaded', () => {

    // 1. БАЗА ДАНИХ (Масив об'єктів)
    const questions = [

        {
            question: "🚢Коли потонув 'Titanic'?🚢",
            answers: ["1900", "1910", "1912", "1915"],
            correct: 2
        },

        {
            question: "⛴️Коли потонула 'Carpathia'?⛴️",
            answers: ["1956", "1923", "1920", "1918"],
            correct: 3
        },

        {
            question: "🧨🚢Коли потонув 'Britanic'?🚢🧨",
            answers: ["1913", "1916 ", "1917", "191"],
            correct: 1
        },

        {
            question: "⛴️️️Коли потонула 'Lustania'?⛴️",
            answers: ["1915", "1916", "1917", "1918"],
            correct: 0
        },

        {
            question: " ⛴️️️Коли потонула 'Estonia'⛴️?",
            answers: ["1992", "1993", "1994", "1995"],
            correct: 2
        },

        {
            question: "Коли потонув 'Bismarck'?",
            answers: ["1940", "1941", "1942", "1943"],
            correct: 1
        },

        {
            question: "Коли потонув 'Yamato'?",
            answers: ["1942", "1943", "1944", "1945"],
            correct: 3
        },

        {
            question: " Коли потонув 'HMS Prince of Wales 53'️?",
            answers: ["1942", "1940", "1941", "1942"],
            correct: 2
        },

        {
            question: "Коли потонув 'HMS Royal Oak 08'?",
            answers: ["1940", "1939", "1942", "1943"],
            correct: 1
        },

        {
            question: "Коли потонув 'Conte di Cavour'?",
            answers: ["1942", "1941", "1943", "1940"],
            correct: 3
        },
        {
            question: "Коли потонув 'HMS Hood'?",
            answers: ["1930", "1940", "1941", "1925"],
            correct: 2
        },

        {
            question: "Коли потонула 'USS Arizona'?",
            answers: ["1930", "1940", "1925", "1941" ],
            correct: 3
        },

        {
            question: "Коли потонув 'HMS Centurion'?",
            answers: ["1943", "1944  ", "1942", "1941"],
            correct: 1
        },

        {
            question: "Коли потонула 'Kirishima '?",
            answers: ["1942", "1936", "1933", "198"],
            correct: 0
        },

        {
            question: " ️️Коли потонув 'Roma'?",
            answers: ["1945", "1942", "1943", "1946"],
            correct: 2
        }

        //   Додай свої запитання

    ];



    // Завдання 3 - Створи змінні для роботи
    const startScreen = document.querySelector('#start-screen');

    const quizScreen = document.querySelector('#quiz-screen');

    const resultScreen = document.querySelector('#result-screen');

    const startBtn = document.querySelector('#start-btn');

    const restartBtn = document.querySelector('#restart-btn');

    const resultText = document.querySelector('.result-text');

    const questionText = document.querySelector('#question-text');

    const answersContainer = document.querySelector('#answers-container');


    let questionIndex = 0;

    let score = 0;

    let timer = 15; // Таймер на 15 секунд

    const timerDisplay = document.querySelector('#timer');

    let interval; // Змінна для зберігання інтервалу

    // Функція для відображення запитання
    function showQuestion(question) {

        clearInterval(interval); // Скидаємо таймер
        startTimer();

        answersContainer.innerHTML = '';
        questionText.innerText = question.question;
        for (let i = 0; i < question.answers.length; i++) {
            const button = document.createElement('button');
            button.innerText = question.answers[i];
            button.classList.add('answer-btn');
            button.addEventListener('click', () => checkAnswer(button, i));
            answersContainer.appendChild(button);

        }
    }

    showQuestion(questions[questionIndex]); // закритий

    // Завдання 5 - Функція для переходу до наступного запитання

    function nextQuestion() {
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion(questions[questionIndex]);
        } else {
            showResult();
        }
    }

    // Завдання 4 - Перевірка відповіді

    function checkAnswer(button, i) {
        if (i == questions[questionIndex].correct) {
            score++;
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }

        // Відключення кнопок після вибору відповіді

        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.disabled = true;
        })

        // Таймер на 1 секунду

        setTimeout(nextQuestion, 1000);
    }





    // Завдання 7 - Відображення результату і статистики
    function showResult() {
        const accuracy = Math.round((score / questions.length) * 100);
        resultText.innerText = `Your result: ${score}/${questions.length} (${accuracy}%)`;
        quizScreen.classList.add('hide');
        resultScreen.classList.remove('hide');
        const finalScore = document.querySelector('#final-score');
        finalScore.innerText = score;
    }


    // Завдання 3 - Керування екранами (JS)

    function startGame() {
        startScreen.classList.add('hide');
        resultScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        questionIndex = 0;
        score = 0;
        showQuestion(questions[questionIndex]);
    }


    startBtn.addEventListener('click', startGame);



    // Завдання 6 - аймер на запитання
    function startTimer() {
        timer = 10;
        timerDisplay.innerText = `Time: ${timer}`;
        interval = setInterval(() => {
            timer--;
            timerDisplay.innerText = `Time: ${timer}`;
            if (timer <= 0) {
                clearInterval(interval);
                nextQuestion();
            }
        }, 1000);
    }



    restartBtn.addEventListener('click', () => {
        startGame();
        resultScreen.classList.add('hide');
    });

});
