const sum = document.getElementById('sum');
sum.addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    document.getElementById('result').innerHTML = num1 + num2;
})

const resta = document.getElementById('resta');
resta.addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    document.getElementById('result').innerHTML = num1 - num2;
})

const mult = document.getElementById('mult');
mult.addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    document.getElementById('result').innerHTML = num1 * num2;
})

function div() {
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    document.getElementById('result').innerHTML = num1 / num2;
}
