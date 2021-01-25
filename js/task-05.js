// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

{
  /* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output"></span>!</h1> */
}

const inputRef = document.querySelector('#name-input');
console.log(inputRef);
const outputRef = document.querySelector('#name-output');

const showName = () => {
  if (inputRef.value === '') {
    outputRef.textContent = 'незнакомец';
  } else {
    outputRef.textContent = inputRef.value;
  }
};

inputRef.addEventListener('input', showName);
