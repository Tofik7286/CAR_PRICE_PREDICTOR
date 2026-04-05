document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('predictForm');
    if (!form) {
        return;
    }

    const kmsInput = document.getElementById('kms_driven');
    const resultBox = document.getElementById('resultBox');
    const predictionValue = document.getElementById('predictionValue');
    const resultMessage = document.getElementById('resultMessage');
    const predictButton = document.getElementById('predictButton');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (!kmsInput || !resultBox || !predictionValue || !resultMessage || !predictButton) {
            return;
        }

        const kmsValue = Number(kmsInput.value);
        if (Number.isNaN(kmsValue) || kmsValue < 0) {
            alert('Please enter valid kilometers driven.');
            return;
        }

        const originalButtonText = predictButton.textContent;
        predictButton.disabled = true;
        predictButton.textContent = 'Predicting...';
        resultMessage.textContent = '';
        resultMessage.classList.remove('is-error', 'is-success');

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form)
            });

            if (!response.ok) {
                throw new Error('Prediction request failed.');
            }

            const predictionText = (await response.text()).trim();
            const numericValue = Number(predictionText);
            const formattedValue = Number.isFinite(numericValue)
                ? `Rs ${Math.round(numericValue).toLocaleString('en-IN')}`
                : predictionText;

            predictionValue.textContent = formattedValue;
            resultBox.classList.remove('result-hidden');
            resultBox.classList.remove('result-visible');
            void resultBox.offsetWidth;
            resultBox.classList.add('result-visible');

            resultMessage.textContent = 'Prediction generated successfully.';
            resultMessage.classList.add('is-success');
        } catch (error) {
            resultMessage.textContent = 'Prediction me issue aaya. Please try again.';
            resultMessage.classList.add('is-error');
        } finally {
            predictButton.disabled = false;
            predictButton.textContent = originalButtonText;
        }
    });
});
