const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if(button.id === 'clear') {
      currentInput = '';
      display.value = '';
    } else if(button.id === 'equals') {
      try {
        const result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
      } catch {
        display.value = 'Error';
        currentInput = '';
      }
    } else {
      const num = button.getAttribute('data-num');
      const op = button.getAttribute('data-op');

      if(num !== null) {
        currentInput += num;
        display.value = currentInput;
      } else if(op !== null) {
        if(currentInput.length > 0 && !/[+\-*/.]$/.test(currentInput)) {
          currentInput += op;
          display.value = currentInput;
        }
      }
    }
  });
});