var input = document.getElementById('inputBox');
var buttons = document.querySelectorAll('button');
// input.value = 5
var string = "";
var arr = Array.from('button');

function appendToResult(value) {
  input.value += value;
}

function performOperation(operator) {
  document.getElementById('inputBox').value += operator;
}

function clearResult() {
  document.getElementById('inputBox').value = '';
}

function delResult() {
  input.value = input.value.slice(0, -1);
}

function percentageToResult() {
  try {
    let expression = input.value;
    let lastNumberMatch = expression.match(/(\d+(\.\d+)?)$/);
    if (lastNumberMatch) {
      let lastNumber = lastNumberMatch[0];
      let percentageValue = (parseFloat(lastNumber) / 100).toString();
      input.value = expression.slice(0, -lastNumber.length) + percentageValue;
      input.value = eval(input.value);
    }
  } catch (error) {
    input.value = 'Error';
  }
}

function calculateResult() {
  try {
    var result = eval(input.value);
    input.value = result.toFixed(2);
  } catch (error) {
    document.getElementById('inputBox').value = 'Error';
  }
}

//end code here....