let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        // Safer calculation instead of direct eval
        let result = Function('"use strict"; return (' + display.value + ')')();
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}

// Keyboard input support
document.addEventListener('keydown', (event) => {
    if (!isNaN(event.key) || ['+', '-', '*', '/', '.'].includes(event.key)) {
        appendValue(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        deleteLast();
    } else if (event.key.toLowerCase() === 'c') {
        clearDisplay();
    }
});