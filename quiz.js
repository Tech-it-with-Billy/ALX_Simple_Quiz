document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-answer');
    const feedback = document.getElementById('feedback');

    function checkAnswer() {
        const correctAnswer = '4';
        const checkedButton = document.querySelector('input[name="quiz"]:checked');

        if (checkedButton) {
            const userAnswer = checkedButton.value;

            if (userAnswer === correctAnswer) {
                feedback.textContent = 'Correct! Well done.';
                feedback.style.color = '#28a745';
            } else {
                feedback.textContent = "That's incorrect. Try again!";
                feedback.style.color = '#dc3545';
            }
        } else {
            feedback.textContent = 'Please select an answer.';
            feedback.style.color = '#ffc107';
        }
    }

    submitButton.addEventListener('click', checkAnswer);
});
