class VocabularyTrainer {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.totalQuestions = 0;
        this.currentMode = null;
        this.questions = [];
        this.userAnswers = [];
        this.selectedAnswer = null;
        this.vocabularyData = VOCABULARY_DATA;
        
        this.initializeApp();
    }

    initializeApp() {
        this.bindEvents();
        this.showModeSelection();
    }

    bindEvents() {
        // Mode selection
        document.querySelectorAll('.mode-card').forEach(card => {
            card.addEventListener('click', () => this.selectMode(card.dataset.mode));
        });

        // Control buttons
        document.getElementById('startBtn').addEventListener('click', () => this.startQuiz());
        document.getElementById('stopBtn').addEventListener('click', () => this.stopQuiz());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('restartBtn').addEventListener('click', () => this.restart());
        document.getElementById('viewErrorsBtn').addEventListener('click', () => this.showErrorDetails());
        document.getElementById('closeErrorsModal').addEventListener('click', () => this.closeErrorsModal());

        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const nextBtn = document.getElementById('nextBtn');
                if (!nextBtn.disabled && nextBtn.style.display !== 'none') {
                    this.nextQuestion();
                }
            }
            
            // Answer selection with number keys (1, 2, 3, 4) from main keyboard row
            if (document.getElementById('quizSection').style.display === 'block') {
                let answerIndex = -1;
                
                // Only use main keyboard number keys, not numpad
                if (!e.location || e.location === KeyboardEvent.DOM_KEY_LOCATION_STANDARD) {
                    switch (e.key) {
                        case '1':
                        case '&':
                            answerIndex = 0;
                            break;
                        case '2':
                        case 'é':
                            answerIndex = 1;
                            break;
                        case '3':
                        case '"':
                            answerIndex = 2;
                            break;
                        case '4':
                        case "'":
                            answerIndex = 3;
                            break;
                    }
                    
                    if (answerIndex >= 0) {
                        e.preventDefault(); // Prevent any default behavior
                        const answerOptions = document.querySelectorAll('.answer-option');
                        if (answerOptions[answerIndex]) {
                            // Simulate click on the answer option
                            answerOptions[answerIndex].click();
                        }
                    }
                }
            }
        });

        // Modal close on background click
        document.getElementById('errorsModal').addEventListener('click', (e) => {
            if (e.target.id === 'errorsModal') {
                this.closeErrorsModal();
            }
        });
    }

    selectMode(mode) {
        // Remove previous selection
        document.querySelectorAll('.mode-card').forEach(card => {
            card.classList.remove('selected');
        });

        // Select new mode
        document.querySelector(`[data-mode="${mode}"]`).classList.add('selected');
        this.currentMode = mode;

        // Enable start button
        document.getElementById('startBtn').disabled = false;
    }

    showModeSelection() {
        document.getElementById('modeSelection').style.display = 'block';
        document.getElementById('quizSection').style.display = 'none';
        document.getElementById('resultsSection').style.display = 'none';
    }

    showQuizSection() {
        document.getElementById('modeSelection').style.display = 'none';
        document.getElementById('quizSection').style.display = 'block';
        document.getElementById('resultsSection').style.display = 'none';
    }

    showResultsSection() {
        document.getElementById('modeSelection').style.display = 'none';
        document.getElementById('quizSection').style.display = 'none';
        document.getElementById('resultsSection').style.display = 'block';
    }

    startQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        
        // Generate questions based on mode
        switch (this.currentMode) {
            case 'mots':
                this.questions = this.generateWordQuestions();
                break;
            case 'expressions':
                this.questions = this.generateExpressionQuestions();
                break;
            case 'definitions':
                this.questions = this.generateDefinitionQuestions();
                break;
        }

        this.totalQuestions = this.questions.length;
        this.shuffleArray(this.questions);

        this.showQuizSection();
        this.showQuestion();
        this.updateDisplay();
    }

    generateWordQuestions() {
        const questions = [];
        const vocabList = this.vocabularyData.mots;

        vocabList.forEach(([french, correctEnglish]) => {
            // Create distractors
            const distractors = vocabList
                .filter(([, english]) => english !== correctEnglish)
                .map(([, english]) => english);
            
            this.shuffleArray(distractors);
            const choices = [correctEnglish, ...distractors.slice(0, 3)];
            this.shuffleArray(choices);

            questions.push({
                question: `Comment dit-on "${french}" en anglais ?`,
                choices: choices,
                correct: correctEnglish
            });
        });

        return questions;
    }

    generateExpressionQuestions() {
        const questions = [];
        const exprList = this.vocabularyData.expressions;

        exprList.forEach(([french, correctEnglish]) => {
            // Create distractors
            const distractors = exprList
                .filter(([, english]) => english !== correctEnglish)
                .map(([, english]) => english);
            
            this.shuffleArray(distractors);
            const choices = [correctEnglish, ...distractors.slice(0, 3)];
            this.shuffleArray(choices);

            questions.push({
                question: `Comment dit-on "${french}" en anglais ?`,
                choices: choices,
                correct: correctEnglish
            });
        });

        return questions;
    }

    generateDefinitionQuestions() {
        const questions = [];
        const defList = this.vocabularyData.definitions;

        defList.forEach(([term, definition]) => {
            // Create distractors
            const distractors = defList
                .filter(([t]) => t !== term)
                .map(([t]) => t);
            
            this.shuffleArray(distractors);
            const choices = [term, ...distractors.slice(0, 3)];
            this.shuffleArray(choices);

            questions.push({
                question: `Quel terme correspond à cette définition ?\n\n${definition}`,
                choices: choices,
                correct: term
            });
        });

        return questions;
    }

    showQuestion() {
        if (this.currentQuestion >= this.questions.length) {
            this.showFinalResults();
            return;
        }

        const questionData = this.questions[this.currentQuestion];
        document.getElementById('questionText').textContent = questionData.question;

        // Generate answer options
        const answersGrid = document.getElementById('answersGrid');
        answersGrid.innerHTML = '';

        questionData.choices.forEach((choice, index) => {
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer-option';
            answerDiv.innerHTML = `
                <input type="radio" name="answer" value="${index}" id="answer${index}">
                <label for="answer${index}" class="answer-label">${choice}</label>
                <div class="answer-indicator"></div>
            `;

            answerDiv.addEventListener('click', () => {
                const radio = answerDiv.querySelector('input[type="radio"]');
                radio.checked = true;
                this.selectAnswer(index);
            });

            answersGrid.appendChild(answerDiv);
        });

        this.selectedAnswer = null;
        document.getElementById('nextBtn').disabled = true;
        this.updateDisplay();
    }

    selectAnswer(answerIndex) {
        // Remove previous selection
        document.querySelectorAll('.answer-option').forEach(option => {
            option.classList.remove('selected');
        });

        // Select new answer
        document.querySelectorAll('.answer-option')[answerIndex].classList.add('selected');
        this.selectedAnswer = answerIndex;
        document.getElementById('nextBtn').disabled = false;
    }

    nextQuestion() {
        if (this.selectedAnswer === null) {
            alert('Veuillez sélectionner une réponse !');
            return;
        }

        const questionData = this.questions[this.currentQuestion];
        const selectedChoice = questionData.choices[this.selectedAnswer];
        const isCorrect = selectedChoice === questionData.correct;

        if (isCorrect) {
            this.score++;
        }

        // Show visual feedback
        this.showAnswerFeedback(isCorrect, questionData.correct);

        // Record answer
        this.userAnswers.push({
            question: questionData.question,
            selected: selectedChoice,
            correct: questionData.correct,
            isCorrect: isCorrect
        });

        // Wait a moment to show feedback, then continue
        setTimeout(() => {
            this.currentQuestion++;
            this.showQuestion();
        }, 500);
    }

    showAnswerFeedback(isCorrect, correctAnswer) {
        const answerOptions = document.querySelectorAll('.answer-option');
        const questionData = this.questions[this.currentQuestion];

        answerOptions.forEach((option, index) => {
            const choice = questionData.choices[index];
            const indicator = option.querySelector('.answer-indicator');

            if (index === this.selectedAnswer) {
                if (isCorrect) {
                    option.classList.add('correct');
                    indicator.innerHTML = '<i class="fas fa-check"></i>';
                    indicator.classList.add('correct');
                } else {
                    option.classList.add('incorrect');
                    indicator.innerHTML = '<i class="fas fa-times"></i>';
                    indicator.classList.add('incorrect');
                }
            }

            if (choice === correctAnswer && !isCorrect) {
                option.classList.add('correct');
                option.querySelector('.answer-indicator').innerHTML = '<i class="fas fa-check"></i>';
                option.querySelector('.answer-indicator').classList.add('correct');
            }
        });

        document.getElementById('nextBtn').disabled = true;
    }

    updateDisplay() {
        // Update progress
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        const scoreText = document.getElementById('scoreText');

        if (this.totalQuestions > 0) {
            const progressPercent = (this.currentQuestion / this.totalQuestions) * 100;
            progressFill.style.width = `${progressPercent}%`;
            progressText.textContent = `Question ${this.currentQuestion + 1}/${this.totalQuestions}`;
        }

        scoreText.textContent = `Score: ${this.score}/${this.currentQuestion}`;
    }

    stopQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.totalQuestions = 0;
        this.questions = [];
        this.userAnswers = [];
        this.currentMode = null;

        // Reset UI
        document.querySelectorAll('.mode-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.getElementById('startBtn').disabled = true;

        this.showModeSelection();
    }

    showFinalResults() {
        const percentage = this.totalQuestions > 0 ? (this.score / this.totalQuestions) * 100 : 0;
        let grade;

        if (percentage >= 75) grade = 'A';
        else if (percentage >= 60) grade = 'B';
        else if (percentage >= 40) grade = 'C';
        else grade = 'D';

        // Update results display
        document.getElementById('finalScore').textContent = `${this.score}/${this.totalQuestions}`;
        document.getElementById('finalPercentage').textContent = `${percentage.toFixed(1)}%`;
        document.getElementById('finalGrade').textContent = grade;

        // Set grade color
        const gradeElement = document.getElementById('finalGrade');
        gradeElement.className = 'stat-value grade';
        if (grade === 'A') gradeElement.style.color = '#059669';
        else if (grade === 'B') gradeElement.style.color = '#059669';
        else if (grade === 'C') gradeElement.style.color = '#d97706';
        else gradeElement.style.color = '#dc2626';

        // Show/hide errors button
        const errorsCount = this.userAnswers.filter(answer => !answer.isCorrect).length;
        const viewErrorsBtn = document.getElementById('viewErrorsBtn');
        if (errorsCount > 0) {
            viewErrorsBtn.style.display = 'inline-flex';
            viewErrorsBtn.innerHTML = `<i class="fas fa-eye"></i> Voir les erreurs (${errorsCount})`;
        } else {
            viewErrorsBtn.style.display = 'none';
        }

        this.showResultsSection();
    }

    showErrorDetails() {
        const incorrectAnswers = this.userAnswers.filter(answer => !answer.isCorrect);
        
        if (incorrectAnswers.length === 0) {
            alert('Aucune erreur à afficher !');
            return;
        }

        const errorsContent = document.getElementById('errorsContent');
        errorsContent.innerHTML = '';

        incorrectAnswers.forEach((answer, index) => {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-item';
            
            let questionText = answer.question;
            if (questionText.length > 100) {
                questionText = questionText.substring(0, 100) + '...';
            }

            errorDiv.innerHTML = `
                <div class="error-question">Question ${index + 1}: ${questionText}</div>
                <div class="error-answers">
                    <div class="error-answer user">
                        <i class="fas fa-times"></i> Votre réponse: ${answer.selected}
                    </div>
                    <div class="error-answer correct">
                        <i class="fas fa-check"></i> Bonne réponse: ${answer.correct}
                    </div>
                </div>
            `;

            errorsContent.appendChild(errorDiv);
        });

        document.getElementById('errorsModal').style.display = 'flex';
    }

    closeErrorsModal() {
        document.getElementById('errorsModal').style.display = 'none';
    }

    restart() {
        this.stopQuiz();
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VocabularyTrainer();
});
