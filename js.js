// Добавляем символ в поле вводаco
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
   
}

// Выполняем вычисление выражения
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);  
    } catch (e) {
        display.value = 'eror'; 
    }
}

// Очищаем поле ввода
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

document.addEventListener('keydown', handleKeyboardInput);

function handleKeyboardInput(event) {
    const display = document.getElementById('display');
    const key = event.key;
    console.log(key);

    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(` ${key} `);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        clearDisplay();
    }
}


// Добавляем обработчик события нажатия клавиши
