//variables of inde.html
const buttons = document.querySelectorAll('button');
const btn0 = document.querySelectorAll('#buton-0');
const btn1 = document.querySelectorAll('#buton-1');
const btn2 = document.querySelectorAll('#buton-2');
const btn3 = document.querySelectorAll('#buton-3');
const btn4 = document.querySelectorAll('#buton-4');
const btn5 = document.querySelectorAll('#buton-5');
const btn6 = document.querySelectorAll('#buton-6');
const btn7 = document.querySelectorAll('#buton-7');
const btn8 = document.querySelectorAll('#buton-8');
const btn9 = document.querySelectorAll('#buton-9');
const btnCE = document.querySelectorAll('#buton-ce');
const btnC = document.querySelectorAll('#buton-c');
const btnReturn = document.querySelectorAll('#buton-return');
const btnDivision = document.querySelectorAll('#buton-division');
const btnMultiplication = document.querySelectorAll('#buton-multiplication');
const btnSubstract = document.querySelectorAll('#buton-substract');
const btnSum = document.querySelectorAll('#buton-sum');
const btnAns = document.querySelectorAll('#buton-ans');
const btnPoint = document.querySelectorAll('#buton-point');
const btnEqual = document.querySelectorAll('#buton-equal');

const inputScreen = document.querySelector('#screen-input');
const resultScreen = document.querySelector('#screen-result');

//general variables
let ansValue = 0;
let inputValue = '';
let evalValue = '';
let resultValue = '';

//event initialization
buttons.forEach((input) => {
    input.addEventListener('click', () => {
      eventButton(input.id);
    });
  });

  function eventButton(optionGame){
    switch (optionGame) {
        case "buton-0":
            inputValue = inputValue + '0';
            evalValue = evalValue + '0';
            break;
        case "buton-1":
            inputValue = inputValue + '1';
            evalValue = evalValue + '1';;
            break;
        case "buton-2":
            inputValue = inputValue + '2';
            evalValue = evalValue + '2';
            break;
        case "buton-3":
            inputValue = inputValue + '3';
            evalValue = evalValue + '3';
            break;
        case "buton-4":
            inputValue = inputValue + '4';
            evalValue = evalValue + '4';
            break;
        case "buton-5":
            inputValue = inputValue + '5';
            evalValue = evalValue + '5';
            break;
        case "buton-6":
            inputValue = inputValue + '6';
            evalValue = evalValue + '6';
            break;
        case "buton-7":
            inputValue = inputValue + '7';
            evalValue = evalValue + '7';
            break;
        case "buton-8":
            inputValue = inputValue + '8';
            evalValue = evalValue + '8';
            break;
        case "buton-9":
            inputValue = inputValue + '9';
            evalValue = evalValue + '9';
            break;
        case "buton-point":
            inputValue = inputValue + '.';
            evalValue = evalValue + '.';
            break;
        case "buton-division":
            inputValue = inputValue + String.fromCodePoint(247);
            evalValue = evalValue + '/';
            break;
        case "buton-multiplication":
            inputValue = inputValue + 'x';
            evalValue = evalValue + '*';
            break;
        case "buton-substract":
            inputValue = inputValue + '-';
            evalValue = evalValue + '-';
            break;
        case "buton-sum":
            inputValue = inputValue + '+';
            evalValue = evalValue + '+';
            break;
        case "buton-return":
            inputValue = inputValue.replace(/.$/, '');
            evalValue = evalValue.replace(/.$/, '');
            break;
        case "buton-c":
            inputValue = '';
            evalValue = '';
            resultValue = '';
            break;
        case "buton-ce":
            inputValue = '';
            evalValue = '';
            resultValue = '';
            ansValue = 0;
            break;
        case "buton-ans":
            inputValue = ansValue.toString();
            evalValue = ansValue.toString();
            resultValue = ansValue.toString();
            break;
        case "buton-iqual":
            try {
                resultValue = eval(evalValue).toString();
                ansValue = eval(evalValue);
                inputValue = resultValue;
                evalValue = resultValue;
              } catch (error) {
                resultValue = '-Error';
              }
            break;
            
        default:
            inputValue = inputValue;
            evalValue = evalValue;
            break;
    }
    inputScreen.textContent = inputValue;
    resultScreen.textContent = resultValue;
}