document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const buttons = Array.from(document.querySelectorAll('.btn'));
  
  let currentInput = '';
  let previousInput = '';
  let operator = '';
  
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const value = e.target.innerText;

      if (value === 'C') {
        currentInput = '';
        previousInput = '';
        operator = '';
        display.value = '';
      } else if (value === '<') {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
      } else if (value === '=') {
        if (currentInput && previousInput) {
          const result = calculate(previousInput, currentInput, operator);
          display.value = result;
          previousInput = result;
          currentInput = '';
          operator = '';
        }
      } else if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput) {
          if (previousInput) {
            const result = calculate(previousInput, currentInput, operator);
            display.value = result;
            previousInput = result;
            currentInput = '';
          } else {
            previousInput = currentInput;
            currentInput = '';
          }
          operator = value;
        }
      } else {
        currentInput += value;
        display.value = currentInput;
      }
    });
  });

  function calculate(prev, curr, operator) {
    const prevNum = parseFloat(prev);
    const currNum = parseFloat(curr);
    if (operator === '+') return prevNum + currNum;
    if (operator === '-') return prevNum - currNum;
    if (operator === '*') return prevNum * currNum;
    if (operator === '/') return currNum !== 0 ? prevNum / currNum : 'Error';
    return currNum;
  }
});
