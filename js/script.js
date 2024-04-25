const convertButton = document.getElementById('convert');
const resetButton = document.getElementById('reset');
const fromUnitSelect = document.getElementById('from');
const suhuInput = document.getElementById('suhu');
const resultDiv = document.getElementById('result');
const darkModeToggle = document.getElementById('dark-mode-toggle');

function convertTemperature() {
    const fromUnit = fromUnitSelect.value;
    const suhu = parseFloat(suhuInput.value);

    if (isNaN(suhu)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    let convertedResult;
    let calculationSteps;

    if (fromUnit === 'celsius') {
        const fahrenheitValue = (suhu * 9/5) + 32;
        const kelvinValue = suhu + 273.15;
        convertedResult = `${suhu} Celsius = ${fahrenheitValue.toFixed(2)} Fahrenheit<br>${suhu} Celsius = ${kelvinValue.toFixed(2)} Kelvin`;
        calculationSteps = `To convert Celsius to Fahrenheit: (${suhu} °C × 9/5) + 32 = ${fahrenheitValue.toFixed(2)} °F<br>To convert Celsius to Kelvin: ${suhu} °C + 273.15 = ${kelvinValue.toFixed(2)} K`;
    } else if (fromUnit === 'fahrenheit') {
        const celsiusValue = (suhu - 32) * (5/9);
        const kelvinValue = (suhu - 32) * (5/9) + 273.15;
        convertedResult = `${suhu} Fahrenheit = ${celsiusValue.toFixed(2)} Celsius<br>${suhu} Fahrenheit = ${kelvinValue.toFixed(2)} Kelvin`;
        calculationSteps = `To convert Fahrenheit to Celsius: (${suhu} °F - 32) × 5/9 = ${celsiusValue.toFixed(2)} °C<br>To convert Fahrenheit to Kelvin: (${suhu} °F - 32) × 5/9 + 273.15 = ${kelvinValue.toFixed(2)} K`;
    } else {
        const celsiusValue = suhu - 273.15;
        const fahrenheitValue = (suhu - 273.15) * (9/5) + 32;
        convertedResult = `${suhu} Kelvin = ${celsiusValue.toFixed(2)} Celsius<br>${suhu} Kelvin = ${fahrenheitValue.toFixed(2)} Fahrenheit`;
        calculationSteps = `To convert Kelvin to Celsius: ${suhu} K - 273.15 = ${celsiusValue.toFixed(2)} °C<br>To convert Kelvin to Fahrenheit: (${suhu} K - 273.15) × 9/5 + 32 = ${fahrenheitValue.toFixed(2)} °F`;
    }

    resultDiv.innerHTML = convertedResult + "<br><br><strong>Calculation Steps:</strong><br>" + calculationSteps;
}

function resetFields() {
    suhuInput.value = '';
    resultDiv.innerHTML = '';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('dark-mode-icon');
}

convertButton.addEventListener('click', convertTemperature);
resetButton.addEventListener('click', resetFields);
darkModeToggle.addEventListener('click', toggleDarkMode);
