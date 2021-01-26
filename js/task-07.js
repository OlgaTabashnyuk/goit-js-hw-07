// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
// const
console.log(textRef.textContent);

const changeSize = () => {
  if (inputRef.value > 50) {
    textRef.style.fontSize = '45px';
  } else {
    textRef.style.fontSize = '20px';
  }
};
inputRef.addEventListener('input', changeSize);

// вариант 2

// (function () {
//   var rng = document.getElementById('font-size-control');
//   var text = document.getElementById('text');
//   rng.addEventListener('input', function () {
//     text.style.fontSize = rng.value + 'px';
//   });
// })();
