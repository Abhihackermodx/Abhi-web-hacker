function makePrediction() {
    const periodNumber = document.getElementById('periodInput').value;

    if (!periodNumber) {
        alert('Please enter a valid period number');
        return;
    }

    // Show processing animation
    document.getElementById('predictionResult').textContent = "SERVER CHECKING...";
    
    setTimeout(() => {
        const prediction = predictBigOrSmall(periodNumber);
        document.getElementById('predictionResult').textContent = `PREDICTION ➪ ${prediction.toUpperCase()}`;
    }, 2000); // Simulating delay for server check
}

function predictBigOrSmall(periodNumber) {
    // Convert period number to digits and calculate sum of squares
    const periodDigits = [...periodNumber].map(Number);
    const digitSumOfSquares = periodDigits.reduce((sum, digit) => sum + digit ** 2, 0);
    
    // Apply modulo 10 to get the prediction
    const prediction = digitSumOfSquares % 10;

    // Return whether prediction is "Small" or "Big"
    return prediction >= 5 ? "Small" : "Big";
}
