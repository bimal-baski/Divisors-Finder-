function findDivisors() {
    const resultElement = document.getElementById('result');
    const numberInput = document.getElementById('numberInput').value;
    const number = parseInt(numberInput);
    
    resultElement.innerHTML = ''; // Clear previous results

    if (isNaN(number) || number <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            const listItem = document.createElement('li');
            listItem.textContent = i;
            resultElement.appendChild(listItem);
        }
    }
}
