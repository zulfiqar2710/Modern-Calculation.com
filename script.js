let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let calculation = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('num')) {
      calculation += button.value;
      display.value = calculation;
    } else if (button.classList.contains('op')) {
      operator = button.value;
      calculation += operator;
      display.value = calculation;
    } else if (button.classList.contains('ac')) {
      calculation = '';
      display.value = calculation;
    } else if (button.classList.contains('del')) {
      calculation = calculation.slice(0, -1);
      display.value = calculation;
    } else if (button.classList.contains('eq')) {
      try {
        display.value = eval(calculation);
        calculation = display.value;
      } catch (error) {
        display.value = 'Error';
      }
    }
  });
});