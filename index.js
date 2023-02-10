const p = document.querySelector('p');

let count = 0;

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const divPlus2 = document.getElementById('plus2');
const divMinus2 = document.getElementById('minus2');
const divPlus5 = document.getElementById('plus5');
const divMinus5 = document.getElementById('minus5');
const enterNumber = document.getElementById('enterNumber');

plus.addEventListener('click', () => {
    p.textContent = ++count;
});

minus.addEventListener('click', () => {
    p.textContent = --count;
});

divPlus2.addEventListener('click', () => {
    ++count;
    p.textContent = ++count;
});

divMinus2.addEventListener('click', () => {
    --count;
    p.textContent = --count;
});

divPlus5.addEventListener('click', () => {
    count += 4;
    p.textContent = ++count;
});

divMinus5.addEventListener('click', () => {
    count -= 4;
    p.textContent = --count;
});

enterNumber.addEventListener('click', () => {
    const input = document.querySelector('input');
    const enterTxt = document.querySelector('.enterTxt');
    enterTxt.textContent = `+${input.value}`;
    count += input.value - 1;
    p.textContent = ++count;
});




