let btnDigits = document.body.querySelectorAll('#number');
let btnOperations = document.body.querySelectorAll('#operation');
let btnEqual = document.body.querySelector('#equal');
let output = document.body.querySelector('.result');
let btnClear = document.body.querySelector('.clear');

for (let i = 0; i < btnDigits.length; i++) {
    btnDigits[i].onclick = () => {
        output.value = output.value === 'Result' ? btnDigits[i].value : output.value + btnDigits[i].value;
    }
}

for (let i = 0; i < btnOperations.length; i++) {
    const element = btnOperations[i];
    let elementValue = element.value === 'x' ? '*' : element.value
    element.onclick = () => {
        output.value = output.value === 'Result' ? '0 ' + elementValue + ' ': output.value + ' ' + elementValue + ' ';
    }
}

btnClear.onclick = () => output.value = '';
btnEqual.onclick = () => {
    if (output.value === 'Result' || output.value === '') {
        output.value = '0';
    } else {
        try {
            let result = new Function(`return ${output.value}`)
            console.log(result());
            output.value = new String(result())
        } catch (error) {
            output.value = 'Incorrect!'
        }
        
    }
}




