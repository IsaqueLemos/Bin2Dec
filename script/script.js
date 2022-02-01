const warning = document.querySelector('#warning');
const binary = document.querySelector('#binary');
const decimalValue = document.querySelector('#decimalValue')

function warningMsg() {
    let binValue = binary.value;
    warning.style.color = 'white'
    warning.innerHTML = 'Binário -> Decimal'

    for (let i = binValue.length - 1; i >= 0; i--) {

        if (isNaN(binValue[i]) || parseInt(binValue[i]) > 1) {

            warning.style.color = 'red'
            warning.innerHTML = 'Inserir 1 ou 0.';
        } 
    }
}

function getDecimal() {
    decimalValue.style.display = 'none'    
    let decimal = 0;
    let binValue = binary.value;
 
    for (let i = binValue.length - 1; i >= 0; i--) {

        if (isNaN(binValue[i]) || parseInt(binValue[i]) > 1) {

            decimalValue.style.display = 'initial';
            decimalValue.innerHTML = '[ERRO]'

        } else {

            let num = parseInt(binValue[i]);
            decimal += num * Math.pow(2, binValue.length - 1 - i);
            decimalValue.innerHTML = decimal;
            decimalValue.style.display = 'initial'
            
        }
    } 
}